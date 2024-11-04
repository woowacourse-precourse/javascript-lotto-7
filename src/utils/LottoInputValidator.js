export class LottoInputValidator {
	getLottoPrice(inputAmount) {
		const price = this.changeToNumber(inputAmount);
		if (price % 1000 > 0) {
			throw new Error(`[Error] 로또 금액은 1000원으로 나누어 떨어져야 합니다.`);
		}
		return price / 1000;
	}

	changeToNumber(str) {
		const num = parseInt(str, 10);
		if (isNaN(num)) {
			throw new Error(`[Error] 숫자만 입력 가능합니다.`);
		}
		return num;
	}

	getLottoWinner(winNumbers) {
		const numsStr = winNumbers.split(',');
		if (numsStr.length < 6) {
			throw new Error('[Error] 숫자 사이의 구분자는 , 여야 합니다.');
		}

		const numList = new Set();
		for (const numStr of numsStr) {
			const num = this.changeToNumber(numStr);
			numList.add(num);
		}

		if (numList.size !== 6) {
			throw new Error('[Error] 로또 번호는 6개여야 합니다.');
		}
		return numList;
	}

	getLottoBonus(bonusNumber, winNumber) {
		const bonusNum = this.changeToNumber(bonusNumber);
		console.log('winNumber:', winNumber);
		console.log('bonusNum:', bonusNum);
		if (bonusNum < 1 || bonusNum > 45) {
			throw new Error('[Error] 보너스 번호는 1 ~ 45 사이의 숫자여야 합니다.');
		}
		if (winNumber.includes(bonusNum)) {
			throw new Error('[Error] 보너스 번호는 당첨번호와 중복되어선 안됩니다.');
		}
		return bonusNum;
	}
}
