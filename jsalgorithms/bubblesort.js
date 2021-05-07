

const bubbleSort = (myarr = undefined) => {
    
    if (!myarr) { return undefined; }
    else {
        for (let i = 0;i < myarr.length;i++) {
            
            for (let j = 0;j < myarr.length - i - 1; j++) {
                if (myarr [j] > myarr [j + 1]) {
                    let temp = myarr [j];
                    myarr [j] = myarr [j + 1];
                    myarr [j + 1] = temp;

                }
            }

        }
    }
    return myarr;
}

const main = () => {
    let result = bubbleSort ([64, 25, 8, 22, 11]);
    console.log (result);
}

main ();