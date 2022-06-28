/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) return;
  const firstInQueue = queue.dequeue();
  return queue.enqueue(firstInQueue);
}
