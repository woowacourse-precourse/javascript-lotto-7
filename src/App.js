import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('구입금액을 입력해 주세요.');
    const buyLottoCount = await Console.readLineAsync('');
    Console.print('');

    const randomLottoNumbers = [];

    for (let index = 0; index < buyLottoCount / 1000; index++) {
      const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomLottoNumbers.push(lottoNumber.sort((a, b) => a - b));
    }

    Console.print(`${buyLottoCount / 1000}개를 구매했습니다.`);
    randomLottoNumbers.forEach((lottoNumber) => Console.print(lottoNumber));
  }
}

export default App;
