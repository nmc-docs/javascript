---
sidebar_position: 9
---

# Mutation Observer

## Giới thiệu về Mutation Observer

:::info[Giới thiệu]

- **Mutation Observer** là một Web API cho phép theo dõi và phản ứng với các thay đổi trong DOM. Nó thay thế cho Mutation Events cũ, cung cấp hiệu suất tốt hơn và API mạnh mẽ hơn.
- Ưu điểm:
  - Hiệu suất cao hơn Mutation Events
  - Không chặn luồng chính
  - Hỗ trợ quan sát nhiều loại thay đổi
  - Dễ dàng hủy đăng ký

:::

## Cơ bản về Mutation Observer

### Tạo một Mutation Observer

```js
// Khai báo callback function
const mutationCallback: MutationCallback = (
  mutationsList: MutationRecord[],
  observer: MutationObserver
) => {
  for (const mutation of mutationsList) {
    console.log("Mutation detected:", mutation);
  }
};

// Tạo observer instance
const observer = new MutationObserver(mutationCallback);
```

### Cấu hình Mutation Observer

```js
// Cấu hình options
const config: MutationObserverInit = {
  childList: true, // Theo dõi thêm/xóa node con
  attributes: true, // Theo dõi thay đổi thuộc tính
  attributeOldValue: true, // Lưu giá trị cũ của thuộc tính
  characterData: true, // Theo dõi thay đổi text content
  characterDataOldValue: true, // Lưu giá trị cũ của text
  subtree: true, // Theo dõi cả các node con cháu
  attributeFilter: ["class", "style"], // Chỉ theo dõi các thuộc tính cụ thể
};
```

## Các phương thức chính

### `observe()` - Bắt đầu "theo dõi"

```js
interface ObserveExample {
    element: HTMLElement;
    observer: MutationObserver;
}

class DOMObserver implements ObserveExample {
    element: HTMLElement;
    observer: MutationObserver;

    constructor(elementId: string) {
        this.element = document.getElementById(elementId)!;
        this.observer = new MutationObserver(this.handleMutations.bind(this));
    }

    startObserving(): void {
        const config: MutationObserverInit = {
            childList: true,
            attributes: true,
            subtree: true
        };

        this.observer.observe(this.element, config);
        console.log(`Started observing element: ${this.element.id}`);
    }

    private handleMutations(mutations: MutationRecord[]): void {
        mutations.forEach(mutation => {
            switch (mutation.type) {
                case 'childList':
                    console.log('Children changed');
                    break;
                case 'attributes':
                    console.log(`Attribute ${mutation.attributeName} changed`);
                    break;
            }
        });
    }
}

// Sử dụng
const domObserver = new DOMObserver('my-element');
domObserver.startObserving();
```

### `disconnect()` - Dừng "theo dõi"

```js
class ObservableElement {
    private observer: MutationObserver;
    private element: HTMLElement;
    private isObserving: boolean = false;

    constructor(elementId: string) {
        this.element = document.getElementById(elementId)!;
        this.observer = new MutationObserver(this.logMutations);
    }

    start(): void {
        if (!this.isObserving) {
            this.observer.observe(this.element, {
                childList: true,
                attributes: true
            });
            this.isObserving = true;
            console.log('Observation started');
        }
    }

    stop(): void {
        if (this.isObserving) {
            this.observer.disconnect();
            this.isObserving = false;
            console.log('Observation stopped');

            // Lấy tất cả mutations chưa xử lý
            const pendingMutations = this.observer.takeRecords();
            console.log('Pending mutations:', pendingMutations.length);
        }
    }

    private logMutations(mutations: MutationRecord[]): void {
        mutations.forEach(mutation => {
            console.log(`Mutation type: ${mutation.type}`);
        });
    }

    // Phương thức hủy để dọn dẹp
    dispose(): void {
        this.stop();
    }
}

// Sử dụng với try-catch-finally
try {
    const observable = new ObservableElement('target');
    observable.start();

    // Thực hiện các thao tác DOM...

} finally {
    // Đảm bảo dọn dẹp
    observable.dispose();
}
```

### `takeRecords()` - Lấy các mutations chưa xử lý

```js
interface MutationQueue {
    observer: MutationObserver;
    queue: MutationRecord[];
    maxQueueSize: number;
}

class MutationQueueManager implements MutationQueue {
    observer: MutationObserver;
    queue: MutationRecord[] = [];
    maxQueueSize: number = 100;

    constructor(target: Node) {
        this.observer = new MutationObserver((mutations) => {
            this.addToQueue(mutations);
        });

        this.observer.observe(target, {
            childList: true,
            attributes: true,
            subtree: true
        });
    }

    private addToQueue(mutations: MutationRecord[]): void {
        this.queue.push(...mutations);

        // Giới hạn kích thước queue
        if (this.queue.length > this.maxQueueSize) {
            this.queue = this.queue.slice(-this.maxQueueSize);
        }
    }

    processQueue(): void {
        // Lấy tất cả records mà không chờ callback
        const records = this.observer.takeRecords();
        this.addToQueue(records);

        // Xử lý queue
        this.queue.forEach(record => {
            this.processMutation(record);
        });

        this.queue = [];
    }

    private processMutation(record: MutationRecord): void {
        console.log(`Processing mutation: ${record.type}`);
        // Xử lý mutation ở đây
    }
}
```

