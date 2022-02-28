// given 2 head nodes of 2 lists, combine them together

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const zipperList = (head1, head2) => {
  //Time -> linear O(n)
  //Space -> constant (1)

  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while (current1 !== null && current2 !== null) {
    //if count is even then take a node from a list 2
    if (count % 2 == 0) {
      tail.next = current2;
      //shift current2 pointer
      current2 = current2.next;
    }
    // if a count is odd then take a node from a list 1
    else {
      tail.next = current1;
      //shift current1 pointer
      current1 = current1.next;
    }

    //move the tail pointer
    tail = tail.next;
    count += 1;
  }
  //add any remaining elements of the bigger list
  if (current1 === null) tail.next = current1;
  if (current2 === null) tail.next = current2;

  return head1;
};

const zipperListRecursion = (head1, head2) => {
  //Time -> linear O(n)
  //Space -> linear O(n)
  if (head1 === null && head2 === null) return null;

  //2 base cases
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;

  //move head1 and head2;
  head1.next = head2;
  head2.next = zipperListRecursion(next1, next2);
  return head1;
};

const printList = (head) => {
  for (let iterator = head; iterator != null; iterator = iterator.next) {
    console.log(iterator.val);
  }
};

const test = () => {
  //   list 1
  const a = new Node(1);
  const b = new Node(2);
  const c = new Node(3);
  const d = new Node(4);

  a.next = b;
  b.next = c;
  c.next = d;

  //   list 2
  const e = new Node("A");
  const f = new Node("B");
  const g = new Node("C");
  const h = new Node("D");

  e.next = f;
  f.next = g;
  g.next = h;

  printList(zipperListRecursion(a, e));
};

test();
