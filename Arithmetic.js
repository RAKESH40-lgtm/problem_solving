console.log("hello")
//Aritmetic works based on language dependent .
//type conversion : converting one data type to another 
/*string to integer-> parseInt() .
string to float->parseFloat() 
apart from numeric value in string then it will show NAN.
suppose in a scenario where ip address 192.168.1.22 it cannot convert with parseFloat as parsefloat takes first decimal ip will alway takes as a string .
floating number to integer  ,we can declare variable as datatype and let will take care of datatype .
number will show either it's a int or float  need to carefully.
Use parseInt and parseFloat appropriate way .if it's not in either way take it as string.
Use parseFloat use always whenever it's neccasary data can be used any data type .
based on language the operation will work and only need to use.
*/
console.log(parseInt('100.87'))//it loses data if it has a decimal point use this when sure the reciveing type for type converting very carefully duing convert .
console.log(parseFloat('100.87'))//it converts the float string to float value without loosing data if the string contain decimal point ,even whole numbers will give whole number .
console.log(parseInt(100.282))// it convert float to int as 100
console.log(90 ** 1000)
let typeInteger = typeof parseInt('100')// to know the type of values in variable and return its data type 
console.log(typeInteger)//it will return number
console.log("42" + "23")