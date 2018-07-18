function at(hour, minute) {

	let hr = '',
		min = '';
	if (!minute) {
		minute = 0;
	}
	if (minute >= 60 || minute < 0) {
		hour += Math.floor(minute / 60);
		if (minute < 0) {
			let bianca = Math.abs(minute % 60);
			minute = 60 - bianca;
		} else {
			minute = minute % 60;
		}
	}
	if (minute >= 60) {
		hour += Math.floor(minute / 60);
		minute = minute % 60;
	}
	min = minute.toString();
	if (minute < 10) {
		min = '0' + min; 
	}
	if (hour < 0) {
		let bruni = Math.abs(hour % 24);
		hour = 24 - bruni;
	}
	hour = hour % 24; 
	hr = hour.toString();
	if (hour < 10) {
		hr = '0' + hr;
	}

	return {

		toString: function() {
			return hr + ':' + min;
		},

		plus: function(extraMins) {
			minute += extraMins;
			return at(hour, minute);
		},

		minus: function(lessMins) {
			minute -= lessMins;
			return at(hour, minute);
		},

		equals: function(otherClock) {
			return (this.toString()===otherClock.toString() ? true : false);
		}

	}
}

export default at;