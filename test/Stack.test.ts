import { assert } from "chai";
import Stack from "../src/stack/Stack";

describe("Stack", function () {
    let stack: Stack<Number>;

    beforeEach(function () {
        stack = new Stack<Number>();
    });

    describe("Initialization check", function () {
        it("the stack should be initially empty", function () {
            assert.strictEqual(stack.isEmpty(), true);
            assert.strictEqual(stack.length(), 0);
        });
    });

    describe("Pushing elements", function () {
        it("pushing an element onto the stack must increment its length by one", function () {
            stack.pushBack(100);

            assert.strictEqual(stack.length(), 1);

            stack.pushBack(200);

            assert.strictEqual(stack.length(), 2);
        });
    });

    describe("Popping elements", function () {
        it("popping an element off the stack must decrement its length by one. The popBack function must also return the popped element", function () {
            stack.pushBack(100);
            stack.pushBack(200);

            assert.strictEqual(stack.popBack(), 200);
            assert.strictEqual(stack.length(), 1);
        });

        it("trying to pop an element off an empty stack must return null", function () {
            assert.strictEqual(stack.popBack(), null);
        });
    });

    describe("Peeking at the stack", function () {
        it("peeking on a stack must return the last pushed element", function () {
            stack.pushBack(100);
            stack.pushBack(200);
            stack.pushBack(300);

            assert.strictEqual(stack.peek(), 300);

            stack.popBack();
            stack.popBack();

            assert.strictEqual(stack.peek(), 100);
        });

        it("peeking at an empty stack must return null", function () {
            assert.strictEqual(stack.peek(), null);
        });
    });

    describe("Clearing the stack", function () {
        it("clearing the stack must make the stack empty", function () {
            stack.pushBack(100);
            stack.pushBack(200);
            stack.pushBack(300);
            stack.clear();

            assert.strictEqual(stack.isEmpty(), true);
            assert.strictEqual(stack.length(), 0);
        });
    });
});
