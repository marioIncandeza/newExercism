const determiner = 'This';
const distantDeterminer = 'that';
const definiteArticle = 'the';
const nouns = [
	'house that Jack built.',
	'malt',
	'rat',
	'cat',
	'dog',
	'cow with the crumpled horn',
	'maiden all forlorn',
	'man all tattered and torn',
	'priest all shaven and shorn',
	'rooster that crowed in the morn',
	'farmer sowing his corn',
	'horse and the hound and the horn'
];
const verbs = [
	'lay in',
	'ate',
	'killed',
	'worried',
	'tossed',
	'milked',
	'kissed',
	'married',
	'woke',
	'kept',
	'belonged to',
	'is'
];

class House {

	verse(number){
		let output = [];
		for (let k = number - 1; k > -1; k--) {
			let phrase = [];
			if (k == number - 1) {
				phrase.push(determiner, verbs[verbs.length - 1], definiteArticle, nouns[k]);	
			} else {
				phrase.push(distantDeterminer, verbs[k], definiteArticle, nouns[k]);
			}
			
			output.push(phrase.join(' '));
		}

		return output;
	}

	verses(start, end) {
		let output = [];
		for (let k = start; k <= end; k++) {
			output = output.concat(this.verse(k));
			if (k !== end) {
				output = output.concat('');
			}
		}
		return output;
	}
	
}


export default new House();