


const fibonnaci = (x) => {
    if (x === 0) {
        return 0;
    }
    else if (x === 1) {
        return 1;
    }
    else {
        return fibonnaci (x - 1) + fibonnaci (x - 2);
    }
}

console.log (`fibonnaci = ${fibonnaci (4)}`);