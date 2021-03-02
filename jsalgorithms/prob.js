
let lower_limit = 1; // no player should be rated less than 1 
let upper_limit = 5; // no player should be rated more than 1

let result = {} // make an empty result object

const dataset = [
    {
        kohli: 1, dhoni: 4, rahane: 2, pant: 5, sachin: 4
    },
    {
        kohli: 2, dhoni: 2, rahane: 3, pant: 2, bumra: 3
    },
    {
        kohli: 1, dhoni: 1, sachin: 4, bumra: 1
    },
    {
        kohli: 2, dhoni: 2, abhishek: 2, pant: 2
    }
];

let main = (dataset = undefined) => {

    if (dataset) {
        for (var index = 0;index < dataset.length;index++) {
            for (let key in dataset [index]) {
                if (result [key] === undefined) {
                    result [key] = { totalcount: dataset [index] [key], mean: undefined, variance: undefined, count: 1, values: [dataset [index] [key]] };
                } else {
                    result [key].totalcount = result [key].totalcount + dataset [index] [key];
                    result [key].count = result [key].count + 1;
                    result [key].values.push (dataset [index] [key]);
                }
            }
        }
    }

    //console.log (result); // Now this is dynamic
    
    // calculating mean
    for (let key in result) {
        result [key].mean = result [key].totalcount / index;
        let t = 0;
        result [key].values.forEach ((item) => {
            let v = result [key].mean - item;
            v = v * v;
            t = t + v;
        });
        result [key].variance = t / result [key].count;
        result [key].standard_dev = Math.sqrt (result [key].variance);
    }

    console.log ('Calculated result');
    console.log (result);

}

main (dataset);