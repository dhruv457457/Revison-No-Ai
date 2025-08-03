// //// loops 
// // let i=3;
// // while(i>0) alert(i--);

// // labels names can be use at the place of break from multiple nested loops 
// outer: for (let i=0;i<2;i++){
//     for(let j=0;j<2;j++){
//         let input = prompt(`value at ${i} ${j} `);
//         if(!input) break outer;
//     }
// }
// alert("done")

// // Damn good quesion 
// // Q.1
//    let i = 3;

// while (i) {
//   alert( i-- );
// }

// // Q.2
//  i = 0;
// while (++i < 5) alert( i );
//  i = 0;
// while (i++ < 5) alert( i );
// let res=0;
// for(let i=0;i<=5;i++){
//     if(i%2==0){
//     res+=i;
//     }
// }
// alert(res);

// prime number we want 1 .. n   10     1 1 =0  4 
let res=prompt("enter a number to get the prime numbers in that range","number");
for(let i=2;i<=res;i++){
    let flag=0;
for(let j=2;j<=i;j++){
    if(i%j==0){

        if(j==i ) break;
        flag=1;
    }

}
if(flag!=1){

    alert(i);
}
}




// switch casessssssssssss