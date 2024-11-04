import { Console } from '@woowacourse/mission-utils';
import LottoHelper from './LottoHelper.js';
import LottoCalculator from './LottoCalculator.js';
import Lotto from './Lotto.js';

class App {
    async run() {
        const MONEY = await LottoHelper.inputMoney();
        const LOTTO_HELPER = new LottoHelper(MONEY);
        const LOTTO = LOTTO_HELPER.drawLottoNumber();

        const { winningNumber: WINNING_NUMBER, bonusNumber: BONUS_NUMBER } =
            await LottoCalculator.inputWinningAndBonus();

        const LOTTO_CALCULATOR = new LottoCalculator(
            WINNING_NUMBER,
            BONUS_NUMBER
        );

        Console.print('\n당첨 통계\n---');
        const RESULT = LOTTO_CALCULATOR.calculateResult(LOTTO);
        const SUMMARIZE_RESULT = LOTTO_CALCULATOR.summarizeResult(RESULT);
        LOTTO_CALCULATOR.printResult(SUMMARIZE_RESULT);
        LOTTO_CALCULATOR.calculateReturnRate(SUMMARIZE_RESULT, MONEY);
    }
}

export default App;
