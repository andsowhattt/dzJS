//1

function durationBetweenDates(firstDate, secondDate, dimensionBetween) {
	const calcFirstDate = new Date(firstDate);
	const calcSecondDate = new Date(secondDate);
	const millisecondsDiff = calcSecondDate.getTime() - calcFirstDate.getTime();
	if (dimensionBetween === 'seconds'){
		const secondsType = millisecondsDiff / 1000;
		return secondsType + ' seconds';
	}
	if (dimensionBetween === 'minutes'){
	  const minutesType = Math.ceil(millisecondsDiff / (1000 * 60));
	return minutesType + ' minutes';
	}
	if (dimensionBetween === 'hours'){
	  const hoursType = millisecondsDiff / (1000 * 3600);
	return hoursType + ' hours';
	}
	if (dimensionBetween === 'days'){
	  const daysType = Math.abs(millisecondsDiff / (1000 * 3600 * 24));
	return daysType + ' days';
	} else {
	return console.log('Not Found');
	}
}
//console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));
//console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));

//1 
function durationBetweenDates(firstDate, secondDate, dimensionBetween) {
	const millisecondsDiff = new Date(secondDate).getTime() - new Date(firstDate).getTime();
	switch (dimensionBetween) {
	  case 'seconds': return millisecondsDiff / 1000 + ' seconds';
	  case 'minutes': return Math.ceil(millisecondsDiff / (1000 * 60)) + ' minutes';
	  case 'hours':   return millisecondsDiff / (1000 * 3600) + ' hours';
	  case 'days':    return Math.abs(millisecondsDiff / (1000 * 3600 * 24)) + ' days';
	  default:        return 'Not Found';
	}
  }
  console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));
  //return '86400 seconds'
  console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));
  //return '362 days'

//2

const priceData = {
	Apples: '23.4',
	BANANAS: '48',
	oRAngGEs: '48.7584',
}
const optimizer = data =>
	Object.keys(data).reduce((acc, key) => {
		acc[key.toLowerCase()] = data[key] = Number(data[key]).toFixed(2);
		return acc;
	}, {});
const updatedPriceData = optimizer(priceData);
//console.log(updatedPriceData);

//3

function recursiveOddSumTo(number) {
	if (number <= 1)
		return 1;
	else
		if (number % 2 == 0)
			number--;
	return number + recursiveOddSumTo(number - 2);
}
//console.log(recursiveOddSumTo(10))

function iterativeOddSumTo(number) {
	let sum = 0;
	for (let i = 1; i <= number; i++) {
		if (i % 2 !== 0) {
			sum = sum + i;
		}
	}
	return sum;
}
//console.log(iterativeOddSumTo(10));