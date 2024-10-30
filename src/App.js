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

    let winningStatistics = [0, 0, 0, 0, 0];

    lottoNumberMatchCount.forEach((matchCount, idx) => {
      switch (matchCount) {
        case 3:
          winningStatistics[0]++;
          break;
        case 4:
          winningStatistics[1]++;
          break;
        case 5:
          winningStatistics[2]++;
          break;
        case 6:
          if (bonusNumberMatchCount[idx] === 1) {
            winningStatistics[3]++;
            break;
          }
          winningStatistics[4]++;
          break;
      }
    });

    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${winningStatistics[0]}개`);
    Console.print(`4개 일치 (50,000원)  - ${winningStatistics[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningStatistics[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningStatistics[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${winningStatistics[4]}개`);

    const earningRate =
      ((5000 * winningStatistics[0] +
        50000 * winningStatistics[1] +
        1500000 * winningStatistics[2] +
        30000000 * winningStatistics[3] +
        2000000000 * winningStatistics[4]) /
        buyLottoCount) *
      100;

    Console.print(`총 수익률은 ${earningRate.toFixed(2).toLocaleString()}%입니다.`);
  }
}

export default App;
