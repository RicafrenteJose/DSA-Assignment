// Prompt user for input
let score = parseInt(prompt("Enter your score:"));

// Determine the equivalent grade using a ternary operator
let grade;
if (score >= 97) {
    grade = "1.00 (Excellent)";
} else if (score >= 94) {
    grade = "1.25 (Excellent)";
}else if (score >= 91) {
    grade = "1.50 (Above Average)";
}else if (score >= 88) {
    grade = "1.75 (Above Average)";
}else if (score >= 85) {
    grade = "2.00 (Average)";
}else if (score >= 82){
    grade = "2.25 (Average)";
}else if (score >= 79){
    grade = "2.50 (Below Average)";
}else if (score >= 76){
    grade = "2.75 (Below Average)";
}else if (score === 75){
    grade = "3.00 (Below Average)";
}else if (score >= 72){
    grade = "4.00 (Poor)";
}else {
    grade = "5.00 (Poor)"
}

// Determine final remarks using if-else statements
let remarks;
if (score >= 90){
    remarks = "HIGH PASS, Candiate for Cum Laude";
}else if (score >= 80){
    remarks = "AVERAGE PASS";
}else if (score >= 75){
    remarks = "LOW PASS";
}else {
    remarks = "FAILED, Needs Improvement"
}
