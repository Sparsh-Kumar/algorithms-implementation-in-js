


const exponent = (x, y) => {
    if (y === 1) {
        return x;
    }
    return x * exponent (x, y - 1);
}

console.log (`exponent = ${exponent (2, 5)}`)