


const linearSearch = (array = [], item = undefined) => {
    if ((!array.length) || (!item && item !== 0)) {
        return undefined;
    }
    else {
        for (let index = 0;index < array.length;index++) {
            if (array [index] === item) {
                return {
                    item,
                    position: index
                }
            }
        }
    }
    return 'not found';
}


let main = () => {
    let array = [12, 5, 6, 7, 89, 90, 213, 4, 5, 7, 8, 9, 0];
    let result = linearSearch (array, 456);
    console.log (result);
}

main ();