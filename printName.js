/*
Problem Statement :
Print Name 
Read a name as input and print "Hello {name}"
Input:
One line containing a string ,i.e name
OutPut :
Hello {name}
Example:
Input :Ravi
OutPut:Hello Ravi

1)Read and understand the problem .
  In this problem need to read the name from user and print that in Hello name
2)Testcases
   tc1:                        tc2:                         tc3:
   Input:Rakesh                Input:Charlie                Input:Nue
   Output:Hello Rakesh         Output:Hello Charlie         Output:Hello Nue
3)Algorithm:
1)Read the name from user.
2)Print the Hello name of user
*/
let fs = require('fs')
let datafromText = fs.readFileSync(0, 'utf-8')
let dataIndex = 0
datafromText = datafromText.split('\n')
const readtext = () => {
    dataIndex++
    return datafromText[dataIndex - 1]
}
let username = readtext()
console.log("Hello", username)
/*
Dry Run
 tc1:                                                            
 Input:Rakesh                                
 Output:Hello Rakesh  
 line 31: let username = readtext()
                --evaluate RHS
                --readtext()
                --"Rakesh"
                --assign "Rakesh" to lhs
                --username="Rakesh"
line 32:console.log("Hello", username)
            -- print Hello Rakesh
 tc2:                                                            
 Input:Charlie                                
 Output:Hello Charlie  
 line 31: let username = readtext()
                --evaluate RHS
                --readtext()
                --"Charlie"
                --assign "Charlie" to lhs
                --username="Charlie"
line 32:console.log("Hello", username)
            -- print Hello Charlie
 tc3:                                                            
 Input:Nue                                
 Output:Hello Nue  
 line 31: let username = readtext()
                --evaluate RHS
                --readtext()
                --"Nue"
                --assign "Nue" to lhs
                --username="Nue"
line 32:console.log("Hello", username)
            -- print Hello Nue
*/