## Các loại Mutation Records

### `MutationRecord` Interface

```js
interface MutationRecord {
    readonly type: 'attributes' | 'characterData' | 'childList';
    readonly target: Node;
    readonly addedNodes: NodeList;
    readonly removedNodes: NodeList;
    readonly previousSibling: Node | null;
    readonly nextSibling: Node | null;
    readonly attributeName: string | null;
    readonly attributeNamespace: string | null;
    readonly oldValue: string | null;
}

// Ví dụ xử lý các loại mutation khác nhau
class MutationProcessor {
    processMutations(mutations: MutationRecord[]): void {
        mutations.forEach(mutation => {
            switch (mutation.type) {
                case 'childList':
                    this.handleChildListMutation(mutation);
                    break;
                case 'attributes':
                    this.handleAttributeMutation(mutation);
                    break;
                case 'characterData':
                    this.handleCharacterDataMutation(mutation);
                    break;
            }
        });
    }

    private handleChildListMutation(mutation: MutationRecord): void {
        console.log('Child list mutation detected');

        // Kiểm tra các node được thêm vào
        if (mutation.addedNodes.length > 0) {
            console.log('Added nodes:', mutation.addedNodes);
        }

        // Kiểm tra các node bị xóa
        if (mutation.removedNodes.length > 0) {
            console.log('Removed nodes:', mutation.removedNodes);
        }
    }

    private handleAttributeMutation(mutation: MutationRecord): void {
        console.log(`Attribute '${mutation.attributeName}' changed`);
        console.log('Old value:', mutation.oldValue);
        console.log('New value:',
            (mutation.target as Element).getAttribute(mutation.attributeName!));
    }

    private handleCharacterDataMutation(mutation: MutationRecord): void {
        console.log('Text content changed');
        console.log('Old value:', mutation.oldValue);
        console.log('New value:', mutation.target.textContent);
    }
}
```

## Ví dụ thực tế

### Theo dõi thay đổi thuộc tính

```js
interface AttributeChange {
    element: Element;
    attributeName: string;
    oldValue: string | null;
    newValue: string | null;
    timestamp: number;
}

class AttributeMonitor {
    private observer: MutationObserver;
    private changes: AttributeChange[] = [];
    private target: Element;

    constructor(selector: string) {
        this.target = document.querySelector(selector)!;
        this.observer = new MutationObserver(this.handleAttributeChanges.bind(this));
    }

    startMonitoring(): void {
        this.observer.observe(this.target, {
            attributes: true,
            attributeOldValue: true,
            attributeFilter: ['class', 'style', 'data-*']
        });
    }

    private handleAttributeChanges(mutations: MutationRecord[]): void {
        mutations.forEach(mutation => {
            if (mutation.type === 'attributes') {
                const change: AttributeChange = {
                    element: mutation.target as Element,
                    attributeName: mutation.attributeName!,
                    oldValue: mutation.oldValue,
                    newValue: (mutation.target as Element)
                        .getAttribute(mutation.attributeName!),
                    timestamp: Date.now()
                };

                this.changes.push(change);
                this.onAttributeChange(change);
            }
        });
    }

    private onAttributeChange(change: AttributeChange): void {
        console.log('Attribute change detected:', change);

        // Có thể thêm logic xử lý tại đây
        switch (change.attributeName) {
            case 'class':
                this.handleClassChange(change);
                break;
            case 'style':
                this.handleStyleChange(change);
                break;
        }
    }

    private handleClassChange(change: AttributeChange): void {
        const oldClasses = change.oldValue?.split(' ') || [];
        const newClasses = change.newValue?.split(' ') || [];

        const added = newClasses.filter(c => !oldClasses.includes(c));
        const removed = oldClasses.filter(c => !newClasses.includes(c));

        console.log('Classes added:', added);
        console.log('Classes removed:', removed);
    }

    private handleStyleChange(change: AttributeChange): void {
        // Xử lý thay đổi style
        console.log('Style changed:', change);
    }

    getChangeHistory(): AttributeChange[] {
        return [...this.changes];
    }

    dispose(): void {
        this.observer.disconnect();
    }
}

// Sử dụng
const monitor = new AttributeMonitor('.my-element');
monitor.startMonitoring();
```

### Infinite Scroll Detection

