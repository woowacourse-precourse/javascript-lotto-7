import { LottoInputValidator } from './utils/LottoInputValidator.js';

const validator = new LottoInputValidator();

export class LottoInputHandler {
	// 당첨 번호
	getWinningNumbers(winNumbers) {
		const winNumber = validator.getLottoWinner(winNumbers);
		return winNumber;
	}
	//보너스 번호
	getBonusNumber(bonusNumber, winNumber) {
		const bonusNum = validator.getLottoBonus(bonusNumber, winNumber);
		return bonusNum;
	}
}
