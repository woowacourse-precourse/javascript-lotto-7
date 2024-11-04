import Lotto from '../Lotto.js';

export class LottoInputValidator {
	getLottoPrice(inputAmount) {
		if (!this.isValidInput(inputAmount)) {
			throw new Error(`[ERROR] 숫자만 입력 가능합니다.`);
		}

		const price = this.changeToNumber(inputAmount);
		if (price % 1000 > 0) {
			throw new Error(
				`[ERROR]] 로또 금액은 1000원으로 나누어 떨어져야 합니다.`
			);
		}
		return price / 1000;
	}

	changeToNumber(str) {
		const num = parseInt(str, 10);
		if (isNaN(num)) {
			throw new Error(`[ERROR] 숫자만 입력 가능합니다.`);
		}
		return num;
	}

	isValidInput(input) {
		return /^\d+$/.test(input);
	}

	getLottoWinner(winNumbers) {
		const numsStr = winNumbers.split(',');
		const numList = numsStr.map((numStr) => this.changeToNumber(numStr));

		const lotto = new Lotto(numList);

		return lotto.getNumbers();
	}

	getLottoBonus(bonusNumber, winNumber) {
		const bonusNum = this.changeToNumber(bonusNumber);
		if (bonusNum < 1 || bonusNum > 45) {
			throw new Error('[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자여야 합니다.');
		}
		// 보너스 번호가 당첨 번호와 중복되는지 확인
		if (winNumber.includes(bonusNum)) {
			throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
		}
		return bonusNum;
	}
}
