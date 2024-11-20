/*
Problem Statement :
Triangle Angle
Given an integer a and b denoting the two angles of triangles (in degrees),find the third angle of the triangle (in degree)
Note :The given angle will always be a valid triangle.
Input:
First line contains a integer denoting a ,the first angle .
second line contains a integer denoting b ,the first angle .
OutPut :
one integer ,denoting the third angle of the triangle 
Example:
Input 1:
30
110
Output 1:
40
1)Read and understand the problem .
In this problem we need to find the third angle of triangle by using the data given from input .
as given the input and output 
30+110+40=180 so by this 
to get third angle we can do by subtracting sum of other side with 180 .
2)Testcases
  TC1:
   Input 
   25
   45
   Output: 
  110
   TC2:
   Input
   0
   45
   Output:
   135
3)Algorithm:
step1:Read the integer1 from users
step2:Read the integer2 from users
step3:use the formula (third angle we can do by subtracting sum of other side with 180 .) and store in variable 
step4:Print the variable in which calculated 
*/
let fs = require('fs')
let datafromText = fs.readFileSync(0, 'utf-8')
let dataIndex = 0
datafromText = datafromText.split('\n')
const readtext = () => {
    dataIndex++
    return datafromText[dataIndex - 1]
}
let angleA = parseInt(readtext())
let angleB = parseInt(readtext())
let angleC = 180 - (angleA + angleB)
console.log(angleC)
/*
Dry Run
TC1:
Input 
   25
   45
   Output: 
  110
line 49:let angleA = parseInt(readtext())
        --- evaluate rhs
        ---parseInt(25)
        ---assign 25 to angleA
line 50:let angleB = parseInt(readtext())
        --- evaluate rhs
        ---parseInt(45)
        ---assign 45 to angleB
line 50:let angleC = 180 - (angleA + angleB)
        --- evaluate rhs
        ---180 - (angleA + angleB)
        ---180-(25+45)
        ---assign  110 to angleC
line 51:console.log(angleC)
        ---print angleC
        ---print 110 to output screen
*/
