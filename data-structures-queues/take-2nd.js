/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return;
  const firstInQueue = queue.dequeue();
  queue.enqueue(firstInQueue);
  const secondInQueue = queue.dequeue();
  return secondInQueue;
}
