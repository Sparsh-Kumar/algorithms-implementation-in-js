
let lower_limit = 0;
let upper_limit = 5;

let result = {
    kohli: 0,
    dhoni: 0,
    rahane: 0,
    pant: 0
}

const dataset = [
    {
        kohli: 1, dhoni: 4, rahane: 2, pant: 5
    },
    {
        kohli: 2, dhoni: 2, rahane: 3, pant: 2
    },
    {
        kohli: 1, dhoni: 1, rahane: 1, pant: 1
    },
    {
        kohli: 2, dhoni: 2, rahane: 2, pant: 2
    }
];

let main = (dataset = undefined) => {

    if (dataset) {
        for (var index = 0;index < dataset.length;index++) {
            result.kohli = (result.kohli + dataset [index].kohli);
            result.dhoni = (result.dhoni + dataset [index].dhoni);
            result.rahane = (result.rahane + dataset [index].rahane);
            result.pant = (result.pant + dataset [index].pant);
        }
        result.kohli = result.kohli / index;
        result.dhoni = result.dhoni / index;
        result.rahane = result.rahane / index;
        result.pant = result.pant / index;
    }

    console.log (result); // this has only mean and having time complexiety equal to the length of the array that was passed
}

main (dataset);