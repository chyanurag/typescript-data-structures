import { assert } from "chai";
import Queue from "../src/queue/Queue";

describe("Queue", function () {
    let queue: Queue<number>;

    beforeEach(function () {
        queue = new Queue<number>();
    });

    describe("Initialization check", function () {
        it("the queue must be initially empty", function () {
            assert.strictEqual(queue.isEmpty(), true);
        });
    });

    //describe("");
});
