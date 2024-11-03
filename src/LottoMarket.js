import { LOTTO } from "../Constants.js";
import { Console, MissionUtils } from "@woowacourse/mission-utils";

export class LottoMarket {
  // 로또 번호 랜덤 생성
  makeLottoNumbers() {
    const numbers = new Set();
    for (let i = 1; i <= LOTTO.NUMBERS_COUNT; i++) {
      const number = MissionUtils.Random.pickNumberInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER);
      numbers.add(number);
    }
    // set을 배열로 변환한 후 오름차순 정렬
    return Array.from(numbers).sort((a, b) => a - b);
  }

  // 로또 번호 출력
  PrintLottoInfo(count) {
    Console.print(`${count}개를 구입했습니다.`);
    for (let i = 0; i < count; i++) {
      const lottoNumbers = this.makeLottoNumbers();
      Console.print(lottoNumbers);
    }
  }
}