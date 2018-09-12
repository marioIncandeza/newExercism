class TwoBucket {

	constructor(buckOne, buckTwo, goal, starterBuck) {
		this.buckOne = buckOne;
		this.buckTwo = buckTwo;
		this.goal = goal;
		this.starterBuck = starterBuck;
		this.goalBucket = starterBuck;
		this.otherBucket = null;
	}

	moves() {
		let moves = 0,
			to = 0,
			from = 0,
			toCapacity,
			fromCapacity;

		if (this.starterBuck === 'one') {
			toCapacity = 'buckTwo';
			fromCapacity = 'buckOne';
		} else {
			toCapacity = 'buckOne';
			fromCapacity = 'buckTwo'; 
		}

		while (from !== this.goal) {
			if (from === 0) { //fill
				from = this[fromCapacity];
			} else if (to === this[toCapacity]) { //empty
				to = 0;
			} else {
				[to, from] = transfer(to, from, this[toCapacity]);
			}
			moves++;
		}

		this.otherBucket = to;
		return moves;
	}

}

function transfer(to, from, toCapacity) {
	//transfer
	while ((to < toCapacity) && (from > 0)) {
		to++;
		from--;
	}
	return [to, from];
}

export default TwoBucket;