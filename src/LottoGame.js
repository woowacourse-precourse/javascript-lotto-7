import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import RankStatus from "./RankStatus.js";
import { PRIZE, RESULT_MESSAGE } from "./Constant.js";

class LottoGame {
  #lottoAmount;
  #lottoArr;
  #Ranks;

  constructor(lottoAmount) {
    this.#lottoAmount = lottoAmount;
    this.#lottoArr = [];
    this.#Ranks = new RankStatus();
  }

  // lottoAmount 만큼 로또 객체 생성하기
  CreateLotto() {
    Console.print(`${this.#lottoAmount}개를 구매했습니다.`);
    for (let i = 0; i < this.#lottoAmount; i++) {
      const lottoNum = this.#CreateLottoNumbers()
        .map((num) => Number(num))
        .sort((a, b) => a - b);
      this.printLottoNum(lottoNum);
      const lotto = new Lotto(lottoNum);
      this.#lottoArr.push(lotto);
    }
  }

  // 로또 번호 출력
  printLottoNum(arr) {
    const nums = arr.join(", ");
    Console.print(`[${nums}]`);
  }

  // lotto 숫자 랜덤 생성 메소드
  #CreateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  // 당첨 번호 확인
  CheckLottos(winningNumbers, bonusNumber) {
    this.#lottoArr.forEach((lotto) => {
      this.#Ranks.increseRankCount(lotto.getLottoRank(winningNumbers, bonusNumber));
    });
  }

  // 총 당첨금 계산
  #getTotalPrize() {
    let totalPrize = 0;
    const prizeValues = [PRIZE.FIRST, PRIZE.SECOND, PRIZE.THIRD, PRIZE.FOURTH, PRIZE.FIFTH];
    for (let i = 0; i < 5; i++) {
      totalPrize += this.#Ranks.getRankCount(i + 1) * prizeValues[i];
    }
    return totalPrize;
  }

  // 총 수익률 계산
  #getRateOfReturn(purchaseAmount) {
    const totalPrize = this.#getTotalPrize();
    if (totalPrize === 0) return 0;
    const RateOfReturn = Math.round((totalPrize / purchaseAmount) * 10000) / 100;
    return RateOfReturn;
  }

  // 결과 출력
  printLottoResult(purchaseAmount) {
    const resultMessage = [
      RESULT_MESSAGE.FIRST,
      RESULT_MESSAGE.SECOND,
      RESULT_MESSAGE.THIRD,
      RESULT_MESSAGE.FOURTH,
      RESULT_MESSAGE.FIFTH,
    ];
    Console.print("당첨 통계\n---\n");
    for (let i = 5; i >= 1; i--) {
      const message = `${resultMessage[i - 1]} - ${this.#Ranks.getRankCount(i)}개\n`;
      Console.print(message);
    }
    Console.print(`총 수익률은 ${this.#getRateOfReturn(purchaseAmount)}%입니다.`);
  }
}

export default LottoGame;
