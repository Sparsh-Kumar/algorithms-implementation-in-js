

const selectionSort = (myarr = undefined) => {
    if (!myarr) { return undefined; }
    else {
        
        for (let i = 0;i < myarr.length;i++) {

            let minIndex = i;
            for (let j = i + 1; j < myarr.length;j++) {
                if (myarr [minIndex] > myarr [j]) {
                    minIndex = j;
                }
            }

            let temp = myarr [i];
            myarr [i] = myarr [minIndex];
            myarr [minIndex] = temp;

        }

    }
    return myarr;
}

const main = () => {
    let result = selectionSort ([64, 25, 8, 22, 11]);
    console.log (result);
}

main ();