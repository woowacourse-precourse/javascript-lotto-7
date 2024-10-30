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

    Console.print('');
    Console.print('당첨 번호를 입력해 주세요.');
    const pickLottoNumber = (await Console.readLineAsync('')).split(',').map((number) => parseInt(number, 10));

    Console.print('');
    Console.print('보너스 번호를 입력해 주세요.');
    const pickBonusNumber = parseInt(await Console.readLineAsync(''), 10);
    pickLottoNumber.push(pickBonusNumber);

    const lottoNumberMatchCount = [];
    let bonusNumberMatchCount = Array(buyLottoCount / 1000).fill(0);

    randomLottoNumbers.forEach((lottoNumber, idx) => {
      const result = lottoNumber.filter((number) => pickLottoNumber.includes(number)).length;

      if (lottoNumber.filter((number) => pickBonusNumber === number).length === 1) {
        bonusNumberMatchCount[idx] = 1;
      }

      lottoNumberMatchCount.push(result);
    });
  }
}

export default App;
