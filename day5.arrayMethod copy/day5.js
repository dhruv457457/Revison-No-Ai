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


let cal =new Calculator;

function calculate(str){
    str
}