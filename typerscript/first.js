// console.log("hello")
// const technology = "typeScript";
// console.log(technology);
//error
// const technology:string ="typescript"
// technology = 10;
// console.log(technology);
//string
// let employeeName:string ="john";
// console.log(employeeName);
//number 
// let employeeName:number = 50000;
// console.log(employeeName);
//boolean
var isManager = true;
console.log("isManager : ".concat(isManager));
var Studentone = {
    name: "rajan",
    age: 21,
    course: "csc"
};
var printStudent = function (student) {
    // let msg:string = `Name :${student.name} age : ${student.age} course : ${student.course}`;
    // console.log(msg);
    return student;
};
// printStudent(Studentone);
var stud = printStudent(Studentone);
console.log(stud);
