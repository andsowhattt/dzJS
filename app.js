const userNames= ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

let initials = userNames.sort().map((userName) => {
	return userName.split(' ').map((userName) => userName.charAt(0)).join('.');
})

console.log(initials);