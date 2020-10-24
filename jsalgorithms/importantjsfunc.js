

// Map, Filter, Reduce function

const array = [12, 23, 34, 45, 565, 68, 12, 68, 34, 45, 23];

// Map function only works with array
// and it is used to perform transformations in an array
const mapResult = array.map ((number) => {
    return number * 2 // This callback function will be called for every element in the array
})

console.log (`Displaying the map result`);
console.log (mapResult);



// Filter function also works only with arrays
// and it is used to filter values from an array
const filterResult = array.filter ((number) => {
    if (number % 2 === 0) {
        return number;
    }
})

console.log (`Displaying the filter result`);
console.log (filterResult);

// Reduce function also works only with arrays
// In this there is a static variable known as accumulator and variable known as current (which iterate for all values in array one by one)
// the callback change the value of accumulator
// and in another iteration accumulator holds the value of previous operation

const reduceResult = array.reduce ((accumulator, current) => {
    return accumulator + current;
})

console.log (`Displaying the reduce Result`);
console.log (reduceResult);