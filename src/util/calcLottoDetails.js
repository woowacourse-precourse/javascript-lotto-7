export const calcLottoDetails = (matchResults) => {
	const result = [0, 0, 0, 0, 0];

	matchResults.forEach(({ matchCount, hasBonus }) => {
		const sum = matchCount + hasBonus;
		if (sum === 3) {
			result[0] += 1;
		} else if (sum === 4) {
			result[1] += 1;
		} else if (sum === 5) {
			if (numbers[1] === 0) {
				result[2] += 1;
			} else {
				result[3] += 1;
			}
		} else if (sum === 6) {
			result[4] += 1;
		}
	});

	return result;
};
