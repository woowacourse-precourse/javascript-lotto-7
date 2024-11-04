import { Console } from "@woowacourse/mission-utils";
import Price from "./Model/Price.js";
import LottoList from "./Model/LottoList.js";
import WinningNumbers from "./Model/WinningNumbers.js";
import LottoResult from "./Model/LottoResult.js";
import { RESULT_DESCRIPTION } from "./Message/Message.js";

class App {
  async run() {
    // 1~2. 로또 구입 금액 입력 및 유효성 검사
    const priceInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    const priceInst = new Price(priceInput);

    // 3. 발행한 금액 수량 출력
    const lottoNum = priceInst.getPrice() / 1000;
    Console.print("\n" + lottoNum + "개를 구매했습니다.");

    const lottoListInst = new LottoList(lottoNum);

    // 4. 발행한 로또 번호 출력
    lottoListInst.getLottoList().forEach((lotto) => {
      Console.print(lotto.getLotto());
    });

    const winningNumInst = new WinningNumbers();

    // 5. 당첨 번호 입력
    const winningLottoInput = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );

    // 6. 당첨 번호 유효성 검사
    winningNumInst.setWinningLotto(winningLottoInput);

    // 7. 보너스 번호 입력
    const bonusNumberInput = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    // 8. 보너스 번호 유효성 검사
    winningNumInst.setBonusNumber(bonusNumberInput);

    // 9. 당첨 내역 출력
    Console.print("\n당첨 통계\n---");
    const lottoResultInst = new LottoResult(
      lottoListInst.getLottoList(),
      winningNumInst.getWinningLotto(),
      winningNumInst.getBonusNumber()
    );

    const lottoResult = lottoResultInst.getLottoResult();
    lottoResult.forEach((result, index) => {
      Console.print(`${RESULT_DESCRIPTION[index]} - ${result}개`);
    });

    // 10. 수익률 출력
    Console.print(`총 수익률은 ${lottoResultInst.getReturnRate()}%입니다.`);
  }
}

export default App;
