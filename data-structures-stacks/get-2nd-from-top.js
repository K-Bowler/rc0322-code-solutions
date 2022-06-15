/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const firstStack = stack.pop();
  if (firstStack === undefined) return;
  const secondStack = stack.peek();
  stack.push(firstStack);
  return secondStack;
}
