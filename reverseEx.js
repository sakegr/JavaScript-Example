// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

let n = 11;
let result = [];

for(let i = n; i>0; i-- ){
    result.push(i);
}

// console.log(result);



const reverseSeq = n => {
    let  result = [];
    for (let i = n; i > 0; i--) {
    result.push(i);
} return result;
};

// console.log(reverseSeq(11));

const reverseSeq1 = n => {
    let result = [];
    for (let i = 1; i <= 11; i++){
        result.push(i);
    } return result;
};

// console.log(reverseSeq1(11));