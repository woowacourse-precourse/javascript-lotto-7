import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    let input = await Console.readLineAsync('구입금액을 입력해 주세요\n');
    const isValidNumber = /^\d+$/.test(input);
    if (!isValidNumber) {
      Console.print('[ERROR] 구입금액은 숫자만 입력해주세요.');
      input = await Console.readLineAsync('구입금액을 입력해 주세요\n');
    }
    const inputNumber = Number(input);

    if (inputNumber < 0) throw new Error('[ERROR] 구입금액은 양수만 입력해주세요.');
    if (inputNumber % 1000 !== 0) throw new Error('[ERROR] 구입금액은 1000원 단위입니다.');

    const countLotto = inputNumber / 1000;
    const lottos = [];

    Console.print(`${countLotto}개를 구매했습니다.`);
    for (let i = 0; i < countLotto; i++) {
      const random = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(random);
      lottos.push(lotto);
      Console.print(`[${random.join(', ')}]`);
    }

    const winInput = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winNumber = winInput.split(',').map(Number);
    const bonusNumber = Number(await Console.readLineAsync('보너스 번호를 입력해 주세요.\n'));

    Console.print('당첨통계\n---');
    const winRanking = Array(4).fill(0);
    let fiveEqualWithBonusCount = 0;

    function lottoCriteria(winNumber, bonusNumber, lottoNumber) {
      const matchCount = lottoNumber.filter(num => winNumber.includes(num)).length;
      const hasBonus = lottoNumber.includes(bonusNumber);

      if (matchCount === 6) {
        winRanking[3]++;
      } else if (matchCount === 5 && hasBonus) {
        fiveEqualWithBonusCount++;
      } else if (matchCount >= 3) {
        winRanking[matchCount - 3]++;
      }
    }

    lottos.forEach((lotto) => {
      lottoCriteria(winNumber, bonusNumber, lotto.getNumbers());
    });

    const winPrize = [5000, 50000, 1500000, 2000000000];
    const bonusPrize = 30000000;
    let earn = 0;

    for (let n = 0; n < 4; n++) {
      Console.print(`${n + 3}개 일치 (${winPrize[n].toLocaleString()}원) - ${winRanking[n]}개`);
      earn += winRanking[n] * winPrize[n];
      if (n === 2) {
        Console.print(`5개 일치, 보너스 볼 일치 (${bonusPrize.toLocaleString()}원) - ${fiveEqualWithBonusCount}개`);
        earn += fiveEqualWithBonusCount * bonusPrize;
      }
    }

    Console.print(`총 수익률은 ${(earn / inputNumber * 100).toFixed(1)}%입니다.`);
  }
}

export default App;
