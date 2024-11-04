import { Console } from '@woowacourse/mission-utils';
import { LottoInputValidator } from './utils/LottoInputValidator.js';

export class LottoInputHandler {
	constructor() {
		this.validator = new LottoInputValidator();
	}
	async getLottoCount() {
		let lottoCount;
		while (true) {
			const inputAmount = await Console.readLineAsync(
				`구입금액을 입력해 주세요.\n`
			);
			try {
				lottoCount = this.validator.getLottoPrice(inputAmount);
				return lottoCount;
			} catch (error) {
				Console.print(error.message);
			}
		}
	}

	async getWinningNumbers() {
		let winNumber;
		while (true) {
			winNumber = await Console.readLineAsync(`\n당첨 번호를 입력해 주세요.\n`);

			try {
				return this.validator.getLottoWinner(winNumber);
			} catch (error) {
				Console.print(error.message);
			}
		}
	}

	async getBonusNumber(winNumber) {
		let bonusNumber;
		while (true) {
			bonusNumber = await Console.readLineAsync(
				`\n보너스 번호를 입력해 주세요.\n`
			);

			try {
				return this.validator.getLottoBonus(bonusNumber, winNumber);
			} catch (error) {
				Console.print(error.message);
			}
		}
	}
}
