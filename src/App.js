import { MissionUtils } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';
class App {
  async run() {
    // 구입 금액 입력
    const purchasePrice = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const lottoCount = Math.floor(purchasePrice / 1000);

    // 구입한 로또 수 출력
    await MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.\n`);

    // 랜덤 로또 번호 생성
    const lottos = Array.from(
      { length: lottoCount },
      () => new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)),
    );
    lottos.forEach((lotto) => MissionUtils.Console.print(lotto.getNumbers()));

    // 당첨 번호 및 보너스 번호 입력
    const winningNumberInput = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const bonusNumber = Number(await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n'));

    const winningNumbers = winningNumberInput.split(',').map(Number);
    const winningLotto = new Lotto(winningNumbers);

    // 당첨 통계 계산
    const results = {
      match3: 0,
      match4: 0,
      match5: 0,
      match5Bonus: 0,
      match6: 0,
    };

    lottos.forEach((lotto) => {
      const matchCount = lotto.getMatchCount(winningLotto);
      const hasBonus = lotto.hasBonusNumber(bonusNumber);

      if (matchCount === 6) results.match6 += 1;
      else if (matchCount === 5 && hasBonus) results.match5Bonus += 1;
      else if (matchCount === 5) results.match5 += 1;
      else if (matchCount === 4) results.match4 += 1;
      else if (matchCount === 3) results.match3 += 1;
    });

    // 당첨 통계 출력
    await MissionUtils.Console.print('당첨 통계\n---');
    await MissionUtils.Console.print(`3개 일치 (5,000원) - ${results.match3}개`);
    await MissionUtils.Console.print(`4개 일치 (50,000원) - ${results.match4}개`);
    await MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${results.match5}개`);
    await MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.match5Bonus}개`);
    await MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${results.match6}개`);

    // 총 수익률 계산 및 출력
    const totalProfit =
      results.match3 * 5000 +
      results.match4 * 50000 +
      results.match5 * 1500000 +
      results.match5Bonus * 30000000 +
      results.match6 * 2000000000;

    const profitRate = ((totalProfit / purchasePrice) * 100).toFixed(2);
    await MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.\n`);
  }
}

export default App;
