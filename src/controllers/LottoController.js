import { Calculator } from "../utils/Calculator.js";
import { Validator } from "../utils/Validator.js";
import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";
import { RANKING_TOTAL } from "../constants/Constants.js";

class LottoController {
  #user;
  #winningNumbers;
  #bonusNumber;

  constructor(user) {
    this.#user = user;
  }

  async start() {
    this.#winningNumbers = await this.inputWinningNumber();
    this.#bonusNumber = await this.inputBonusNumber();
    this.rank(this.matching());
    OutputView.statistics();
    OutputView.returnRate(this.returnRate());
  }

  async inputWinningNumber() {
    const winningNumber = (await InputView.winningNumber())
      .split(",")
      .map((number) => Number(number));

    return await this.validateWinningNumber(winningNumber);
  }

  async validateWinningNumber(numbers) {
    try {
      Validator.totalNumber(numbers);
      Validator.numberArrange(numbers);
      Validator.isInteger(numbers);
      Validator.sameNumber(numbers);
    } catch (error) {
      OutputView.error(error.message);
      return await this.inputWinningNumber();
    }

    return numbers;
  }

  async inputBonusNumber() {
    const bonusNumber = Number(await InputView.bonusNumber());

    return this.validateBonusNumber(bonusNumber);
  }

  async validateBonusNumber(number) {
    let numberArr = [number];
    try {
      Validator.numberArrange(numberArr);
      Validator.isInteger(numberArr);
      this.#winningNumbers.forEach((number) => {
        numberArr.push(number);
      });
      Validator.sameNumber(numberArr);
    } catch (error) {
      OutputView.error(error.message);
      await this.inputBonusNumber();
    }

    return number;
  }

  matching() {
    const result = this.#user.matching(this.#winningNumbers, this.#bonusNumber);
    const rankings = result.map((result) =>
      Calculator.ranking(result[0], result[1])
    );

    return rankings;
  }

  rank(rankings) {
    rankings.forEach((ranking) => {
      if (ranking !== false) {
        RANKING_TOTAL[ranking]++;
      }
    });
  }

  returnRate() {
    return this.#user.returnRate(Calculator.totalPrize());
  }
}

export default LottoController;
