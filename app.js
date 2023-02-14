//1
function addThemAll(...theArgs) {
	let total = 0;
	for (const arg of theArgs) {
		total += arg;
	}
	return total;
}
console.log(addThemAll(2,4)); 
console.log(addThemAll(1,2,3,4)); 
console.log(addThemAll(5,5,10));


//2
function multiply(a) {
	return function(b) {
		return a * b;
	}
}
console.log(multiply(5)(5))
console.log(multiply(2)(-2))
console.log(multiply(4)(3))


//3
const movies = [
	{
	movieName: 'The Thing',
	releaseYear: 1982,
	directedBy: 'Carpenter',
	runningTimeInMinutes: 109,
	},
	{
	movieName: 'Aliens',
	releaseYear: 1986,
	directedBy: 'Cameron',
	runningTimeInMinutes: 137,
	},
	{
	movieName: 'Men in Black',
	releaseYear: 1997,
	directedBy: 'Sonnenfeld',
	runningTimeInMinutes: 98,
	},
	{
	movieName: 'Predator',
	releaseYear: 1987,
	directedBy: 'McTiernan',
	runningTimeInMinutes: 107,
	},
	];
	
function byProperty(property, direction) {
	let firstDirection = 1;
	if(direction === '<') {
		firstDirection = -1; 
	}
	return function (a, b) {
	if(a[property] < b[property]) {
	return -1 * firstDirection;
	}else if(a[property] > b[property]) {
	return 1 * firstDirection;
	}else {
		return 0 * firstDirection; 
	} 
}
}

console.log(movies.sort(byProperty('releaseYear', '>')));
//console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); 
//console.log(movies.sort(byProperty('movieName', '>'))); 


//4
function detonatorTimer(delay) {
	let timerId = setInterval(() => {
		console.log(delay);
		delay--
		if (delay === 0) {
			console.log("BOOM!");
			clearInterval(timerId);
		}
		}, 1000);
} 
detonatorTimer(3);


function detonatorTimer(delay) {
	if (delay > 0) {
	  console.log(delay);
	  delay --;
	  setTimeout(detonatorTimer, 1000, delay);
	} else if(delay === 0) {
	  console.log('BOOM!');
	}
}
detonatorTimer(3);


//5
let me = {
	name: 'Alina',
	residency: 'Kyiv',
	gender: 'female',
	age: 27,
	myAnimal: 'dog',
	breed: 'corgi',
	favoriteToy: 'slippers',
	hobby: 'driving',
	relax: 'Netflix',
	defaultMood: 'war',
	introduce() {
	console.log(`My name is ${this.name} and I live in ${this.residency} with my ${this.breed}.`);
	},
	prognose() {
	console.log(`I hope that next year I'm gonna be ${this.age+1},
        the ${this.defaultMood} will end and my ${this.myAnimal} will stop chewing on my ${this.favoriteToy}.`);
	},
	describeMyWeekend(){
	console.log(`When I have free time, I try to distract myself by ${this.hobby} or watching ${this.relax}.`);
	}
	}
	
	me.introduce();
	me.prognose();
	me.describeMyWeekend();


//6
let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyWeekend = me.describeMyWeekend.bind(me);

setTimeout(securedSelfIntroduce, 1000);
setTimeout(securedSelfPrognose, 2000); 
setTimeout(securedSelfDescribeMyWeekend, 3000); 


//7
function someFunction(a, b) {
    console.log(a + b);
}

function slower(func, seconds) {
    return function() {
        console.log("Chill out, you will get your result in " + seconds + " seconds");
        setTimeout(() => func.apply(this, arguments), seconds * 1000);
    }
}

let slowedSomeFunction = slower(someFunction, 5);
slowedSomeFunction(2, 3);