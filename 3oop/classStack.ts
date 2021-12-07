class Stack {
    items: any[];
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    add(element:string) {
        return this.items.push(element);
    }
    
    // remove element from the stack
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the stack
    size(){
        return this.items.length;
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }
}
let stack = new Stack();

stack.add('1');
stack.add('2');
stack.add('3');
console.log(stack.items);