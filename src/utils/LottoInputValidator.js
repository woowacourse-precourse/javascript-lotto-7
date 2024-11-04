import { Console } from '@woowacourse/mission-utils';

export class LottoInputValidator {
	getLottoPrice(inputAmount) {
		if (!this.isValidInput(inputAmount)) {
			// 유효성 검사 추가
			throw new Error(`[ERROR] 숫자만 입력 가능합니다.`);
		}

		const price = this.changeToNumber(inputAmount);
		if (price % 1000 > 0) {
			Console.print(`[ERROR]`);
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

		const numList = new Set();
		for (const numStr of numsStr) {
			const num = this.changeToNumber(numStr);
			if (num < 1 || num > 45) {
				// 추가된 유효성 검사
				throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.');
			}
			numList.add(num);
		}

		if (numList.size !== 6) {
			throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
		}
		return numList;
	}

	getLottoBonus(bonusNumber, winNumber) {
		const bonusNum = this.changeToNumber(bonusNumber);
		console.log('winNumber:', winNumber);
		console.log('bonusNum:', bonusNum);
		if (bonusNum < 1 || bonusNum > 45) {
			throw new Error('[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자여야 합니다.');
		}

		// winNumber가 배열일 경우
		if (Array.isArray(winNumber)) {
			if (winNumber.includes(bonusNum)) {

				throw new Error(
					'[ERROR] 보너스 번호는 당첨번호와 중복되어선 안됩니다.'
				);
			}
		}

		// winNumber가 Set일 경우
		if (winNumber instanceof Set) {
			if (winNumber.has(bonusNum)) {

				throw new Error(
					'[ERROR] 보너스 번호는 당첨번호와 중복되어선 안됩니다.'
				);
			}
		}
		return bonusNum;
	}
}
