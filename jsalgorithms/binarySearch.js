
let BinarySearch = (arr, start, end, item) => {

    let mid = Math.floor ((start + end) / 2) 
    if (arr [mid] === item) {
        return { item, index: mid }
    } else if (arr [mid] > item) {
        return BinarySearch (arr, start, end - 1, item);
    } else if (arr [mid] < item) {
        return BinarySearch (arr, mid + 1, end, item );
    }
}

let main = () => {
    let arr = [1, 5, 6, 7, 9, 15, 20, 50, 100];
    let result = BinarySearch (arr, 0, arr.length, 50);
    console.log (result);
}

main ();