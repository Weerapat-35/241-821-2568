/*
console.log("Hello world");
console.log("This is a test JavaScript file.");
*/
//string,number,boolean,object,array

/*
let fname = "John"; //String
console.log("Name:", fname);
const PI = 3.14;

let age = 20; //number
let height = 170;//number

fname = "Alice";
console.log("Name:", fname);

fname = "Bob";
PI = 3145278;
console.log("Name:", fname);
console.log("Age:", age);
console.log("Height:", height);


/**
 + = บวก
 - = ลบ
 * = คูณ
 / = หาร
 % = หารเอาเศษ
*/ 

/*
 let number1 = '10';
 let number2 = '3';

 let result1 = number1 + number2;
 console.log("ผลบวก =", result1);
 */

/*
 == เท่ากับ
 != ไม่เท่ากับ
 > มากกว่า
 < น้อยกว่า
 >= มากกว่าเท่ากับ
 <= น้อยกว่าเท่ากับ
 */

/*
Grade
>=80 A
>=70 B
>=60 C
>=50 D

*/

//คิด Grade
/*
 let score = prompt("กรุณาใส่คะแนน");
 //if - else condition
 if (score >= 80) { 
    console.log('A');
}else if(score >= 70) {
    console.log('B');
}else if(score >= 60) {
    console.log('C');
}else if(score >= 50) {
    console.log('D');
}else{
    console.log('F');
}
*/

/**
 * %% และ
 * || หรือ
 * + not หรื่อ ไม่
 */

/*
let number1 = 5;
let number2 = 10;

let condition1 = (number1 > 0) && (number2 > 0) //true && true = true
console.log("Condition:",condition1)

let age = 25
let gender = "female"
if(age >= 18 && gender == "female"){
    console.log("คุณสามารถเข้าร่วมกิจกรรมได้")
}
*/


/*
let number1 = 20

if(!(number1 % 2 == 0)){
    console.log("เป็นเลขคู่")
}
else{
    console.log("เป็นเลขคี่")
}
*/


let conter = 0
while (conter <= 4){ //true
//conter = conter + 1;
conter +=1;
console.log("while", conter);
}

for(let i = 0; i <= 4; i++){
    console.log("for",i);
}