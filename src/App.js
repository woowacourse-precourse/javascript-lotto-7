import { Console } from '@woowacourse/mission-utils';

class App {
    async run() {
        const MONEY = await Console.readLineAsync(
            '구입금액을 입력해 주세요.\n'
        );
        const AMOUNT = calculateLottoAmount(MONEY);
        Console.print(`\n${AMOUNT}개를 구매했습니다.`);

        const WINNING_INPUT = await Console.readLineAsync(
            '\n당첨 번호를 입력 주세요.\n'
        );
    }
}

export default App;
