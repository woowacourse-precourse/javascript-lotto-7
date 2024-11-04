import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import ValidatePurchaseAmount from '../models/ValidatePurchaseAmount.js';
import ValidateBonusNumber from '../models/ValidateBonusNumber.js';
import { calcLottoDetails } from '../util/calcLottoDetails.js';
import { calcProceeds } from '../util/calcProceeds.js';
import { calcReturnOfInvestment } from '../util/calcReturnOfInvestment.js';
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
			await this.#showResults();
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

	async #showResults() {
		const matchResult = this.#getMatchResults();
		const details = calcLottoDetails(matchResult);
		this.#outputView.printMatchResults(details);

		const proceeds = calcProceeds(details);
		const ROI = calcReturnOfInvestment(proceeds, this.#purchaseAmount);
		this.#outputView.printROI(ROI);
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

	#getMatchResults() {
		return this.#lottos.map((lotto) => ({
			matchCount: lotto.countMatchNumbers(this.#winningLotto.getNumbers()),
			hasBonus: lotto.containBonusNumber(this.#bonusNumber),
		}));
	}
}

export default LottoController;
