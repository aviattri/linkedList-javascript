//context - find if the given value is in the lsit

//iterative
const findValue = (head, val) => {
  // time -> O(n) ; we are travering through the whole list
  //space -> O(1) ; we are using const number of variables
  let itr = head;
  while (itr != null) {
    if (itr.val === val) return true;
    itr = itr.next;
  }
  return false;
};

// recursive
const findValueRecursion = (head, target) => {
  // time -> O(n) ; we are travering through the whole list
  //space -> O(1) ; linear space because of call stack
  if (head == null) return false;
  if (head.val === target) return true;
  return findValueRecursion(head.next, target);
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

  console.log(findValueRecursion(a, 9));
};

test();
