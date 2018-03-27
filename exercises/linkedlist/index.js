// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, node = null) {
		this.data = data;
		this.next = node;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.listsize = 0;
	}

	size() {
		return this.listsize;
	}

	insertFirst(data) {
		let node = new Node(data, this.head);
		this.head = node;
		this.listsize++;
	}

	insertLast(data) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		this.getLast().next = new Node(data);
		this.listsize++;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let node = this.head;

		while(node && node.next) {
			node = node.next;
		}

		return node;
	}

	clear() {
		this.head = null
		this.listsize = 0;
	}

	removeFirst() {
		if (this.head) {
			this.head = this.head.next;
			this.listsize--;
		}
	}

	removeLast() {
		if (!this.head) {
			return;
		}
		if (!this.head.next) {
			this.head = null;
			return;
		}
		let prev = this.head;

		let node = this.head.next;

		while(node.next) {
			prev = node;
			node = node.next;
		}

		prev.next = null;
		this.listsize--;
	}

	getAt(index) {
		let counter = 0;
		let node = this.head;
		while (node) {
		  if (counter === index) {
		    return node;
		  }

		  counter++;
		  node = node.next;
		}
		return null;
	}

	insertAt(data, index) {

		if (!this.head) {
			this.head = new Node(data);;
			this.listsize++;
			return;
		}

		if (index === 0) {
			this.head = new Node(data, this.head);
			this.listsize++;
			return;
		}

		let prev = this.getAt(index - 1) || this.getLast();

		prev.next = new Node(data, prev.next);


	}

	removeAt(index) {
	    if (!this.head) {
	      return;
	    }

	    if (index === 0) {
	      this.head = this.head.next;
	      this.listsize--;
	      return;
	    }

	    const previous = this.getAt(index - 1);
	    if (!previous || !previous.next) {
	      return;
	    }
	    previous.next = previous.next.next;
	    this.listsize--;
	}

	forEach(fn) {
		let node = this.head;

		while(node) {
			fn(node)
			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };
