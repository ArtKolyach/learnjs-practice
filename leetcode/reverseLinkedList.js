function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


const node1 = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5)))))

const testNode = new ListNode(1488)


function writeList(node) {
    console.log(node.val)
    let nextNode = node.next
    while (nextNode !== null) {
        console.log(nextNode.val)
        nextNode = nextNode.next
    }
}

