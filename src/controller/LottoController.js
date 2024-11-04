import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import ValidatePurchaseAmount from '../models/ValidatePurchaseAmount.js';
import Lotto from '../Lotto.js';

class LottoController {
	#inputView;
	#outputView;
	#lottos;
	#winningLotto;
	#purchaseAmount;
	#bonusNumber;
	#validatePurchaseAmount;

	constructor() {
		this.#inputView = new InputView();
		this.#lottos = [];
		this.#winningLotto = null;
		this.#purchaseAmount = 0;
		this.#validatePurchaseAmount = new ValidatePurchaseAmount();
	}

	async play() {
		try {
			await this.#handlePurchase();
			Console.print(this.#lottos);
		} catch (error) {
			Console.print(error.message);
		}
	}

	async #handlePurchase() {
		const amount = await this.#inputView.readAmountInput();
		this.#validatePurchaseAmount.validate(amount);
		this.#purchaseAmount = amount;
		this.#lottos = this.#generateLottos(amount);
	}

	#generateLottos(amount) {
		const quantity = Math.floor(amount / 1000);
		return Array.from({ length: quantity }, () => this.#createLotto());
	}

	#createLotto() {
		const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
		return new Lotto(numbers);
	}
}

export default LottoController;
