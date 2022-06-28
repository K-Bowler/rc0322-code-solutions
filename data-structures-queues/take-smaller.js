/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return;
  const firstInQueue = queue.dequeue();
  if (queue.peek() <= firstInQueue) {
    const secondInQueue = queue.dequeue();
    queue.enqueue(firstInQueue);
    return secondInQueue;
  } else {
    const secondInQueue = queue.dequeue();
    if (secondInQueue === undefined) return firstInQueue;
    queue.enqueue(secondInQueue);
    return firstInQueue;
  }
}
