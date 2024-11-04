import { Console } from "@woowacourse/mission-utils";
import InputValidate from "./utils/InputValidate.js";
import LottoModel from "./model/lottoModel.js";

class LottoActions {
  constructor() {
    this.error = new InputValidate();
    this.model = new LottoModel();
  }

  async play() {
    await this.issueLotto();
    this.getInformation();
  }

  async issueLotto() {
    const userPrice = await this.inputPrice();
    this.getLottoList(userPrice);

    const winningNumber = await this.inputWinningNumber();
    this.model.setWinningNumber(winningNumber);

    const bonusNumber = await this.inputBonusNumber();
    this.model.setBonusNumber(bonusNumber);
  }

  getInformation() {
    this.model.setWinningStatistics();
    this.printResultMessage();
    this.printUserRank(this.model.getStatistics());
    const profit = this.model.calculateProfit();
    this.printProfit(profit);
  }

  async inputPrice() {
    let isValid = false;
    let price;
    do {
      price = await Console.readLineAsync("구입금액을 입력해 주세요.");
      isValid = this.validateUserPrice(price);
    } while (!isValid);
    return price;
  }

  validateUserPrice(price) {
    const validationMessage = this.error.priceInputValidate(price);
    if (validationMessage) {
      Console.print(validationMessage);
      return false;
    }
    return true;
  }

  getLottoList(userPrice) {
    this.model.setPrice(userPrice);
    this.model.generateLottoNumber();
    const lottoList = this.model.getLottoList();
    this.printLottoList(lottoList);
  }

  async inputWinningNumber() {
    let isValid = false;
    let winningNumber;
    do {
      winningNumber = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
      );
      isValid = this.validateWinningNumber(winningNumber.split(","));
    } while (!isValid);
    return winningNumber.split(",").map(Number);
  }

  validateWinningNumber(numbers) {
    const validationMessage = this.error.lottoNumberValidate(numbers);
    if (validationMessage) {
      Console.print(validationMessage);
      return false;
    }
    return true;
  }

  async inputBonusNumber() {
    let bonusNumber;
    let isValid = false;
    do {
      bonusNumber = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n"
      );
      isValid = this.validateBonusNumber(bonusNumber);
    } while (!isValid);
    return Number(bonusNumber);
  }

  validateBonusNumber(bonusNumber) {
    const validationMessage = this.error.bonusNumberValidate(
      bonusNumber,
      this.model.getWinningNumber()
    );
    if (validationMessage) {
      Console.print(validationMessage);
      return false;
    }
    return true;
  }

  printLottoList(lottoList) {
    Console.print(`\n${lottoList.length}개를 구매했습니다.`);
    for (let lotto of lottoList) {
      Console.print(`[${lotto.getLottoNumber().join(", ")}]`);
    }
  }

  printResultMessage() {
    Console.print("\n당첨 통계");
    Console.print("---");
  }

  printUserRank(userDetails) {
    const [fifth, fourth, third, second, first] = [
      userDetails.fifthPlace || 0,
      userDetails.fourthPlace || 0,
      userDetails.thirdPlace || 0,
      userDetails.secondPlace || 0,
      userDetails.firstPlace || 0,
    ];

    const lottoArray = [
      `3개 일치 (5,000원) - ${fifth}개`,
      `4개 일치 (50,000원) - ${fourth}개`,
      `5개 일치 (1,500,000원) - ${third}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개`,
      `6개 일치 (2,000,000,000원) - ${first}개`,
    ];

    this.printUserLotto(lottoArray);
  }

  printUserLotto(lottoArray) {
    for (let message of lottoArray) {
      Console.print(message);
    }
  }

  printProfit(profit) {
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}

export default LottoActions;
