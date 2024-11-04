import { Console } from '@woowacourse/mission-utils';
import { numOfLotto } from '../src/InputComponent.js';

class App {
    async run() {
        try {
            // 로또 구입금액 입력
            Console.print('구입금액을 입력해 주세요.');
            const price = await Console.readLineAsync('');
            const lotto = numOfLotto(price); // 로또 개수
            if (lotto == 0) this.throwError('로또 구입 금액 입력 오류');
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
