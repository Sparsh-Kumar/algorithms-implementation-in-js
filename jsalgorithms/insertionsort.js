


const InsertionSort = (myarr = undefined) => {
    if (!myarr) { return undefined; }
    else {

        for (let i = 1; i < myarr.length;i++) {
            let key = myarr [i];
            let j = i - 1;
            while ((j >= 0) && (myarr [j] > key)) {
                myarr [j + 1] = myarr [j];
                j = j - 1;
            }
            myarr [j + 1] = key;
        }

    }
    return myarr;
}

const main = () => {
    let result = InsertionSort ([12, 11, 13, 5, 6]);
    console.log (result);
}

main ()