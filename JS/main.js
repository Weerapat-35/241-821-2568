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

/*
let conter = 0
while (conter <= 4){ //true
//conter = conter + 1;
conter +=1;
console.log("while", conter);
}

for(let i = 0; i <= 4; i++){
    console.log("for",i);
}
*/

/**
 * array
 */

/*
let Age1 = 25;
let Age2 = 30;
let Age3 = 35;

let ages = [25,30,35];
console.log(ages); //[25,30,35]
console.log(ages[0]);//[25,30,35]

//แทนที่ค่าใน array
ages = [40,45,50];
console.log(ages);

//ต่อ array
ages.push(55);
console.log(ages);

console.log(ages.length);

ages.pop(55);
console.log(ages);

if(ages.includes(45)) {//ture
    console.log("มี่ 45 ใน array");//มีข้อมูล
}

let number = [90, 60, 80, 40, 50];
number.sort();
console.log(number);
console.log(number);//[40,50,60,80,90]

let names = ["john","jane","Doe"];
names.push("art");
console.log(names);
console.log(names.length);

for (let i = 0; i< names.length; i++){
    console.log(name[i]);
}
*/

/**
 * object
 */

/*
let student = [{
     age: 30,
     name: "John",
     grade: 'A'
},{
    age: 21,
    name: "Earth",
    grade: 'A'
}];

student.pop();

for (let i = 0; i< names.length; i++){
    console.log("student" + [i+1] + ":")
    console.log("name: " + student[i].name)
    console.log("age: " + student[i].age)
    console.log("grade: " + student[i].grade)
}

student.push({
    age: 22,
    name: "kai",
    grade: 'B'
});
console.log(student);
*/

/**
 * function
 */

//ประกาศฟังก์ชัน

/*
function calculate_grade(score){
    if(score >= 90){
        return 'A';
    }else if(score >= 70) {
        grade='B';
    }else if(score >= 60) {
        grade='C';
    }else if(score >= 50) {
        grade='D';
    }else{
        grade='F';
}
return grade;

let student_score = 85;
let student_grade = calculate_grade(student_score);
console.log("student's grade is :" + student_grade);
*/

/*
let score = [10,20,30,40,50];

for(let i = 0;i <score.length; i++) {
    console.log(`score at index ${i} is ${score[i]}`);
}

score.forEach((s) => {
    console.log('score', s)
})

score = score.map((s) => {
    return s * 2
})

score.forEach((s) => {
    console.log('newscore:', s)

})
*/

/*
let score = [10,20,30,40,50];

for (let index =0; index <score.length; index++){
    console.log('score', score[index])
}

let newScore = score.filter((s) => {
    return s >= 30
})

newScore.forEach(()=>{
    console.log('new score:', ns)
})
*/

let students = [
    {
        name: 'aa',
        score: '50',
        grade: 'A'
    },
    {
        name: 'bb',
        score: '40',
        grade: 'A'
    }
]

console.log('student;',students[0])

let student = students.find((s) => {
    if (s.name == 'bb'){
        return true
    }
})

let doublescore_student = students.map((s) => {
    s.score = s.score * 2
    return s
})

console.log('student:', student)
console.log(doublescore_student)

let hightScore_student = students.filter((s) => {
    if(s.score >= 110){
        return true
    }
})

console.log('hightScore_student',hightScore_student)