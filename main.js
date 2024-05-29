// LinkedList Class

class LinkedList {
  constructor() {
    this.head = null;
  }

  // add a node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  // add a node to the beginning of the list
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  // size returns the total number of nodes in the list
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  // head returns the first node in the list
  headNode() {
    return this.head;
  }

  // tail returns the last node in the list
  tailNode() {
    let current = this.head;
    if (!current) return null;

    while (current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  // at(index) returns the node at the given index
  at(index) {
    let currentIndex = 0;
    let current = this.head;
    while (current) {
      if (currentIndex == index) return current;
      currentIndex++;
      current = current.nextNode;
    }

    return null;
  }

  // insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    let currentIndex = 0;
    let current = this.head;

    const newNode = new Node(value, this.head);

    if (index < 0 || index > this.size()) {
      console.log("Index out of bounds");
      return;
    }

    if (index == 0) {
      this.prepend(value);
      return;
    }
    if (index == this.size()) {
      this.append(value);
      return;
    }

    while (current) {
      if (currentIndex + 1 == index) {
        newNode.nextNode = current.nextNode;
        current.nextNode = newNode;
        break;
      }
      currentIndex++;
      current = current.nextNode;
    }

    return null;
  }

  //Create a removeAt(index) function that removes the node at the given index.
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.log("BAD INDEX == :(");
      return;
    }
    if (index == 0) {
      this.head = this.head.nextNode;
      return;
    }

    let nextIndex = 0;
    let current = this.head;

    while (current) {
      nextIndex++;
      if (nextIndex == index) {
        current.nextNode = current.nextNode.nextNode;
        break;
      }
      current = current.nextNode;
    }

    return null;
  }

  // pop removes the last element from the list
  pop() {
    if (!this.head) return null;
    if (!this.head.nextNode) {
      this.head = null;
      return;
    }

    let current = this.head;
    if (!current) return null;

    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = null;
  }

  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  // find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    let index = 0;
    let current = this.head;

    while (current) {
      if (current.value === value) return index;
      index++;
      current = current.nextNode;
    }
    return null;
  }

  toString() {
    let log = null;
    let current = this.head;

    while (current) {
      if (!log) {
        log = `(${current.value})`;
      } else {
        log += ` -> (${current.value})`;
      }
      current = current.nextNode;
    }
    return log + " -> null";
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// Example usage (I asked chatGPT for these tests xd):

function test1() {
  const list = new LinkedList();

  // Append values 1, 2, 3, 4
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);

  console.log("Initial list:");
  console.log(list.toString()); // Output: (1) -> (2) -> (3) -> (4) -> null

  // Insert value 5 at index 2
  list.insertAt(5, 2);
  console.log("\nAfter inserting 5 at index 2:");
  console.log(list.toString()); // Output: (1) -> (2) -> (5) -> (3) -> (4) -> null

  // Remove value at index 3
  list.removeAt(3);
  console.log("\nAfter removing value at index 3:");
  console.log(list.toString()); // Output: (1) -> (2) -> (5) -> (4) -> null

  // Insert value 6 at the beginning
  list.insertAt(6, 0);
  console.log("\nAfter inserting 6 at the beginning:");
  console.log(list.toString()); // Output: (6) -> (1) -> (2) -> (5) -> (4) -> null

  // Remove value at index 4
  list.removeAt(4);
  console.log("\nAfter removing value at index 4:");
  console.log(list.toString()); // Output: (6) -> (1) -> (2) -> (5) -> null
}

function test2() {
  const list = new LinkedList();

  // Append values 1, 2, 3
  list.append(1);
  list.append(2);
  list.append(3);

  console.log("Initial list:");
  console.log(list.toString()); // Output: (1) -> (2) -> (3) -> null

  // Insert value 0 at the beginning
  list.insertAt(0, 0);
  console.log("\nAfter inserting 0 at the beginning:");
  console.log(list.toString()); // Output: (0) -> (1) -> (2) -> (3) -> null

  // Insert value 4 at the end
  list.insertAt(4, list.size());
  console.log("\nAfter inserting 4 at the end:");
  console.log(list.toString()); // Output: (0) -> (1) -> (2) -> (3) -> (4) -> null

  // Remove value at the beginning
  list.removeAt(0);
  console.log("\nAfter removing value at the beginning:");
  console.log(list.toString()); // Output: (1) -> (2) -> (3) -> (4) -> null

  // Remove value at the end
  list.removeAt(list.size() - 1);
  console.log("\nAfter removing value at the end:");
  console.log(list.toString()); // Output: (1) -> (2) -> (3) -> null
}

function test3() {
  const list = new LinkedList();

  // Insert value 1 at index 0 (edge case)
  list.insertAt(1, 0);
  console.log("After inserting 1 at index 0:");
  console.log(list.toString()); // Output: (1) -> null

  // Insert value 2 at index 1 (edge case)
  list.insertAt(2, 1);
  console.log("\nAfter inserting 2 at index 1:");
  console.log(list.toString()); // Output: (1) -> (2) -> null

  // Insert value 3 at index 5 (out of bounds)
  list.insertAt(3, 5); // Should log "Index out of bounds"

  // Try to remove at negative index
  list.removeAt(-1); // Should log "BAD INDEX == :("

  // Try to remove at too big of an index
  list.removeAt(10); // Should log "BAD INDEX == :("
}

console.log("TEST NUMBER ONE \n")
test1();

console.log("\n \nTEST NUMBER TWO \n ")
test2();

console.log("\n \nTEST NUMBER THREE \n")
test3()