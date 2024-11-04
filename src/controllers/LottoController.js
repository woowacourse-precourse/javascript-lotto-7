import { Input, Output } from '../views/index.js';
import Lotto from '../models/Lotto.js';

class LottoController {
    #lottos;
    #money;
    #winningNumbers;
    #bonusNumber;

    constructor() {
        this.#lottos = [];
        this.#money = 0;
        this.#winningNumbers = [];
        this.#bonusNumber = 0;
    }

    async run() {
        await this.#purchaseLottos();
        await this.#getWinningInfo();
        this.#displayResults();
    }

    async #purchaseLottos() {
        this.#money = await Input.getMoney();
        this.#lottos = Lotto.createLottos(this.#money);

        Output.printPurchaseAmount(this.#lottos.length);
        Output.printLottos(this.#lottos.map((lotto) => lotto.getNumbers()));
    }

    async #getWinningInfo() {
        this.#winningNumbers = await Input.getWinNumbers();
        this.#bonusNumber = await Input.getBonusNumber(this.#winningNumbers);
    }

    #displayResults() {
        const results = Lotto.calculateResults(
            this.#lottos,
            this.#winningNumbers,
            this.#bonusNumber
        );

        const earningRate = Lotto.calculateEarningRate(results, this.#money);

        Output.printWinningStatus(results);
        Output.printEarningsRate(earningRate);
    }
}

export default LottoController;
