//problem - Linekd List Values
// singley list
// we have to write a function that takes the head of an
// linked list as parameter and returns an array with all the values of the given linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// iterative appraoch
const linkedListValues = (head) => {
  //define empty array
  const values = [];
  // create and assign the iterator
  let currentItr = head;

  while (currentItr !== null) {
    values.push(currentItr.val);
    currentItr = currentItr.next;
  }

  return values;
};

// recursive approach

const iterativeValues = (head) => {
  const values = [];

  innerFun(head, values);

  return values;
};

const innerFun = (head, values) => {
  //break if the current node is null
  if (head === null) return;
  //push the current node value to the val
  values.push(head.val);
  //recursion
  innerFun(head.next, values);
};

const test = () => {
  const a = new Node(1);
  const b = new Node(2);
  const c = new Node(3);
  const d = new Node(4);

  a.next = b;
  b.next = c;
  c.next = d;

  let array = [];

  array = iterativeValues(a);

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

test();
