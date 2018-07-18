class Words {

	count(phrase) {
		var output = {};
		var cleanPhrase = phrase.trim().replace(/\n|\t|\s\s/g, ' ');
		var words = cleanPhrase.toLowerCase().split(' ');
		var uniqueWords = new Set(words);
		for (let word of uniqueWords) {
			output[word] = 0;
			for (let x = 0; x < words.length; x++) {
				if (word === words[x]) {
					output[word]++;
				}
			}
		}
		return output;
	}
}

export default Words;