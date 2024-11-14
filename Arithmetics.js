/*
Problem Statement :
Arithmetics
Given two  integers a and b.print the following lines as output.
1.The first line contains sum of the two numbers.
2.The second line contains the difference of the two numbers (first-second).
3.The third line contains the product of the two numbers.
Input:
The first line contains the first integer a .the second  line contains the second integer b.
OutPut :
Print the three lines as explained above 
Example:
Input:
3
2
Output:
5
1
6
3+2=5
3-2=1
3*2=6

1)Read and understand the problem .
   In this problem with 2 integer need to print a+b,a-b,a*b in 3 different lines 

2)Testcases
  TC1:
  Input 
  1
  2
  Output: 
  3
  -1
  2
  

3)Algorithm:
step1:Read the integer1 from users
step2:Read the integer2 from users
step3:Print the integer1+interg2
step4:Print the integer1-interg2
step5:Print the integer1*interg2
*/
let fs = require('fs')
let datafromText = fs.readFileSync(0, 'utf-8')
let dataIndex = 0
datafromText = datafromText.split('\n')
const readtext = () => {
    dataIndex++
    return datafromText[dataIndex - 1]
}
let integer1=parseInt(readtext())
let integer2=parseInt(readtext())
console.log(integer1+integer2)
console.log(integer1-integer2)
console.log(integer1*integer2)
