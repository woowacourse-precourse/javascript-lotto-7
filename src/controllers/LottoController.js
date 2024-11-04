import InputValidator from '../utils/InputValidator.js'
import {MissionUtils} from "@woowacourse/mission-utils";
import LottoGame from "../models/LottoGame.js";
import LottoView from "../views/LottoView.js";

class LottoController {
    #game;
    #view;
    #console;

    constructor(console = MissionUtils.Console) {
        this.#game = new LottoGame();
        this.#view = LottoView;
        this.#console = console;
    }

    async run() {
        try {
            const amount = await this.#getPurchaseAmount();
            this.#game.purchaseLottos(amount);

            const lottos = this.#game.getLottos();
            this.#console.print(`${lottos.length}개를 구매했습니다.`);
            this.#view.printLottos(lottos);

            const winningNumbers = await this.#getWinningNumbers();
            const bonusNumber = await this.#getBonusNumber(winningNumbers);

            this.#game.setWinningNumbers(winningNumbers, bonusNumber);
            const results = this.#game.getResults();

            this.#view.printResults(results);
            this.#view.printReturnRate(amount, results.totalPrize);
        } catch (error) {
            this.#console.print(error.message);
        }
    }

    async #getPurchaseAmount() {
        const input = await this.#console.readLineAsync("구매금액을 입력해 주세요.\n");
        InputValidator.validatePurchaseAmount(input);
        return Number(input);
    }

    async #getWinningNumbers() {
        const input = await this.#console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
        return InputValidator.validateWinningNumbers(input);
    }

    async #getBonusNumber(winningNumbers) {
        const input = await this.#console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
        return InputValidator.validateBonusNumber(input, winningNumbers);
    }
}

export default LottoController;