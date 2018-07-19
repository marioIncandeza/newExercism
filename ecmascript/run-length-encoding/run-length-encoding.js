function encode(message) {

	let characterSet = message.split(''),
		encoded = '',
		inx = 0,
		count = 0;
	while (inx < characterSet.length) {
		count = 1;
		while (characterSet[inx] === characterSet[inx + count]) {
			count++;
		}
		if (count > 1) {
			encoded += (count + characterSet[inx]);
		} else {
			encoded += characterSet[inx];
		}
		inx += count;
	}
	return encoded;
}

function decode(message) {

	let characterSet = message.split(''),
		decoded = '',
		count = 0,
		inx = 0,
		numbers = [],
		regexy = /\d/;
	while (inx < characterSet.length) {
		count = 1;
		numbers = [];
		while (regexy.test(characterSet[inx])) {
			numbers.push(characterSet[inx]);
			++inx;
		}
		if (numbers.length){
			count = +numbers.join('');
		}
		for (let x = 0; x < count; x++){
			decoded += characterSet[inx];
		}
		inx++;
	}
	return decoded;
}

export {encode, decode};