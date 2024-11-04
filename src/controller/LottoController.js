import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import ValidatePurchaseAmount from '../models/ValidatePurchaseAmount.js';
import ValidateBonusNumber from '../models/ValidateBonusNumber.js';
import Lotto from '../Lotto.js';

class LottoController {
	#inputView;
	#outputView;
	#lottos;
	#winningLotto;
	#purchaseAmount;
	#bonusNumber;
	#validateBonusNumber;
	#validatePurchaseAmount;

	constructor() {
		this.#inputView = new InputView();
		this.#outputView = new OutputView();
		this.#lottos = [];
		this.#winningLotto = null;
		this.#purchaseAmount = 0;
		this.#validateBonusNumber = new ValidateBonusNumber();
		this.#validatePurchaseAmount = new ValidatePurchaseAmount();
	}

	async play() {
		try {
			await this.#handlePurchase();
			await this.#handleWinningNumber();
			await this.#handleBonusNumber();
		} catch (error) {
			Console.print(error.message);
			// throw error;
		}
	}

	async #handlePurchase() {
		const amount = await this.#inputView.readAmountInput();
		this.#validatePurchaseAmount.validate(amount);
		this.#purchaseAmount = amount;
		this.#lottos = this.#generateLottos(amount);
		this.#outputView.printLottos(amount, this.#lottos);
	}

	async #handleWinningNumber() {
		const winningNumberInput = await this.#inputView.readWinningNumbers();
		const numbers = this.#parseWinningNumbers(winningNumberInput);
		this.#winningLotto = new Lotto(numbers);
	}

	async #handleBonusNumber() {
		const bonusNumberInput = await this.#inputView.readBonusNumber();
		this.#bonusNumber = this.#validateBonusNumber.validate(
			bonusNumberInput,
			this.#winningLotto.getNumbers()
		);
	}

	#generateLottos(amount) {
		const quantity = Math.floor(amount / 1000);
		return Array.from({ length: quantity }, () => this.#createLotto());
	}

	#createLotto() {
		const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
		return new Lotto(numbers);
	}

	#parseWinningNumbers(input) {
		return input.split(',').map((num) => parseInt(num.trim(), 10));
	}
}

export default LottoController;
