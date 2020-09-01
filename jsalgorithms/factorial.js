

const factorial = (x) => {
    if (x === 1) {
        return x;
    }
    return x * factorial (x - 1);
}

console.log (`factorial = ${factorial (4)}`);