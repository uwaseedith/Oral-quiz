class Node<T> {
    data: T;
    next: Node<T> | null;
  
    constructor(data: T) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList<T> {
    head: Node<T> | null;
  
    constructor() {
      this.head = null;
    }
  
    add(data: T): void {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    remove(data: T): boolean {
      if (!this.head) return false;
  
      if (this.head.data === data) {
        this.head = this.head.next;
        return true;
      }
  
      let current = this.head;
      while (current.next && current.next.data !== data) {
        current = current.next;
      }
  
      if (current.next) {
        current.next = current.next.next;
        return true;
      }
  
      return false;
    }
  
    find(data: T): Node<T> | null {
      let current = this.head;
      while (current && current.data !== data) {
        current = current.next;
      }
      return current;
    }
  
    print(): void {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  export default LinkedList;
  