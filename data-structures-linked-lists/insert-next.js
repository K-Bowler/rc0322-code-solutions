/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const secondNode = list.next;
  list.next = new LinkedList(value);
  if (secondNode !== null) {
    list.next.next = secondNode;
  }
}
