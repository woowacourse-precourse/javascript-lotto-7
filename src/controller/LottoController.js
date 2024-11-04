import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import ValidatePurchaseAmount from '../models/ValidatePurchaseAmount.js';

class LottoController {
	#inputView;

	#validatePurchaseAmount;

	#purchaseAmount;

	constructor() {
		this.#inputView = new InputView();
		this.#purchaseAmount = 0;
		this.#validatePurchaseAmount = new ValidatePurchaseAmount();
	}

	async play() {
		try {
			await this.handlePurchase();
			Console.print(this.#purchaseAmount);
		} catch (error) {
			Console.print(error.message);
		}
	}

	async handlePurchase() {
		const amount = await this.#inputView.readAmountInput();
		this.#validatePurchaseAmount.validate(amount);
		this.#purchaseAmount = amount;
	}
}

export default LottoController;
