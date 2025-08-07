// task 1 Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function capitalize(str){
    return str
        .split('-')
        .map((word,index) => index == 0 ? word:word[0].toUpperCase() + word.slice(1) )
        .join("");

}
let nam="Hello-how-are-you";
let arr=capitalize(nam);
console.log(arr);

// task 2
function filterKey(arr,a,b){
    return arr.filter(item =>a<=item && b>=item);
}
numberArr =[5,25,6,2,3,1,8,5];
let filterd= filterKey(numberArr,2,8);
filterd.sort();
console.log(filterd);

// task 3

function filterRangeInPlace(arr,a,b)

{
    for(let i=0;i<arr.length;i++){
        let val=arr[i];
        if( val<a || val>b ){
            arr.splice(i,1);
            i--;
            
        }
    }
}







let arrr = [5, 3, 8, 1];

filterRangeInPlace(arrr, 1, 4); // removed the numbers except from 1 to 4

console.log( arrr ); // [3, 1]