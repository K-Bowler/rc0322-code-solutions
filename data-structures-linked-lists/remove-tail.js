/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return;
  let head = list;
  let secondNode = list.next;
  while (secondNode.next !== null) {
    head = secondNode;
    secondNode = secondNode.next;
  }
  head.next = null;
  return list;
}
