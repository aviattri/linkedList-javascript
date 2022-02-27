// sum the values of a list

//iterative approach
const sumList = (head) => {
  //initlize sum
  // Time o(n)
  // Space o(1)
  let sum = 0;
  let current = head;
  while (current != null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};

//recursive approach
const recursiveSumList = (head) => {
  // Time o(n)
  // Space o(n)
  if (head == null) return 0;
  return head.val + recursiveSumList(head.next);
};

const test = () => {
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

  console.log(recursiveSumList(a));
};

test();
