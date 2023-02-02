interface LNode<T> {
  next: LNode<T>;
  value: T;
}

interface ILinkedList<T> {
  get(): T;
  prepend(value: T): void;
  append(value: T): void;
  inserttAt(value: T, position: number): void;
  remove(): void;
  removeAt(position: number): void;
  get(position: number): T;
  has(value: T): boolean;
  reverse(): void;
}
