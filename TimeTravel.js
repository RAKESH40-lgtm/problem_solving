/*
Problem Statement :
Travel Time
Bharat is travelling from Hyderabad to Bangalore on car.Assume the distance from hyderabad to Bangalore is 600kms,you will be given the avergae speed of Bharat's car and you have to calculate the travel time.
Input:
Single integer- speed of car in km/hr.
OutPut :
single integer
Note:return only the integer part,incase the time is decimal
Example:
Input 1:
60
Output 1:
10
Input 2:
80
Output 2:
7

1)Read and understand the problem .
In this problem we need to find the travel time from distance and speed need to assume the distance as 600
From formula wkt speed=distance /time ,
time=distance/speed
use the above formula and get the time in integer and avoid decimal.
2)Testcases
  TC1:
   Input 
   20
   Output: 
   30
   TC2:
   Input
   10
   Output:
   60
3)Algorithm:
step1:Read the integer1 from users
step2:use the formula and store in variable 
step3:Print the variable in which calculated and convert that by parseInt to avoid the decimal points 
*/
let fs = require('fs')
let datafromText = fs.readFileSync(0, 'utf-8')
let dataIndex = 0
datafromText = datafromText.split('\n')
const readtext = () => {
    dataIndex++
    return datafromText[dataIndex - 1]
}
let speed = parseInt(readtext())
let time = 600/speed
console.log(parseInt(time))
/*
Dry Run
TC1:
Input 
20
Output: 
30
line 49:let speed = parseInt(readtext())
        --- evaluate rhs
        ---parseInt(20)
        ---assign 20 to speed
line 50:let time = 600/speed
        --- evaluate rhs
        ---600/speed
        ---600/20 =30
        ---assign  30 to time
line 51:console.log(parseInt(time))
        ---print parseInt(30)
        ---print 30 to output screen
*/
