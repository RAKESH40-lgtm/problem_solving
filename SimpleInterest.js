/*
Problem Statement :
Simple Interest  
Simple interest formula is given by :SI=(PXTXR)/100 where P is the principle amount ,t is time and R is the rate.Compute Si for given P,T and R.
Input:
Three lines containing integer each
OutPut :
one line containing integer
Example:
Input :
1000
10
5
OutPut: 500
1)Read and understand the problem
  straight forward need to calculate the SI from given data 
2)Came up with 3 new testcase:
TC1:                  TC2:                  TC3:
Input :               Input:                Input:
2000                  500                    100000 
10                    2                      10
5                     1                      7
Output :1000          Output :10             Output :70000
3)Algorithm:
1)Read Principle amount .
2)Read the time taken.
3)Read Rate of interest
4)Compute SI using the formula SI=(PXTXR)/100
5)Print the SI
*/
let fs = require('fs')
let datafromText = fs.readFileSync(0, 'utf-8')
let dataIndex = 0
datafromText = datafromText.split('\n')
const readtext = () => {
    dataIndex++
    return datafromText[dataIndex - 1]
}
let principle_amt=parseInt(readtext())
let timeTaken=parseInt(readtext())
let rate=parseInt(readtext())

let Si=(principle_amt*timeTaken*rate)/100
console.log(Si)
/*
4)Dry Run:
TC1:Input :1000,10,5
    Output:500
Line 39:let principle_amt=parseInt(readtext())
        --evaluate RHS
        --parseInt(readtext())
        --parseInt(1000)
        --1000 assign to principle
        --principle=1000
line 40:let timeTaken=parseInt(readtext())
         --evaluate RHS
        --parseInt(readtext())
        --parseInt(10)
        --1000 assign to timeTaken
        --timeTaken=1000   
line 41:let rate=parseInt(readtext())
         --evaluate RHS
        --parseInt(readtext())
        --parseInt(5)
        --1000 assign to rate
        --rate=1000   
line 42:empty line
line 43: let Si=(principle_amt*timeTaken*rate)/100
        --evaluate RHS
        --(principle_amt*timeTaken*rate)/100
        --(1000*10*5)/100
        --500 assign to Si
        --Si=500  
line 44: console.log(Si)
        print Si 
*/