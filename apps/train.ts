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
// function reverseInteger(num) {
// 	const reversed = num.toString().split('').reverse().join('');
// 	return parseInt(reversed, 10);
// }

// console.log(reverseInteger(123456789));

// TASK ZL
// function stringToKebab(str: string) {
// 	return str
// 		.toLowerCase()
// 		.replace(/[^a-z0-9\s]/g, '')
// 		.trim()
// 		.replace(/\s+/g, '-');
// }
// console.log(stringToKebab('I love Kebab'));

// console.log('***************');

// // TEST
// function stringToKebab1(str: string) {
// 	return str
// 		.toLowerCase()
// 		.replace(/[^\p{L}\p{N}\s-]/gu, '')
// 		.trim()
// 		.replace(/[\s_-]+/g, '-')
// 		.replace(/^-+|-+$/g, '');
// }

// console.log(stringToKebab1('I love Kebab'));
// console.log(stringToKebab1('Hello World Im Toby!'));
// console.log(stringToKebab1('데벡스 아카데미 최고야!'));
// console.log(stringToKebab1('Девекс Академия самая классная!'));

// TASK ZN

function rotateArray(arr, index) {
	const firstPart = arr.slice(0, index + 1);
	const secondPart = arr.slice(index + 1);
	return secondPart.concat(firstPart);
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));
