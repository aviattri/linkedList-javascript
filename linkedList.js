class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

///A -> B -> C -> D -> NULL;

//Traversal Algo
const printLinkedList = (head) => {
  for (let iterator = head; iterator != null; iterator = iterator.next) {
    console.log(iterator.val);
  }
};

//recursion
const recursionList = (head) => {
  if (head === null) return;
  console.log(head.val);
  recursionList(head.next);
};

recursionList(a);
