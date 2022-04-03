//3.1.Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
//3.2.Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
//3.3.Выполнить деление различных типов(string/boolean, string/number, number/Boolean)


let myBoolean = true;
let myString = "string";
let myNumber = 7;

let result1 = myBoolean+myString;
console.log(result1);//string

let result2 = myString + myNumber;
console.log(result2);//string

let result3 = myBoolean + myNumber;
console.log(result3);//number

let result4 = myBoolean*myString;
console.log(result4);//Nan

let result5 = myString * myNumber;
console.log(result5);//Nan

let result6 = myBoolean * myNumber;
console.log(result6);//number

let result7 = myBoolean/myString;
console.log(result7);//Nan

let result8 = myString/myNumber;
console.log(result8);//Nan

let result9 = myBoolean/myNumber;
console.log(result9);//number






