// Write a function, reverseList,
// that takes in the head of a linked list as an argument.
// The function should reverse the order of the nodes in the linked list in-place
// and return the new head of the reversed linked list.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// given A -> B -> C -> D -> null
// output D -> C -> B -> A -> null

const reverseList = (head) => {
  let prev = null;
  let current = head;
  while (current != null) {
    //store the next node
    const next = current.next;
    // assigned the next pointer to prev node
    current.next = prev;

    prev = current;
    // make current is equal to the next node
    current = next;
  }
  return prev;
};

const recursiveReversedList = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return recursiveReversedList(next, head);
};

const test = () => {
  const a = new Node(1);
  const b = new Node(2);
  const c = new Node(3);
  const d = new Node(4);

  a.next = b;
  b.next = c;
  c.next = d;

  console.log(recursiveReversedList(a));
};

test();
