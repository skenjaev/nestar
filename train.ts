/*
ZK-TASK:

Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
MASALAN: printNumbers()

*/

function printNumbers() {
    let count = 1;
    const intervalId = setInterval(() => {
        console.log(count);
        count++;
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 5000);
}

printNumbers(); 

export { printNumbers };
