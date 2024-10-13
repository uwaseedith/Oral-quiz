"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    remove(data) {
        if (!this.head)
            return false;
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
    find(data) {
        let current = this.head;
        while (current && current.data !== data) {
            current = current.next;
        }
        return current;
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
exports.default = LinkedList;
