import { Calculator } from "../utils/Calculator.js";
import { Validator } from "../utils/Validator.js";
import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";
import LottoResult from "../LottoResult.js";
import { SEPARATOR } from "../constants/Constants.js";

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
    const lottoResult = new LottoResult(this.matching());
    OutputView.statistics(lottoResult.statistics());
    OutputView.returnRate(this.returnRate(lottoResult.totalPrize()));
  }

  async inputWinningNumber() {
    const winningNumber = (await InputView.winningNumber())
      .split(SEPARATOR)
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
    const matchWinning = this.#user.matchingWinning(this.#winningNumbers);
    const matchBonus = this.#user.matchingBonus(this.#bonusNumber);

    const rankings = matchWinning.map((total, index) =>
      Calculator.ranking(total, matchBonus[index])
    );
    return rankings;
  }

  returnRate(totalPrize) {
    return this.#user.returnRate(totalPrize);
  }
}

export default LottoController;
