const sumAll = function (min, max) {
	let res = 0;
	if (min < 0 || !Number.isInteger(min) || max < 0 || !Number.isInteger(max)) {
		return 'ERROR'	
	} else {
		if (min > max) {
			[min, max] = [max, min]
		}

		for (let i = min; i <= max; i++) {
			res += i
		}
	}

	return res
};

// Do not edit below this line
module.exports = sumAll;
