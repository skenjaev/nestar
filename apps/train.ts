// TASK ZK
// function printNumbers() {
// 	let count = 1;

// 	const intervalId = setInterval(() => {
// 		console.log(count);
// 		if (count === 5) {
// 			clearInterval(intervalId);
// 		}
// 		count++;
// 	}, 1000);
// }

// printNumbers();

// TASK ZM
function reverseInteger(num) {
	const reversed = num.toString().split('').reverse().join('');
	return parseInt(reversed, 10);
}

console.log(reverseInteger(123456789));
