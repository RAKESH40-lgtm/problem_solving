/*
Problem Statement :
Sum of first n Numbers
Given n, find the sum of first n integers.
Input:
One integer
OutPut :
one integer 
Example:
Input 1:
5
Output 1:
15
1)Read and understand the problem .
In this problem we need to find the sum of first n integers to find lets consider its relations 
5
15 by 1+2+3+4+5=15
so we can do this summation by many ways using loop or formula n(n+1)/2
2)Testcases
  TC1:
   Input 
    3
   Output: 
    6
   TC2:
   Input
    2
   Output:
    3
3)Algorithm 1:
step1:Read the integer from users
step2:create the sum variable with 0
step3:loop from 1to  integer
step3.1:sum the sum variable with i 
step4:print the sum 
3)Algorithm 2:
step1:Read the integer from users
step2:use formula n*(n+1)/2 and store in sum
step3:print the sum 
*/
let fs = require('fs')
let datafromText = fs.readFileSync(0, 'utf-8')
let dataIndex = 0
datafromText = datafromText.split('\n')
const readtext = () => {
    dataIndex++
    return datafromText[dataIndex - 1]
}
let integer = parseInt(readtext())
let sum=0
for(let i=0;i<=integer;i++){
    sum+=i
}
console.log("sum through loop",sum)
// second approach
let formulaSum=(integer*(integer+1))/2
console.log("sum through formula",formulaSum)

