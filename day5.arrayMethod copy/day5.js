// task 5 my approch
let arr=[4,3,1,5,-19];
arr.sort();
start=0;
end=arr.length-1;
while(start<end){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;

}
// 2nd approch
arr.sort((a,b)=>b-a);
console.log(arr);
// task 6
function compsort(arr){
  return arr.slice().sort();
}
let top=["HTML", "JavaScript", "CSS"];
let top1 = compsort(top);
console.log(top1);
console.log(top);


// task 7
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item =>item.name)

// console.log( names ); // John, Pete, Mary
// task 8
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let userMaped=users.map(user =>({fullName:`${user.name}${user.surname}`,
id:user.id}));
console.log(userMaped[0].id);
console.log(userMaped);

john = { name: "John", age: 25 };
  pete = { name: "Pete", age: 30 };

 mary = { name: "Mary", age: 28 };
 arr=[pete,john,mary];
 function sortByAge(arr)
 {
 arr.sort((a,b)=>a.age -b.age);
 }

sortByAge(arr);
 console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
//task 10 random
function shuffle(arr){
  arr.sort(()=>Math.random()-0.5);
}
arr = [1, 2, 3];

shuffle(arr);
console.log(arr)
shuffle(arr);
// arr = [2, 1, 3]
console.log(arr)

shuffle(arr);
console.log(arr)

// task 11
 john = { name: "John", age: 25 };
 pete = { name: "Pete", age: 30 };
 mary = { name: "Mary", age: 29 };

function getAvg(users){

  userMaped=users;
  // .map(user =>({Name:`${user.name}`,
  //   age:user.age}));
   let avg=0;
    for(let i=0;i<userMaped.length;i++){
      avg+=userMaped[i].age;
    }
    return avg/users.length;
  }
  arr = [ john, pete, mary ];
console.log(getAvg(arr));

// task 12
function unique(arr) {
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (!temp.includes(arr[i])) {
      temp.push(arr[i]);
    }
  }

  return temp;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(strings));



 // task 13

 users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
  return arr.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
}



usersById = groupById(users);
console.log(usersById);



function unique(arr) {
let arr1 = new Set(arr);
return arr1;

}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O