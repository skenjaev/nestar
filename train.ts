/*
ZK-TASK:

Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
MASALAN: printNumbers()

// */

// function printNumbers() {
//     let count = 1;
//     const intervalId = setInterval(() => {
//         console.log(count);
//         count++;
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(intervalId);
//     }, 5000);
// }

// printNumbers(); 

// export { printNumbers };




/*

TASK ZL:

Shunday function yozing, va bu function parametr
sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
raqamlarni orqasiga o'girib qaytarsin

MASALAN: reverseInteger(123456789); return 987654321;
*/


function reverseInteger(num: number): number {
    const reversedString = num.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
}

console.log(reverseInteger(123456789)); 

export { reverseInteger };  
