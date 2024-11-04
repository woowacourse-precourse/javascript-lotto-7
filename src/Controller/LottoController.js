import Price from "../Model/Price.js";
import LottoList from "../Model/LottoList.js";
import WinningNumbers from "../Model/WinningNumbers.js";
import LottoResult from "../Model/LottoResult.js";
import ConsoleView from "../View/ConsoleView.js";

class LottoController {
  async run() {
    const priceInst = await this.#getValidPrice(); // 구입금액 입력 및 유효성 검사
    const lottoListInst = this.#generateLottoList(priceInst); // 로또 개수 및 번호 출력
    const winningNumInst = await this.#getWinningNumbers(); // 당첨 번호, 보너스 번호 입력

    const lottoResultInst = new LottoResult(
      lottoListInst.getLottoList(),
      winningNumInst.getWinningLotto(),
      winningNumInst.getBonusNumber()
    ); // 당첨 결과 계산

    this.#printLottoResults(lottoResultInst); // 로또 결과 출력
  }

  async #getValidPrice() {
    while (true) {
      try {
        const priceInput = await ConsoleView.readPriceInput();
        return new Price(priceInput);
      } catch (error) {
        ConsoleView.printError(error.message);
      }
    }
  }

  #generateLottoList(priceInst) {
    const lottoNum = priceInst.getPrice() / 1000; // 로또 개수
    ConsoleView.printLottoPurchaseCount(lottoNum); // 로또 수량 출력
    const lottoListInst = new LottoList(lottoNum); // 로또 생성 및 저장
    ConsoleView.printLottoNumbers(lottoListInst.getLottoList()); // 생성한 로또 출력
    return lottoListInst;
  }

  async #getWinningNumbers() {
    const winningNumInst = new WinningNumbers();

    await this.#getValidWinningLotto(winningNumInst); // 당첨 번호 입력
    await this.#getValidBonusNumber(winningNumInst); // 보너스 번호 입력

    return winningNumInst;
  }

  async #getValidWinningLotto(winningNumInst) {
    while (true) {
      try {
        const winningLottoInput = await ConsoleView.readWinningNumbers();
        winningNumInst.setWinningLotto(winningLottoInput);
        break;
      } catch (error) {
        ConsoleView.printError(error.message);
      }
    }
  }

  async #getValidBonusNumber(winningNumInst) {
    while (true) {
      try {
        const bonusNumberInput = await ConsoleView.readBonusNumber();
        winningNumInst.setBonusNumber(bonusNumberInput);
        break;
      } catch (error) {
        ConsoleView.printError(error.message);
      }
    }
  }

  #printLottoResults(lottoResultInst) {
    const lottoResult = lottoResultInst.getLottoResult();
    ConsoleView.printLottoResult(lottoResult);
    ConsoleView.printReturnRate(lottoResultInst.getReturnRate());
  }
}

export default LottoController;
