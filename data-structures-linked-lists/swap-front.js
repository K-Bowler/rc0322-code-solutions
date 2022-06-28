/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const secondNode = list.next;
  const thirdNode = list.next.next;
  secondNode.next = list;
  list.next = thirdNode;
  return secondNode;
}
