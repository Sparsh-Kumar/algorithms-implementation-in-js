

// find second largest number in linear time.

const arr = [12, 14, 1, 0, 98, -12, 1, -235];

const findSecondLargestNumberInLinearTime = (arr) => {
  if(!arr.length) {
    return -1;
  }
  let largestNumber = arr[0];
  let secondLargestNumber = arr[1];
  if(secondLargestNumber > largestNumber) {
    let temp = largestNumber;
    largestNumber = secondLargestNumber;
    secondLargestNumber = temp;
  }
  for(let i = 2;i < arr.length;i++) {
    if(arr[i] > secondLargestNumber && arr[i] < largestNumber) {
      secondLargestNumber = arr[i];
    } else if(arr[i] > secondLargestNumber && arr[i] > largestNumber) {
      let temp = largestNumber;
      largestNumber = arr[i];
      secondLargestNumber = temp;
    }
  }
  return {
    largestNumber,
    secondLargestNumber,
  }
}

console.log(findSecondLargestNumberInLinearTime(arr));
