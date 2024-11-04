import { Console } from '@woowacourse/mission-utils';
import { numOfLotto, chkSelectedNum } from '../src/InputComponent.js';

class App {
    async run() {
        try {
            // 로또 구입금액 입력
            Console.print('구입금액을 입력해 주세요.');
            const price = await Console.readLineAsync('');
            const lotto = numOfLotto(price); // 로또 개수
            if (lotto == 0) this.throwError('로또 구입 금액 입력 오류');

            // 당첨 번호 입력
            Console.print('\n당첨 번호를 입력해 주세요.');
            const numbers = (await Console.readLineAsync('')).split(',');
            const selectedNum = chkSelectedNum(numbers);
            if (!selectedNum) this.throwError('당첨 번호 입력 오류');

            // 보너스 번호 입력
            Console.print('\n보너스 번호를 입력해 주세요.');
            const bonusNum = await Console.readLineAsync('');
        } catch (error) {
            Console.print(error.message);
            throw error;
        }
    }

    throwError(message) {
        throw new Error(`[ERROR] ${message}`);
    }
}

export default App;
