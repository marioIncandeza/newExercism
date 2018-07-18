class PerfectNumbers {

	classify(number) {
		if (number < 1) {
			throw new Error('Classification is only possible for natural numbers.');
		}
		let sum = 0,
			factors = factorize(number);
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		if (factors.length !== 0) {
			sum = factors.reduce(reducer);
		}
		if (sum === number) {
			return 'perfect';
		}
		if (sum > number) {
			return 'abundant';
		}
		return 'deficient';
	}
}

function factorize(num) {
	var factors = [];
	let x = num - 1;
	while (x !== 0) {
		if (num % x === 0) {
			factors.push(x);
		}
		x--;
	}
	return factors;
}

export default PerfectNumbers;