import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import RankStatus from "./RankStatus.js";
import { PRIZE } from "./Constant.js";

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
    Console.print(`\n${this.#lottoAmount}개를 구매했습니다.`);
    for (let i = 0; i < this.#lottoAmount; i++) {
      const lottoNum = this.#CreateLottoNumbers();
      const lotto = new Lotto(lottoNum);
      Console.print(lottoNum);
      this.#lottoArr.push(lotto);
    }
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
    for (let i = 0; i < rankCount.length; i++) {
      totalPrize += this.#Ranks.getRankCount(rankCount[i + 1]) * prizeValues[i];
    }
    return totalPrize;
  }

  // 총 수익률 계산
  getRateOfReturn(purchaseAmount) {
    const totalPrize = this.#getTotalPrize();
    const RateOfReturn = Math.round((purchaseAmount / totalPrize)*100) / 100;
    return RateOfReturn;
  }
}

export default LottoGame;
