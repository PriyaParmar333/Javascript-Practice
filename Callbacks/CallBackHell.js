// setTimeout( () => {
//     console.log("1");
//     setTimeout( () => {
//         console.log("2");
//         setTimeout( () => {
//             console.log("3");
//         },1000);
//     },1000);
// },1000);

//optimized code using promises

// function printNum(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(num){
//                 console.log(num);
//                 resolve();
//             }
//             else{
//                 reject("failed to print number!!");
//             }
//         },1000);
//     })
// }

// printNum(1) //promise object

// .then(() => {
//     console.log(2);
// })
// .catch(() => {
//     console.log(3);
// });

async function greet() {
    return "hello";
}

// greet()
// .then(() => {
//     console.log("promise was resolve");
// })
// .catch((error) => {
//     console.log("promise was rejected",error)
// });

// let demo = async () => {
//     return 5;
// }

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num=Math.floor(Math.random() * 10 ) + 1;
            console.log(num);
            resolve();
        },1000)
    });
}

 async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}
