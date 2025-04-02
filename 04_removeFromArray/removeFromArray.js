const removeFromArray = function (arr, ...toRemove) {
	let result = arr;
	for (const elem of toRemove) {
		while (result.indexOf(elem) !== -1) {
			result = result.toSpliced(result.indexOf(elem), 1)
		}
	}
	return result;
};

// Do not edit below this line
module.exports = removeFromArray;
