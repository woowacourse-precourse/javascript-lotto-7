import {
  LOTTO_NUM_LENGTH,
  LOTTO_PRICE,
  PRIZE_MONEY,
  RANDOM_RANGE,
  RANK_MESSAGES,
} from "./lib/constants.js";
import {
  handleBonusNumber,
  handleLottoNumbers,
  handlePrice,
} from "./lib/validation.js";
import Lotto from "./Lotto.js";

class LottoProcess {
  #price;
  #lottos = [];
  #winningNumbers;
  #bonusNumber;

  constructor(io, random) {
    this.io = io;
    this.random = random;
  }

  async runProcess() {
    await this.setPrice();
    this.buyLottos();
    await this.setWinningNumbers();
    await this.setBonusNumber();
    this.announceResult();
  }

  async setPrice() {
    do {
      this.#price = await this.io.read("구입금액을 입력해 주세요.\n");
    } while (!handlePrice(this.#price));
  }

  buyLottos() {
    const lottoCounts = Math.trunc(Number(this.#price) / LOTTO_PRICE);
    this.io.print(lottoCounts + "개를 구매했습니다.");

    this.#lottos = Array.from({ length: lottoCounts }, () =>
      this.createLotto()
    );
  }

  createLotto() {
    const randomNumbers = this.random(
      RANDOM_RANGE.min,
      RANDOM_RANGE.max,
      LOTTO_NUM_LENGTH
    );
    const lotto = new Lotto(randomNumbers);
    this.io.print(`[${randomNumbers.sort((a, b) => a - b).join(", ")}]`);
    return lotto;
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
    const percentage = this.calculatePercentage(winningRanks);

    this.io.print("당첨 통계\n");
    this.io.print("---");

    RANK_MESSAGES.forEach(({ matchCount, rank, matchBonus }) => {
      let message = `${matchCount}개 일치`;

      if (matchBonus) {
        message += ", 보너스 볼 일치";
      }

      message += ` (${PRIZE_MONEY[rank].toLocaleString()}원) - ${
        winningRanks[rank]
      }개`;

      this.io.print(message);
    });

    this.io.print(`총 수익률은 ${percentage}%입니다.`);
  }

  getWinningRanks() {
    return this.#lottos.reduce(
      (obj, lotto) => {
        const rank = lotto.getLottoRank(
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

  calculatePercentage(winningRanks) {
    const totalPrize = Object.entries(PRIZE_MONEY).reduce(
      (sum, [rank, prize]) => sum + prize * winningRanks[rank],
      0
    );

    return Math.round((totalPrize / Number(this.#price)) * 10000) / 100;
  }
}

export default LottoProcess;
