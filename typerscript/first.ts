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

let isManager:boolean = true;
console.log(`isManager : ${isManager}`);


// arrays 

// let techs:string[]= ["html" ,"css", "js"];
// console.log(techs);



// let a= 10
// a = "skill"
// console.log(a);


//*********************************************datatype********************* */
//object

//interface :- schema

// interface Mobile {
//     brand: string ;
//     color?: string; // ?:- optional
//     price:number;

// }
//object
// const mobileOne : Mobile ={
//     brand :"Apple",
//  price:45000

// };

// mobileOne.brand ="lenovo";
// console.log(mobileOne);


//Enum --> for const values

// enum Months {
//     JAN ="JANUARY",
//     FEB="FEBRUARY",
//     MAY="MARCH"
// }
// console.log(Months.JAN);



// let marks:number = 65;
// let results:string = "";
// if(marks <= 35){
//     results ="You failed the exam";

// }
// else {
//     results ="you pass the exam"
// }
// console.log(results);

//print number

// results = "";
// for(let i:number=0 ; i<=10 ; i++)
// {
//     results += `${i}`
// }
// console.log(results);



// let greet =()=>{
//     console.log("good morning");
    
// };
// greet();

// return

// let greet1 =()=>{
//     return("good morning");
    
// };

// console.log(greet());

// let greet =():void=>{
//     console.log("good morning");
    
// };

// greet();

//

// let wishmsg =(name:string):String =>{
//     let result:String = `hello ${name} Good Morning`;
//      return result 
// };

// let greetMsg:String = wishmsg("john");
// console.log(greetMsg);


// let wishmsg1 =(name:any):String =>{
//     let result:String = `hello ${name} Good Morning`;
//      return result 
// };

// let greetMsg1:String = wishmsg1("john");
// console.log(greetMsg1);

//print obj

interface Student{
    name: string;
    age:number;
    course: string
}


const Studentone:Student={
    name: "rajan",
    age:21,
    course:"csc"
};

const printStudent =(student : Student ):Student =>{
    // let msg:string = `Name :${student.name} age : ${student.age} course : ${student.course}`;
    // console.log(msg);
  return student ;  
};
// printStudent(Studentone);

let stud : Student= printStudent(Studentone);
console.log(stud);


