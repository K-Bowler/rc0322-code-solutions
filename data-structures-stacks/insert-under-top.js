/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const firstStack = stack.pop();
  if (firstStack === undefined) return;
  stack.push(value);
  stack.push(firstStack);
  return stack.print();
}
