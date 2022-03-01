

// This class will convert an array into a heap.
class ArrayToHeap {
  constructor(arr = []) {
    this.arr = arr;
    this.startIdx = Math.floor(this.arr.length / 2) - 1;
    this.arrLen = this.arr.length;
  }
  swap (arr, largestNodeIdx, i) {
    let temp = arr[largestNodeIdx];
    arr[largestNodeIdx] = arr[i];
    arr[i] = temp;
  }
  buildHeap(arr = [], arrLen = 0, Idx = 0) {
    for(let i = Idx; i >= 0; i--) {
      let largestNodeIdx = i;
      let leftNodeIdx = 2 * i + 1;
      let rightNodeIdx = 2 * i + 2;
      if(leftNodeIdx < arrLen && arr [leftNodeIdx] > arr [largestNodeIdx]) {
        largestNodeIdx = leftNodeIdx;
      }
      if(rightNodeIdx < arrLen && arr [rightNodeIdx] > arr [largestNodeIdx]) {
        largestNodeIdx = rightNodeIdx;
      }
      if(largestNodeIdx !== i) {
        this.swap(arr, largestNodeIdx, i);
        this.buildHeap(arr, arrLen, largestNodeIdx);
      }
    }
  }
  makeHeap() {
    if(!this.arr.length) {
      throw new Error('Array cannot be empty');
    }
    this.buildHeap(this.arr, this.arrLen, this.startIdx);
    return this.arr;
  }
}

const main = () => {
  const arr = [ 1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17 ];
  const heap = new ArrayToHeap(arr).makeHeap();
  console.log(heap);
}

main ();
