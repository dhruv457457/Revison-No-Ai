// objects 
// let user ={}
// user =new Object();  // empty objects

// let fruit=prompt("write the name of fruit","apple");
// let dhruv={
//     full_nam:"Dhruv Pancholi",
//     age:20,
//     [fruit]:5,
// "Is good":true, //multiword property should be in quote
// };
// dhruv.isAdmin=true;
// alert(dhruv.isAdmin);
// delete dhruv.age;
// alert(dhruv.age);
// alert(dhruv["Is good"])
// alert(dhruv.apple);

// user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let key in user) {
//   // keys
//   alert( key );  // name, age, isAdmin
//   // values for the keys
//   alert( user[key] ); // John, 30, true
// }


function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let res=0
for (key in salaries){
    res+=salaries[key];
}
alert(res);



function multiplyNumeric(menu){
    for(let key in menu){
        menu[key]*=2;
    }
}
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
alert(menu.width);