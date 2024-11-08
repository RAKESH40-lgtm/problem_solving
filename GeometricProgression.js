/*
Problem Statement :
Arithmetic Progression
Given first 3 number of a gp,predict the next number .
Input:
3 integer ,each should be taken as a input
OutPut :
Single Integer
Example:
Input:
2
4
8
Output:
16

1)Read and understand the problem .
    In this problem there is 3 input which is integer and need to find the 4 integer as example 2 4 8  has quotient  of 8 if multiply  that to 8 then it will be 16

2)Testcases
  TC1:
  Input 
  3
  6
  12
  Output: 24
  TC2:
  Input 
  5
  25
  125
  Output: 625
  TC3:
  Input 
  10
  100
  1000
  Output: 10000

3)Algorithm:
step1:Read the integer1 from users
step2:Read the integer2 from users
step3:Read the integer3 from users
step4:Calculate quotient  of two integer and save in variable .
step5:multiply  that quotient to last integer and next integer will be resulted in variable .
step6:Print the resultant last integer
*/
let fs = require('fs')
let datafromText = fs.readFileSync(0, 'utf-8')
let dataIndex = 0
datafromText = datafromText.split('\n')
const readtext = () => {
  dataIndex++
  return datafromText[dataIndex - 1]
}
let firstInteger = parseInt(readtext())
let secondInteger = parseInt(readtext())
let thirdInteger = parseInt(readtext())

let quotientInt = parseInt(secondInteger / firstInteger)
let fourthInterger = parseInt(thirdInteger * quotientInt)
console.log(fourthInterger);


/*
Dry Run
TC1:
  Input 
  3
  6
  12
  Output: 24
  line 47:let firstInteger = parseInt(readtext())
          ---evaluate parseInt(3)
          ---parseInt(readtext("3"))
          --- assign 3 to lhs
          ----firstInteger=3
  line 48:let secondInteger = parseInt(readtext())
          ---evaluate parseInt(6)
          ---parseInt(readtext("6"))
          --- assign 6 to lhs
          ----secondInteger=6
  line 49:let thirdInteger = parseInt(readtext())
          ---evaluate parseInt(24)
          ---parseInt(readtext("24"))
          --- assign 24 to lhs
          ----thirdInteger=24
  line 50:let quotientInt = parseInt(secondInteger / firstInteger)
          --- evaluate parseInt(secondInteger / firstInteger)
          --- parseInt(6 / 3)
          --- assign 2 to lhs
          ----quotientInt=2
  line 51:let fourthInterger = parseInt(thirdInteger * quotientInt)
          ---parseInt(thirdInteger * quotientInt)
          ---parseInt(12*2)
          --- assign 24 to lhs
          ----fourthInterger=24
  line 52:console.log(fourthInterger);
          ---print 24 
TC2:
  Input 
  5
  25
  125
  Output: 625
  line 47:let firstInteger = parseInt(readtext())
          ---evaluate parseInt(5)
          ---parseInt(readtext("5"))
          --- assign 5 to lhs
          ----firstInteger=5
  line 48:let secondInteger = parseInt(readtext())
          ---evaluate parseInt(25)
          ---parseInt(readtext("25"))
          --- assign 25 to lhs
          ----secondInteger=25
  line 49:let thirdInteger = parseInt(readtext())
          ---evaluate parseInt(125)
          ---parseInt(readtext("125"))
          --- assign 125 to lhs
          ----thirdInteger=125
  line 50:let quotientInt = parseInt(secondInteger / firstInteger)
          --- evaluate parseInt(secondInteger / firstInteger)
          --- parseInt(25 / 5)
          --- assign 5 to lhs
          ----quotientInt=5
  line 51:let fourthInterger = parseInt(thirdInteger * quotientInt)
          ---parseInt(thirdInteger * quotientInt)
          ---parseInt(125*5)
          --- assign 625 to lhs
          ----fourthInterger=625
  line 52:console.log(fourthInterger);
          ---print 625 
*/