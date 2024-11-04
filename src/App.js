import { Console } from '@woowacourse/mission-utils';
import LottoHelper from './LottoHelper.js';
import LottoCalculator from './LottoCalculator.js';

class App {
    async run() {
        const MONEY = await Console.readLineAsync(
            '구입금액을 입력해 주세요.\n'
        );
        const LOTTO_HELPER = new LottoHelper(MONEY);

        const LOTTO = LOTTO_HELPER.drawLottoNumber();

        const WINNING_INPUT = await Console.readLineAsync(
            '\n당첨 번호를 입력 주세요.\n'
        );
        const WINNING_NUMBER = LOTTO_HELPER.makeWinningNumber(WINNING_INPUT);
        const BONUS_NUMBER = await Console.readLineAsync(
            '\n보너스 번호를 입력해 주세요.\n'
        );

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
