
let BinarySearch = (arr, start, end, item) => {

    if ((start < 0) || (end < 0) || (end < start)) {
        return -1;
    }
    let mid = Math.floor ((start + end) / 2) 
    if (arr [mid] === item) {
        return { item, index: mid }
    } else if (arr [mid] > item) {
        return BinarySearch (arr, start, mid - 1, item);
    } else if (arr [mid] < item) {
        return BinarySearch (arr, mid + 1, end, item );
    }
}

let main = () => {
    let arr = [1, 10, 30, 32, 45, 67, 89, 103, 401];
    let result = BinarySearch (arr, 0, arr.length, 67);
    console.log (result);
}

main ();