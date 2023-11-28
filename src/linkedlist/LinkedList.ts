interface ListNode<T>{
	val : T,
	next : ListNode<T>
}

class LinkedList<T>{
	private head : ListNode<T>;
	public length: number;
	constructor(){
		this.head = null
		this.length = 0
	}

	addFirst(val : T){
		let newnode = {} as ListNode<T>;
		newnode.val = val
		newnode.next = this.head
		this.head = newnode
		this.length++;
	}

	addLast(val : T){
		if(this.head == null){
			this.addFirst(val)
			return
		}
		let temp = this.head
		while(temp.next != null){
			temp = temp.next
		}
		let newnode = {} as ListNode<T>;
		newnode.val = val
		newnode.next = null
		temp.next = newnode
		this.length++;
	}

	getFirst() : T {
		return this.head ? this.head.val : undefined;
	}
	
	getLast() : T{
		if(this.head == null){
			return undefined;
		}
		let temp = this.head;
		while(temp.next != null){
			temp = temp.next
		}
		return temp.val
	}

	removeFirst(){
		if(this.head != null){
			this.head = this.head.next
			this.length--;
		}
	}

	removeLast(){
		if(this.head == null) return;
		let prev = null;
		let temp = this.head;
		while(temp.next != null){
			prev = temp
			temp = temp.next
		}
		if(prev == null){
			this.head = null
			this.length--;
			return
		}
		prev.next = null
		this.length--;
	}

	add(val : T){
		this.addLast(val)
	}

}
