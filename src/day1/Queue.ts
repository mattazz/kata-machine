type Node<T> = {
    value: T,
    next?: Node<T>,
    prev?: Node<T>
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>; // refers to the node 
    private tail?: Node<T>; // refers to the node

    constructor() {
        this.head = this.tail = undefined;
         this.length = 0;
        
    }

    enqueue(item: T): void { // Add to tail

}
    deque(): T | undefined { // remove from head
        if (!this.head){
            return undefined;
        }
        this.length--;
        
        const head = this.head; // save your head
        this.head = this.head.next; // update the head

        // Free
        head.next = undefined

        return head.value;
}
    peek(): T | undefined { // peak at head.val
        return this.head?.value;
}
}