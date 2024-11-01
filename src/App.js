import Lotto from "./Lotto.js";

class App {
  async run() {
    const lottos = await Lotto.buy();

    const lotto = await Lotto.createWinningNumbers();

    const bonusNumber = await lotto.getBonusNumber();

    Lotto.showResultByLot(lottos, lotto.winnningNumbers, bonusNumber);

    return;
  }
}

export default App;

// 당첨 번호 중복 검사 하기
