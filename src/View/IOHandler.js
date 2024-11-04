import { IOUtils } from "../Util/IOUtils.js";

class IOHandler {
  #inputMessage = Object.freeze({
    inputPurchaseMoney: "구입금액을 입력해 주세요.",
    inputWinningNumber: "당첨 번호를 입력해 주세요.",
    inputBonusNumber: "보너스 번호를 입력해 주세요.",
  });

  #outputMessage = Object.freeze({
    outputTitle: "당첨 통계 \n---",
    outputPurchaseLottoNum: (purchaseNum) => `${purchaseNum}개를 구매했습니다.`,
    outputRateOfReturn: (rate) => `총 수익률은 ${rate}입니다.`,
  });

  async inputPurchaseMoney() {
    const money = await IOUtils.input(this.#inputMessage.inputPurchaseMoney);
    return Number(money);
  }

  async inputWinningNumber() {
    const numbers = await IOUtils.input(this.#inputMessage.inputWinningNumber);
    return numbers.split(",");
  }

  async inputBonusNumber() {
    const bonusNumber = await IOUtils.input(
      this.#inputMessage.inputBonusNumber
    );
    return Number(bonusNumber);
  }

  #outputResultLine(lotto) {
    IOUtils.output(
      `${lotto.getMatchedTotalCnt()}개 일치 (${lotto.getRank().prize}원) - ${
        lotto.getMatchedTotalCnt() - lotto.getMatchedNumberCnt()
      }개`
    );
  }

  #outputRateOfReturn(rate) {
    IOUtils.output(this.#outputMessage.outputRateOfReturn(rate));
  }

  #outputLottoNumbers(numbers) {
    IOUtils.output(numbers);
  }

  #outputPurchaseLottoNum(number) {
    IOUtils.output(this.#outputMessage.outputPurchaseLottoNum(number));
  }

  outputLottos(lottos) {
    this.#outputPurchaseLottoNum(lottos.length);
    lottos.forEach((lotto) => {
      this.#outputLottoNumbers(lotto.getNumbers());
    });
    IOUtils.newLine();
  }

  outputResult(lottos, rate) {
    IOUtils.output(this.#outputMessage.outputTitle);
    lottos.forEach((lotto) => this.#outputResultLine(lotto));
    this.#outputRateOfReturn(rate);
  }
}

export default IOHandler;
