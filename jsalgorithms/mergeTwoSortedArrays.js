

const merge = (firstArray = [], secondArray = []) => {
  let ret = [];
  let counter = 0;
  if(!firstArray.length && !secondArray.length) {
    ret = [];
  } else if (!firstArray.length && secondArray) {
    ret = secondArray;
  } else if(!secondArray.length && firstArray.length) {
    ret = firstArray;
  } else {
    let firstIndex = 0;
    let secondIndex = 0;
    while(
      (firstIndex < firstArray.length) ||
      (secondIndex < secondArray.length)
    ) {
      if(firstArray[firstIndex] < secondArray[secondIndex]) {
        ret.push(firstArray[firstIndex]);
        firstIndex++;
      } else if(firstArray[firstIndex] > secondArray[secondIndex]) {
        ret.push(secondArray[secondIndex]);
        secondIndex++;
      } else if(firstArray[firstIndex] === secondArray[secondIndex]) {
        ret.push(firstArray[firstIndex]);
        ret.push(secondArray[secondIndex]);
        firstIndex++;
        secondIndex++;
      } else if(firstIndex === firstArray.length) {
        ret.push(secondArray[secondIndex]);
        secondIndex++;
      } else if(secondIndex === secondArray.length) {
        ret.push(firstArray[firstIndex]);
        firstIndex++;
      }
      counter++;
    }
  }
  return {
    ret,
    counter,
  };
}

console.log(merge([12, 34, 60], [10, 14, 16]));
