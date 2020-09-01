


const gcd = (x, y) => {
    let rem = x % y;
    if (rem === 0) {
        return y;
    }
    return gcd (y, rem);
}

console.log (`gcd = ${gcd (56, 28)}`);