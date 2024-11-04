import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';

class LottoController {
	#inputView;

	constructor() {
		this.#inputView = new InputView();
	}

	async play() {
		try {
			const amount = await this.#inputView.handleAmountInput();
			Console.print(amount);
		} catch (error) {
			Console.print(error.message);
		}
	}
}

export default LottoController;
