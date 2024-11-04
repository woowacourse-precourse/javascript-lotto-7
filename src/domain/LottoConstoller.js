import Lottos from "./Lottos.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import Validator from "../utils/Validator.js";
import Matcher from "./Matcher.js";

class LottoController {
    async gameStart() {
        const moneyPaid = await InputView.readMoneyPaid();
        const countGame = this.getCount(moneyPaid);
        OutputView.writeLottoCounts(countGame);

        const lottos = new Lottos(countGame).getLottos();
        OutputView.writeLottos(lottos);

        const winningNumbers = await InputView.readWinningNumbers();
        const bonusNumber = await InputView.readBonusNumber();
        Validator.validateWinningNumbersWithBonusNumber(winningNumbers, bonusNumber);

        const matcher = this.#generateMatcher(lottos, winningNumbers, bonusNumber);
        const { matchResult, matchFiveNumbersWithBonusNumber } = matcher.getResults();

        OutputView.writeMatchStatistics(matchResult, matchFiveNumbersWithBonusNumber);
        OutputView.writeRateOfReturn(matchResult, matchFiveNumbersWithBonusNumber, moneyPaid);
    }

    getCount(moneyPaid) {
        return moneyPaid / 1000;
    }

    #generateMatcher(lottos, winningNumbers, bonusNumber) {
        return new Matcher(lottos, winningNumbers, bonusNumber);
    }
}

export default LottoController;
