/**
 * Stack is a last-in-first-out (LIFO) data structure.
 * Elements can be inserted and removed from the top of the stack only. One can only
 * view the top element. The ADT (abstract data type) is given below.
 *
 * ADT------------------------------------------------------------------------------
 *
 * A stack ADT consists of the following functions:
 *      isEmpty(): checks if the stack is empty, returns true if yes
 *      peek(): returns the element present at the top of the stack
 *      length(): returns the number of elements present in the stack
 *      pushBack(item): pushes an item at the top of the stack
 *      popBack(): Pops an element off the top of the stack
 *
 * ---------------------------------------------------------------------------------
 *
 * My addition to the ADT:
 *      clear(): removes all elements from the stack, clears the stack
 */

class Stack<Type> {
    /** @private this generic class will allow users to create a stack for any type of data */
    private stack: Type[] = [];
    /** @private the top memeber of the class always points to the last element pushed into the stack. top + 1 returns the number of elements in the stack */
    private top = -1;

    /**
     * checks if the stack is empty or not
     * @returns a boolean value indicating whether the stack is empty or not
     */
    isEmpty() {
        return this.stack.length === 0;
    }

    /**
     * provides the last pushed element/topmost element of the stack
     * @returns the topmost element/last pushed element of the stack
     */
    peek() {
        return this.stack[this.top];
    }

    /**
     * provides the count of elements in the stack
     * @returns the number of elements present in the stack
     */
    length() {
        return this.top + 1;
    }

    /**
     * pushes an element into the stack
     * @param item the item of type Type, that you want to push into the stack
     */
    pushBack(item: Type) {
        this.top++;
        this.stack.push(item);
    }

    /**
     * pops an element off the top of the stack
     * @returns the popped element
     */
    popBack() {
        this.top--;
        return this.stack.pop();
    }

    /**
     * makes the stack empty
     */
    clear() {
        this.stack = [];
    }
}

export default Stack;
