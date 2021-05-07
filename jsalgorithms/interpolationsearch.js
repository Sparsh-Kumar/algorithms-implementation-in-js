

const findElement = (arr, low, high, element) => {
    if (low <= high) {
        if (arr [low] === element) { return { element, index: low} }
        else if (arr [high] === element) { return { element, index: high }}
        else {
            let mid = low + Math.floor ((high - low) / (arr [high] - arr [low]) * (element - arr [low]));
            if (arr [mid] === element) { return { element, index: mid }}
            else if (arr [mid] < element) {
                return findElement (arr, mid + 1, high, element);
            } else if (arr [mid] > element) {
                return findElement (arr, low, mid - 1, element);
            }
        }
    }
    return -1;
}

let main = () => {
    let arr = [1, 3, 89, 98, 109, 301, 600]
    let element = findElement (arr, 0, 6, 1);
    console.log (element);
}

main ();