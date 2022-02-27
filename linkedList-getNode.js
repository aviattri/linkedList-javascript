// Write a function, getNodeValue,
// that takes in the head of a linked list and an index.
// The function should return the value of the linked list at the specified index.
// If there is no node at the given index, then return null.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//iterative approach
const getNode = (head, index) => {
  // time -> O(n) ; we are travering through the whole list
  //space -> O(1) ; we are using const var
  let listIndex = 0;
  let itr = head;
  while (itr != null) {
    if (listIndex === index) return itr.val;
    itr = itr.next;
    listIndex++;
  }
};

//recursive approach
const getNodeRecursively = (head, targetIndex) => {
  // time -> O(n) ; we are travering through the whole list
  //space -> O(n) ; we are using const var

  let listIndex = targetIndex;
  if (head === null) return null;
  if (listIndex === 0) return head.val;

  return getNodeRecursively(head.next, targetIndex - 1);
};

const test = () => {
  const a = new Node(1); // index = 0
  const b = new Node(2); // index = 1
  const c = new Node(3); // index = 2
  const d = new Node(4); // index = 3

  a.next = b;
  b.next = c;
  c.next = d;

  console.log(getNodeRecursively(a, 2));
};

test();
