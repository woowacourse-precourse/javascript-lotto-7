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
        const BONUS_NUMBER = await Console.readLineAsync(
            '\n보너스 번호를 입력해 주세요.\n'
        );
    }
}

export default App;
