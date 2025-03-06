// i use parseint to convert a string(users answer) to a integer
let maxLimit = parseInt(prompt("Enter the limit of the Double Loop"));

console.log("result");

 for ( let i = 0; i <= maxLimit; i++){
    for (let j = 0; j<= maxLimit; j++){
        let addedValue = i + j;
        // i use (` `)/backsticks isatead of the normal qoute to allow inserting variables directly
        console.log (`[${i}] [${j}] Added Value is ${addedValue}`);
    }
 }