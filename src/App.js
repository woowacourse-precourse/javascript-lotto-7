import { UserLotto } from "./UserLotto.js";
import { Console } from "@woowacourse/mission-utils";
import { LottoMarket } from "./LottoMarket.js";
import { LottoGame } from "./LottoGame.js";
import { LottoResult } from "./LottoResult.js";

class App {
  async run() {
    const userLotto = new UserLotto();
    const lottoMarket = new LottoMarket();
    const lottoGame = new LottoGame();
    const lottoResult = new LottoResult();

    try {
      // 구입 금액 입력 및 유효성 검사
      const purchaseMoney = await userLotto.getLottoPurchaseInput();

      // 로또 수량 계산
      const count = userLotto.CalculateAmountCount(purchaseMoney);

      // 로또 번호 생성 및 출력
      const userLottos = lottoMarket.userLottoNumbers(count);
      Console.print(`${count}개를 구매했습니다.`)
      userLottos.forEach(lotto => {
        Console.print(lotto);
      })
      // Console.print(userLottos);

      // 로또 당첨 번호 입력 받기
      await lottoGame.getWinningNumbersInput();
      const winningNumbers = lottoGame.winningNumbers.getNumbers();

      // 보너스 당첨 번호 입력 받기
      await lottoGame.getBonusNumberInput();
      const bonusNumber = lottoGame.bonusNumber;

      Console.print(winningNumbers, bonusNumber);

      // 당첨 통계 계산
      lottoResult.calculateNumbers(userLottos, winningNumbers, bonusNumber);

      // 결과 출력
      lottoResult.printResults(purchaseMoney);
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
