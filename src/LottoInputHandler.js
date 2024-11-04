import { LottoInputValidator } from './utils/LottoInputValidator.js';
import { LottoHandler } from './LottoHandler.js';

const lottoInputValidator = new LottoInputValidator();
const lottoHandler = new LottoHandler();

export class LottoInputHandler {
	getPurchaseAmount(inputAmount) {
		const lottoCount = lottoInputValidator.getLottoPrice(inputAmount);
		const lottos = lottoHandler.buyLotto(lottoCount);
		return lottos;
	}

	// 당첨 번호
	getWinningNumbers(winNumbers) {
		const winNumber = lottoInputValidator.getLottoWinner(winNumbers);
		return winNumber;
	}
	//보너스 번호
	getBonusNumber(bonusNumber,winNumber) {
		const bonusNum = lottoInputValidator.getLottoBonus(
			bonusNumber,
			winNumber
		);
		return bonusNum
	}
	validateNumberRange(number) {}
}
