/*
Problem Statement :
Arithmetic Progression
Given first 3 number of a ap,predict the next number .
Input:
3 integer ,each should be taken as a input
OutPut :
Single Integer
Example:
Input:
2
5
8
Output:
11

1)Read and understand the problem .
    In this problem there is 3 input which is integer and need to find the 4 integer as example 2 5 8  has difference of 3 if added that to 8 then it will be 11 

2)Testcases
  TC1:
  Input 1,2,3
  Output: 4
  TC2:
  Input 1,1,1
  Output: 1
  TC3:
  Input 20,30 ,40
  Output: 50

3)Algorithm:
step1:Read the integer1 from users
step2:Read the integer2 from users
step3:Read the integer3 from users
step4:Calculate diff of two integer and save in variable .
step5:Add that diff to last integer and next integer will be resulted in variable .
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
let firstInteger=parseInt(readtext())
let secondInteger=parseInt(readtext())
let thirdInteger=parseInt(readtext())
let diff_integer=secondInteger-firstInteger
let  next_inter=thirdInteger+diff_integer
console.log(next_inter);

/*
Dry Run
 TC1:
  Input 1,2,3
  Output: 4
  line 47:let firstInteger=parseInt(readtext())
        ---evaluate the parseInt(readtext())
        ---parseInt("1")
        ---assign 1 to firstInteger
  line 48:let secondInteger=parseInt(readtext())
        ---evaluate the parseInt(readtext())
        ---parseInt("2")
        ---assign 1 to secondInteger
  line 47:let thirdInteger=parseInt(readtext())
        ---evaluate the parseInt(readtext())
        ---parseInt("3")
        ---assign 1 to thirdInteger
  line 48:let diff_integer=secondInteger-firstInteger
        ---evalautae the secondInteger-firstInteger
        ---3-2
        ---assign 1 to diff_integer
  line 49:let  next_inter=thirdInteger+diff_integer
        -- evaluate thirdInteger+diff_integer
        --assign 1+3 =4 to next_inter
  line 50:console.log(next_inter);
        ---print next_inter
        
 TC2:
  Input 1,1,1
  Output: 1
  line 47:let firstInteger=parseInt(readtext())
        ---evaluate the parseInt(readtext())
        ---parseInt("1")
        ---assign 1 to firstInteger
  line 48:let secondInteger=parseInt(readtext())
        ---evaluate the parseInt(readtext())
        ---parseInt("1")
        ---assign 1 to secondInteger
  line 47:let thirdInteger=parseInt(readtext())
        ---evaluate the parseInt(readtext())
        ---parseInt("1")
        ---assign 1 to thirdInteger
  line 48:let diff_integer=secondInteger-firstInteger
        ---evalautae the secondInteger-firstInteger
        ---1-1
        ---assign 0 to diff_integer
  line 49:let  next_inter=thirdInteger+diff_integer
        -- evaluate thirdInteger+diff_integer
        --assign 1+0 =1 to next_inter
  line 50:console.log(next_inter);
        ---print next_inter

*/