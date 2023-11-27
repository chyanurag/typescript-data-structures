/**
 * Queue is a linear, first-in-first-out data structure.
 * Elements are inserted at the rear end and removed from the front end. The ADT (abstract data type) is given below.
 *
 * ADT------------------------------------------------------------------------------
 * A queue ADT consists of the following functions:
 *      isEmpty(): checks if the queue is empty or not, and returns a boolean
 *      enqueue(): pushes an element at the rear end of the queue
 *      dequeue(): pops an element from the front of the stack
 * ---------------------------------------------------------------------------------
 */

/**
 * This is a generic type class that'll allow you to create a queueu for any data type
 */
class Queue<Type> {
    /** @private an arrayy that will hold the queue elements */
    private queue: Type[] = [];
    /** @private keeps track of the position of the last element of the queue */
    private rear = -1;

    /**
     * Tells if the queue contains any elements or not
     * @returns a boolean indicating if the queue is empty or not
     */
    isEmpty() {
        return this.rear === -1;
    }

    /**
     * this function allows you to push an element of type Type into the queue
     * @param item the item you want to push into the queue
     */
    enqueue(item: Type) {
        this.rear++;
        this.queue.push(item);
    }

    /**
     * removes an element off the front of the queue and returns it
     * @returns the element dequeued from teh queue
     */
    dequeue() {
        this.rear--;
        return this.queue.shift();
    }
}

export default Queue;
