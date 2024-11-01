import {
  LOTTO_NUM_LENGTH,
  LOTTO_PRICE,
  RANDOM_RANGE,
} from "./lib/constants.js";
import {
  handleBonusNumber,
  handleLottoNumbers,
  handlePrice,
} from "./lib/validation.js";
import Lotto from "./Lotto.js";

class LottoProcess {
  #price;
  #lottos;
  #winningNumbers;
  #bonusNumber;

  constructor(io, random) {
    this.io = io;
    this.random = random;
    this.#price = 0;
    this.#lottos = [];
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
  }

  async runProcess() {
    await this.setPrice();
    const lottoCounts = this.calculateLottoCounts(this.#price);
    this.buyLottos(lottoCounts);
    await this.setWinningNumbers();
    await this.setBonusNumber();

    this.announceResult();
  }

  async setPrice() {
    do {
      this.#price = await this.io.read("구입금액을 입력해 주세요.\n");
    } while (!handlePrice(this.#price));
  }

  calculateLottoCounts(price) {
    const lottoCounts = Math.trunc(Number(price) / LOTTO_PRICE);
    this.io.print(lottoCounts + "개를 구매했습니다.");

    return lottoCounts;
  }

  buyLottos(lottoCounts) {
    for (let i = 0; i < lottoCounts; i += 1) {
      const randomNumbers = this.random(
        RANDOM_RANGE.min,
        RANDOM_RANGE.max,
        LOTTO_NUM_LENGTH
      );

      const lotto = new Lotto(randomNumbers);

      this.io.print(`[${randomNumbers.sort((a, b) => a - b).join(", ")}]`);

      this.#lottos = [...this.#lottos, lotto];
    }
  }

  async setWinningNumbers() {
    do {
      this.#winningNumbers = await this.io.read("당첨 번호를 입력해 주세요.\n");
    } while (!handleLottoNumbers(this.#winningNumbers));
  }

  async setBonusNumber() {
    do {
      this.#bonusNumber = await this.io.read("보너스 번호를 입력해 주세요.\n");
    } while (
      !handleBonusNumber(this.#winningNumbers.split(","), this.#bonusNumber)
    );
  }

  announceResult() {
    const winningRanks = this.getWinningRanks();
    const percentage = this.calculatePercentage(winningRanks, this.#price);

    this.io.print("당첨 통계\n");
    this.io.print("---");
    this.io.print(`3개 일치 (5,000원) - ${winningRanks["5"]}개`);
    this.io.print(`4개 일치 (50,000원) - ${winningRanks["4"]}개`);
    this.io.print(`5개 일치 (1,500,000원) - ${winningRanks["3"]}개`);
    this.io.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningRanks["2"]}개`
    );
    this.io.print(`6개 일치 (2,000,000,000원) - ${winningRanks["1"]}개`);
    this.io.print(`총 수익률은 ${percentage}%입니다.`);
  }

  getWinningRanks() {
    return this.#lottos.reduce(
      (obj, lotto) => {
        const rank = lotto.getLottoResult(
          this.#winningNumbers,
          this.#bonusNumber
        );

        if (rank) {
          obj[rank] += 1;
        }

        return obj;
      },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    );
  }

  calculatePercentage(winningRanks, price) {
    const prizeMoney =
      winningRanks["1"] * 2000000000 +
      winningRanks["2"] * 30000000 +
      winningRanks["3"] * 1500000 +
      winningRanks["4"] * 50000 +
      winningRanks["5"] * 5000;

    return Math.round((prizeMoney / Number(price)) * 10000) / 100;
  }
}

export default LottoProcess;
