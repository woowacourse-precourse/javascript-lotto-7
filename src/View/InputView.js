import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages.js';
import { Validator } from '../utils/validator.js';

export class InputView {
	constructor() {
		this.validator = new Validator();
	}
	async getPurchaseCost() {
		const input = await Console.readLineAsync(MESSAGE.COST_MESSAGE);
		if (this.validator.isValidCost(input)) {
			return Number(input);
		}
	}

	async getWinningNumber() {
		const input = await Console.readLineAsync(MESSAGE.WINNING_NUMBER_MESSAGE);
		if (this.validator.isValidWinningNumber(input)) {
			return input.split(',').map((n) => Number(n));
		}
	}

	async getBonusNumber() {
		const input = await Console.readLineAsync(MESSAGE.BONUS_NUMBER_MESSAGE);
		if (this.validator.isValidBonusNumber(input)) {
			return Number(input);
		}
	}
}
