import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { numOfLotto, chkSelectedNum } from '../src/InputComponent.js';

class App {
    async run() {
        try {
            // 로또 구입금액 입력
            Console.print('구입금액을 입력해 주세요.');
            const price = await Console.readLineAsync('');
            const lotto = numOfLotto(price); // 로또 개수
            if (lotto == 0) this.throwError('로또 구입 금액 입력 오류');

            // 로또 구매
            const lottoArr = [];
            Console.print(`\n${lotto}개를 구매했습니다.`);
            for (let i = 0; i < lotto; i++) {
                const sortedNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
                lottoArr.push(sortedNumbers);
            }
            for (let i = 0; i < lotto; i++) {
                Console.print(lottoArr[i]);
            }

            // 당첨 번호 입력
            Console.print('\n당첨 번호를 입력해 주세요.');
            const numbers = (await Console.readLineAsync('')).split(',');
            const selectedNum = chkSelectedNum(numbers);
            if (!selectedNum) this.throwError('당첨 번호 입력 오류');

            // 보너스 번호 입력
            Console.print('\n보너스 번호를 입력해 주세요.');
            const bonusNum = await Console.readLineAsync('');

            // 당첨 통계 출력
            Console.print('\n당첨 통계');
            Console.print('\n---');
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
