import Lotto from "./Lotto.js";
import { read, print, random } from "./lib/utils.js";
import { PRICE_ERROR, ONLY_NUM_ERROR } from "./lib/error.js";
import {
  LOTTO_PRICE,
  LOTTO_NUM_LENGTH,
  RANDOM_RANGE,
} from "./lib/constants.js";
import {
  handlePrice,
  handleLottoNumbers,
  handleBonusNumber,
} from "./lib/validation.js";

class App {
  async run() {
    const lottos = [];

    let price = 0;
    let winningNumbers = 0;
    let bonusNumber = 0;

    do {
      price = await read("구입금액을 입력해 주세요.\n");
    } while (!handlePrice(price));

    const lottoCounts = Math.trunc(Number(price) / LOTTO_PRICE);

    print(lottoCounts + "개를 구매했습니다.");

    // 로또 랜덤 번호 발행
    for (let i = 0; i < lottoCounts; i += 1) {
      const randomNumbers = random(
        RANDOM_RANGE.min,
        RANDOM_RANGE.max,
        LOTTO_NUM_LENGTH
      );
      // 검증은 개별 로또 내부에서 함
      const lotto = new Lotto(randomNumbers);
      // 로또 용지 출력
      print(`[${randomNumbers.sort((a, b) => a - b).join(", ")}]`);
      lottos.push(lotto);
    }

    do {
      winningNumbers = await read("당첨 번호를 입력해 주세요.\n");
    } while (!handleLottoNumbers(winningNumbers));

    do {
      bonusNumber = await read("보너스 번호를 입력해 주세요.\n");
    } while (!handleBonusNumber(winningNumbers.split(","), bonusNumber));

    const winningRanks = lottos.reduce(
      (obj, lotto) => {
        const rank = lotto.getLottoResult(winningNumbers, bonusNumber);

        if (rank) {
          obj[rank] += 1;
        }

        return obj;
      },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    );

    const prizeMoney =
      winningRanks["1"] * 2000000000 +
      winningRanks["2"] * 30000000 +
      winningRanks["3"] * 1500000 +
      winningRanks["4"] * 50000 +
      winningRanks["5"] * 5000;

    const percentage = Math.round((prizeMoney / Number(price)) * 10000) / 100;

    print("당첨 통계\n");
    print("---");
    print(`3개 일치 (5,000원) - ${winningRanks["5"]}개`);
    print(`4개 일치 (50,000원) - ${winningRanks["4"]}개`);
    print(`5개 일치 (1,500,000원) - ${winningRanks["3"]}개`);
    print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningRanks["2"]}개`);
    print(`6개 일치 (2,000,000,000원) - ${winningRanks["1"]}개`);
    print(`총 수익률은 ${percentage}%입니다.`);
  }
}

export default App;