```js
interface ScrollConfig {
    threshold: number;
    bufferSize: number;
    onLoadMore: () => Promise<void>;
}

class InfiniteScrollObserver {
    private observer: MutationObserver;
    private config: ScrollConfig;
    private isLoading: boolean = false;
    private lastHeight: number = 0;

    constructor(config: ScrollConfig) {
        this.config = config;
        this.observer = new MutationObserver(this.checkScroll.bind(this));
    }

    observe(container: HTMLElement): void {
        this.observer.observe(container, {
            childList: true,
            subtree: true,
            characterData: true
        });

        // Kiểm tra ban đầu
        this.checkScroll();
    }

    private async checkScroll(): Promise<void> {
        const container = document.querySelector('.scroll-container');
        if (!container) return;

        const currentHeight = container.scrollHeight;

        // Chỉ kiểm tra nếu chiều cao thay đổi đáng kể
        if (Math.abs(currentHeight - this.lastHeight) < 50) {
            return;
        }

        this.lastHeight = currentHeight;

        // Kiểm tra nếu gần đến cuối
        const scrollTop = container.scrollTop;
        const clientHeight = container.clientHeight;
        const scrollBottom = scrollTop + clientHeight;

        if (scrollBottom >= currentHeight - this.config.threshold && !this.isLoading) {
            await this.loadMore();
        }
    }

    private async loadMore(): Promise<void> {
        if (this.isLoading) return;

        this.isLoading = true;
        try {
            await this.config.onLoadMore();
        } catch (error) {
            console.error('Failed to load more content:', error);
        } finally {
            this.isLoading = false;
        }
    }

    disconnect(): void {
        this.observer.disconnect();
    }
}

// Sử dụng
const scrollObserver = new InfiniteScrollObserver({
    threshold: 100,
    bufferSize: 10,
    onLoadMore: async () => {
        // Gọi API để lấy thêm dữ liệu
        console.log('Loading more content...');
    }
});

scrollObserver.observe(document.querySelector('.scroll-container')!);
```

### Form Validation Observer

```js
interface FormValidationRule {
    selector: string;
    validate: (element: HTMLElement) => boolean;
    errorMessage: string;
}

class FormValidationObserver {
    private observer: MutationObserver;
    private rules: FormValidationRule[];
    private form: HTMLFormElement;

    constructor(formId: string, rules: FormValidationRule[]) {
        this.form = document.getElementById(formId) as HTMLFormElement;
        this.rules = rules;
        this.observer = new MutationObserver(this.validateForm.bind(this));
    }

    start(): void {
        // Quan sát thay đổi trong form
        this.observer.observe(this.form, {
            attributes: true,
            subtree: true,
            attributeFilter: ['value', 'checked', 'selected']
        });

        // Thêm sự kiện input cho real-time validation
        this.form.addEventListener('input', this.validateForm.bind(this));
    }

    private validateForm(): void {
        let isValid = true;

        this.rules.forEach(rule => {
            const element = this.form.querySelector(rule.selector) as HTMLElement;
            if (element) {
                const isValidRule = rule.validate(element);

                if (!isValidRule) {
                    isValid = false;
                    this.showError(element, rule.errorMessage);
                } else {
                    this.hideError(element);
                }
            }
        });

        // Cập nhật trạng thái submit button
        const submitButton = this.form.querySelector('button[type="submit"]') as HTMLButtonElement;
        if (submitButton) {
            submitButton.disabled = !isValid;
        }
    }

    private showError(element: HTMLElement, message: string): void {
        // Hiển thị thông báo lỗi
        const errorDiv = element.parentElement?.querySelector('.error-message')
            || document.createElement('div');

        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = 'red';

        if (!element.parentElement?.querySelector('.error-message')) {
            element.parentElement?.appendChild(errorDiv);
        }
    }

    private hideError(element: HTMLElement): void {
        // Ẩn thông báo lỗi
        const errorDiv = element.parentElement?.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    dispose(): void {
        this.observer.disconnect();
        this.form.removeEventListener('input', this.validateForm.bind(this));
    }
}

// Sử dụng
const formRules: FormValidationRule[] = [
    {
        selector: '#email',
        validate: (element) => {
            const value = (element as HTMLInputElement).value;
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        errorMessage: 'Email không hợp lệ'
    },
    {
        selector: '#password',
        validate: (element) => {
            const value = (element as HTMLInputElement).value;
            return value.length >= 8;
        },
        errorMessage: 'Mật khẩu phải có ít nhất 8 ký tự'
    }
];

const formValidator = new FormValidationObserver('myForm', formRules);
formValidator.start();
```

:::tip[Kết luận]

- Mutation Observer cung cấp cách tiếp cận hiệu quả và hiệu suất cao để phản ứng với các thay đổi DOM, thay thế cho các phương pháp cũ như polling hoặc Mutation Events.

:::
