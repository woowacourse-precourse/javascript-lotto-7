import { Console } from '@woowacourse/mission-utils';

export const PRIZE_MONEY = {
  3: 5000,
  4: 50000,
  5: 1500000,
  '5_BONUS': 30000000,
  6: 2000000000,
};

class Game {
  #matchingNumberCount = { 3: 0, 4: 0, 5: 0, '5_BONUS': 0, 6: 0 };

  constructor(purchasedLottos, winningLotto) {
    this.purchasedLottos = purchasedLottos;
    this.winningLotto = winningLotto;
  }

  printResult() {
    Console.print('당첨 통계');
    Console.print('---');

    ['3', '4', '5', '5_BONUS', '6'].forEach((key) => {
      const count = this.#matchingNumberCount[key];

      const prize = PRIZE_MONEY[key];
      // console.log(key);
      const matchText = key === '5_BONUS' ? '5개 일치, 보너스 볼 일치' : `${key}개 일치`;
      Console.print(`${matchText} (${prize.toLocaleString()}원) - ${count}개`);
    });

    const yieldRate = this.calculateYield(); // 수익률 계산 함수로 변경
    Console.print(`총 수익률은 ${yieldRate}%입니다.`);
  }

  calculateYield() {
    const totalPrize = Object.entries(this.#matchingNumberCount).reduce((total, [key, count]) => total + PRIZE_MONEY[key] * count, 0);
    return ((totalPrize / (this.purchasedLottos.getLottos().length * 1000)) * 100).toFixed(1);
  }

  calculateResult() {
    const purchasedLottoNumberList = this.purchasedLottos.getLottos().map((lotto) => lotto.getNumbers());

    const winningLottoNumber = this.winningLotto.getWinningNumbers();

    purchasedLottoNumberList.forEach((lottoNumber) => {
      const matchCount = lottoNumber.filter((number) => winningLottoNumber.includes(number)).length;

      if (matchCount < 3) return;
      if (matchCount === 5 && lottoNumber.includes(this.winningLotto.getBonusNumber())) {
        this.#matchingNumberCount['5_BONUS'] += 1;
        return;
      }
      this.#matchingNumberCount[matchCount] += 1;
    });
  }

  play() {
    this.calculateResult();
    this.printResult();
  }
}

export default Game;
