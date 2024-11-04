import { IOUtils } from "../Util/IOUtils.js";
import { EarningTable } from "./EarningTable.js";

class IOHandler {
  #inputMessage = Object.freeze({
    inputPurchaseMoney: "구입금액을 입력해 주세요.",
    inputWinningNumber: "당첨 번호를 입력해 주세요.",
    inputBonusNumber: "보너스 번호를 입력해 주세요.",
  });

  #outputMessage = Object.freeze({
    outputTitle: "당첨 통계 \n---",
    outputLotto: (numbers) => "[" + numbers.join(", ") + "]",
    outputPurchaseLottoNum: (purchaseNum) => `${purchaseNum}개를 구매했습니다.`,
    outputRateOfReturn: (rate) => `총 수익률은 ${rate}%입니다.`,
  });

  async inputPurchaseMoney() {
    const money = await IOUtils.input(this.#inputMessage.inputPurchaseMoney);
    return Number(money);
  }

  async inputWinningNumber() {
    const numbers = await IOUtils.input(this.#inputMessage.inputWinningNumber);
    return numbers;
  }

  async inputBonusNumber() {
    IOUtils.newLine();
    const bonusNumber = await IOUtils.input(
      this.#inputMessage.inputBonusNumber
    );
    return Number(bonusNumber);
  }

  #outputRateOfReturn(rate) {
    IOUtils.output(this.#outputMessage.outputRateOfReturn(rate));
  }

  #outputLottoNumbers(numbers) {
    IOUtils.output(this.#outputMessage.outputLotto(numbers));
  }

  #outputPurchaseLottoNum(number) {
    IOUtils.output(this.#outputMessage.outputPurchaseLottoNum(number));
  }

  #outputResultMainContent(matchingTable) {
    const updatedEarningTable = Object.entries(EarningTable)
      .reverse()
      .filter(([k, v]) => v.title);

    updatedEarningTable.forEach(([k, v]) =>
      IOUtils.output(
        `${v.title} (${String(v.prize.toLocaleString())}원) - ${
          matchingTable.find((ele) => ele.includes(k))[1]
        }개`
      )
    );
  }

  outputLottos(lottos) {
    IOUtils.newLine();
    this.#outputPurchaseLottoNum(lottos.length);
    lottos.forEach((lotto) => {
      this.#outputLottoNumbers(lotto.getNumbers());
    });
    IOUtils.newLine();
  }

  outputResult(matchingTable, rate) {
    IOUtils.newLine();
    IOUtils.output(this.#outputMessage.outputTitle);
    this.#outputResultMainContent(matchingTable);
    this.#outputRateOfReturn(rate);
  }
}

export default IOHandler;
