class Node {
  constructor(
    cargo = undefined,
    leftChild = undefined,
    rightChild = undefined,
  ) {
    this.cargo = cargo;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
  getLeftChild() {
    return this.leftChild;
  }
  getRightChild() {
    return this.rightChild;
  }
  setLeftChild(leftChild = undefined) {
    if(leftChild) {
      this.leftChild = leftChild;
    }
  }
  setRightChild(rightChild = undefined) {
    if(rightChild) {
      this.rightChild = rightChild;
    }
  }
  setId(_id = undefined) {
    if(_id) {
      this._id = _id;
    }
  }
};

class LinkedListNode {
  constructor(
    _id = undefined,
    cargo = undefined,
    next = undefined
  ) {
    this._id = _id;
    this.cargo = cargo;
    this.next = next;
  }
};

class Stack {
  constructor(
  ) {
    this.top = undefined;
    this.stackLength = 0;
  }
  pushIntoStack(cargo = undefined) {
    if(cargo) {
      let llNode = new LinkedListNode(
        this.stackLength,
        cargo,
        undefined
      );
      if(!this.top) {
        this.top = llNode;
      } else{
        let previousTopNode = this.top;
        llNode.next = previousTopNode;
        this.top = llNode;
      }
      this.stackLength++;
    }
  }
  popFromStack(){
    let topNode = undefined;
    if(
      this.stackLength && 
      this.top
    ) {
      topNode = this.top;
      this.top = this.top.next;
      this.stackLength--;
    }
    return topNode;
  }
  getStackSize(){
    return this.stackLength;
  }
  displayStack(){
    let stackTopNode = this.top;
    while(stackTopNode){
      stackTopNode = stackTopNode.next;
    }
  }
}

const makeExpressionTree = (
  expression = undefined
) => {
  if(!expression) {
    return undefined;
  }
  expression = expression + ')';
  const stack = new Stack();
  stack.pushIntoStack('(');
  for(let symbol of expression) {
    if(symbol === ')') {
      const rightSubTreeNode = new Node(
        stack.popFromStack().cargo,
        undefined,
        undefined
      );
      const operatorNode = new Node(
        stack.popFromStack().cargo,
        undefined,
        undefined
      );
      const leftSubTreeNode = new Node(
        stack.popFromStack().cargo,
        undefined,
        undefined
      );
      operatorNode.setRightChild(rightSubTreeNode);
      operatorNode.setLeftChild(leftSubTreeNode);
      stack.popFromStack(); // removing the remaining ( in the stack.
      stack.pushIntoStack(operatorNode);
    } else {
      stack.pushIntoStack(symbol);
    }
  }
  return stack.popFromStack();
}

const main = () => {
  const expression = '((a+b)-(c*d))%((e^f)/(g-h))';
  let expressionTreeRootNode = makeExpressionTree(expression);
  console.log(JSON.stringify(expressionTreeRootNode));
}

main();
