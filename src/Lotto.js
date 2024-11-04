import { Console, Random } from "@woowacourse/mission-utils";
import { write, readInput } from "./utils.js";
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate("COUNT_OF_LOTTO_NUMBERS", numbers);
    this.#validate("LOTTO_NUMBERS", numbers);
    this.#numbers = numbers;
  }

  #validate(type, data) {
    if (
      !data ||
      (Array.isArray(data) && (!data.length || data.includes(undefined)))
    )
      return;

    const typeCasted = this.castingToNumber(data);

    switch (type) {
      case "COUNT_OF_LOTTO_NUMBERS":
        this.validateWinNumbers(typeCasted);
        break;
      case "PURCHASE_AMOUNT_UNIT":
        this.validatePurchaseAmount(typeCasted);
        break;
      case "ONLY_NUMBER":
        this.validateOnlyNumber(typeCasted);
        break;
      case "LOTTO_NUMBERS":
        this.validateAvailableNumber(typeCasted);
        break;
      case "IS_EXSITS":
        const winningNumbers = this.castingToNumber(data[0]);
        const bonusNumber = this.castingToNumber(data[1]);
        this.validateExists([winningNumbers, bonusNumber]);
        break;
      default:
        break;
    }
  }

  castingToNumber(data) {
    if (
      data === undefined ||
      data === null ||
      (typeof data === "object" && !Array.isArray(data))
    ) {
      return;
    }

    if (Array.isArray(data)) {
      return data.map((num) => Number(num));
    }

    if (Array.isArray(data.split(","))) {
      return data.split(",").map((num) => Number(num));
    }

    return Number(data);
  }

  validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0) {
      throw new Error(`[ERROR] 구입 금액은 1000원 단위로 입력해 주세요.\n`);
    }
  }

  validateWinNumbers(lottoNumbers) {
    if (lottoNumbers.includes(0)) {
      throw new Error(`[ERROR] 0은 입력할 수 없습니다.\n`);
    }

    if (lottoNumbers.length !== 6) {
      throw new Error(`[ERROR] 당첨 번호 6개를 입력해주세요.\n`);
    }
    if (/[^0-9,]/.test(lottoNumbers)) {
      throw new Error(`[ERROR] 숫자와 쉼표(,)만 입력해 주세요.\n`);
    }
  }

  validateOnlyNumber(numbers) {
    if (isNaN(numbers)) {
      throw new Error(`[ERROR] 숫자만 입력 가능합니다.\n`);
    }
  }

  validateAvailableNumber(numbers) {
    const uniqueNumbers = [];

    for (const number of numbers) {
      if (uniqueNumbers.includes(number)) {
        throw new Error(`[ERROR] 로또 담청 번호에 중복된 숫자가 있습니다.\n`);
      }

      if (number < 1 || number > 45) {
        throw new Error(
          `[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.\n`
        );
      }

      uniqueNumbers.push(number);
    }
  }

  validateExists(data) {
    const [winningNumbers, bonusNumber] = data;

    if (winningNumbers.some((number) => bonusNumber === number)) {
      throw new Error(
        `[ERROR] 당첨 번호와 보너스 번호는 중복될 수 없습니다.\n`
      );
    }
  }

  issueLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  async getPurchaseAmount() {
    const purchaseAmount = await readInput("구입금액을 입력해 주세요.\n");
    this.#validate("PURCHASE_AMOUNT_UNIT", purchaseAmount);
    return purchaseAmount / 1000;
  }

  async getLottoNumbers(count) {
    await write(`\n${count}개를 구매했습니다.`);

    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(this.issueLotto());
    }

    const text = lottos.reduce(
      (lotto, cur) => (lotto += `[${cur.join(", ")}]\n`),
      ""
    );
    await write(text);
    return lottos;
  }

  async getWinningNumbers() {
    const winNumbers = await readInput("당첨 번호를 입력해 주세요.\n");
    this.#validate("COUNT_OF_LOTTO_NUMBERS", winNumbers);
    this.#validate("LOTTO_NUMBERS", winNumbers);
    return winNumbers.split(",").map((num) => Number(num));
  }

  async getBonusNumber(winningNumbers) {
    const bonusNumber = await readInput("\n보너스 번호를 입력해 주세요.\n");
    this.#validate("ONLY_NUMBER", bonusNumber);
    this.#validate("IS_EXSITS", [winningNumbers, bonusNumber]);
    return Number(bonusNumber);
  }

  getBenefitRatio(countOfLottery, totalProfit) {
    return ((totalProfit / (countOfLottery * 1000)) * 100).toFixed(1);
  }

  async getResult(lottos, winningNumbers, bonusNumber) {
    await write("\n당첨 통계\n---");

    const result = lottos
      .map((lotto) => {
        const matchCount = lotto.filter((number) =>
          winningNumbers.includes(number)
        ).length;
        const isBonus = lotto.some((number) => {
          return bonusNumber === Number(number);
        });
        return { matchCount, isBonus };
      })
      .filter(({ matchCount }) => matchCount >= 3);

    let rank = {};
    let text = "";

    for (let i = 0; i < result.length; i++) {
      const { matchCount, isBonus } = result[i];
      rank[matchCount] = (rank[matchCount] || 0) + 1;
      rank["isBonus"] = isBonus && rank[5] ? (rank["isBonus"] || 0) + 1 : 0;
    }

    text += `3개 일치 (5,000원) - ${rank[3] || 0}개\n`;
    text += `4개 일치 (50,000원) - ${rank[4] || 0}개\n`;
    text += `5개 일치 (1,500,000원) - ${rank[5] || 0}개\n`;
    text += `5개 일치, 보너스 볼 일치 (30,000,000원) - ${
      rank["isBonus"] || 0
    }개\n`;
    text += `6개 일치 (2,000,000,000원) - ${rank[6] || 0}개\n`;
    text += `총 수익률은 ${this.getBenefitRatio(
      lottos.length,
      5000 * (rank[3] || 0) +
        50000 * (rank[4] || 0) +
        1500000 * ((rank[5] && !rank["isBonus"]) || 0) +
        30000000 * (rank["isBonus"] || 0) +
        2000000000 * (rank[6] || 0)
    )}%입니다.`;

    await write(text);
  }

  wrapperFunc(func) {
    const boundFunc = func.bind(this);

    return async (...args) => {
      while (true) {
        try {
          return await boundFunc(...args);
        } catch (error) {
          Console.print(error.message);
        }
      }
    };
  }

  async play() {
    const countOfLottery = await this.wrapperFunc(this.getPurchaseAmount)();
    const lottos = await this.wrapperFunc(this.getLottoNumbers)(countOfLottery);
    const winningNumbers = await this.wrapperFunc(this.getWinningNumbers)();
    const bonusNumber = await this.wrapperFunc(this.getBonusNumber)(
      winningNumbers
    );

    await this.getResult(lottos, winningNumbers, bonusNumber);
  }
}

export default Lotto;
