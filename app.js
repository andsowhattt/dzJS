//1
const userNames= ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames.sort().map((userName) => {
	return userName.split(' ').map((userName) => userName.charAt(0)).join('.');
})

console.log(initials);

//2

const currentMaxValue = 4589;
let reverseMaxValue = Number([...currentMaxValue.toString()].reverse().join(""));

console.log(reverseMaxValue); 
console.log(typeof reverseMaxValue);

//3

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).reduce((acc, cur) => {
	return acc+cur;
}, 14);

console.log(productOfArray);