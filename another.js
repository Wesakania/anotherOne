//creating an object of the user

//let user ={};
//user.name = "John"
//user.surname = "Smith"
//user.name = "peter"
//delete user.name
//console.log(user);

//checking for emptiness

//let schedule = {};
//function isEmpty(obj){
  //for(let key in obj){
   // return false;
  //}
 // return true;
//}
//schedule["8:30"] = "get up";
//schedule.name = "School day";
//console.log(Object.keys(schedule));

//console.log(isEmpty(schedule));

//console.log(schedule);


//sum all the salaries

//let salaries = {
 //Wesakania: 2000,
 //Davis: 5000,
 //Kibori: 3000,
 //penina:3500
//}

//let sum = 0
 //for(let key in salaries){
 //  sum += salaries[key]
 //}
 //console.log(sum)

 //multiplaying numeric property value by 2

 //let menu ={
  //width: 200,
  //height:300,
  //title: "My menu",
  //depth:10
 //}

//function multiplyNumeric(obj){
 // for(let key in obj){
    //if(typeof obj[key] == Number){
  //  obj[key]*= 2
   // }
  //}
//}
//multiplyNumeric(menu)
//console.log(menu)

//function makeUser(){
 // return{
  //  name:"John",
  //  ref:this
  //};
//}

//object methods "this"
//function makeUser(){
 // return{
  //  name:"Wesakania",
   // ref(){
    //  return this
   // }
  //};
//}
//let user = makeUser();
//console.log(makeUser().name);

//create a calcultor

//let calculator = {
 // read (){
 //   this.numa = +prompt("Enter the first number", 0)
  //  this.numb = +prompt("Enter the second number",0)
  //},
 // sum(){
 //   return this.numa + this.numb
 // },
 // mul(){
  //  return this.numa * this.numb
 // },
//};
//calculator.read();
//console.log(calculator.sum());
//console.log(calculator.mul());

//chaining

//let ladder = {
 // step: 0,
 // up(){
  //  this.step++;
  //  return this;
  //},
  //down(){
  // this.step--;
  // return this;
 // },
 // showStep: function(){
   // console.log(this.step)
  //  return this;
 // }
//};

//ladder.up().up().down().showStep().down().showStep();

//constructor, operator new
//let obj = {}

//function A(){
  //return obj;
//}

//function B(){
 // return obj
//}

//let a = new A;
//let b = new B;
//console.log(a == b);


function Calculator(){

  this.read = function(){
    this.numa = +prompt("provide first number",0)
    this.numb = +prompt("provide second number", 0)
  }
  this.sum = function(){
    return this.numa + this.numb
  }
  this.mul = function(){
    return this.numa * this.numb
}

}
let calculator = new Calculator();
calculator.read();

console.log("sum=" + calculator.sum());
console.log("mul=" + calculator.mul());
