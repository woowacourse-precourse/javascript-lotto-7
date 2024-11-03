import { Console } from "@woowacourse/mission-utils";
import MoneyValidator from "./MoneyValidator.js";
import LottoGenerator from "./LottoGenerator.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    try {
      const money = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
      new MoneyValidator(money);

      const lottoGenerator = new LottoGenerator(money);
      const lottos = lottoGenerator.getLottos();
      const lottosCount = lottoGenerator.lottoCount;
      Console.print(`\n${lottosCount}개를 구매했습니다.`);
      lottos.map(lotto => {
        Console.print(lotto.sort((a, b) => a - b));
      });

      const winningNumberInput = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n",
      );

      const winningNumber = winningNumberInput
        .split(",")
        .map(number => Number(number.trim()));

      const lotto = new Lotto();
      lotto.validateWinningNumber(winningNumber);
      const bonusNumberInput = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n",
      );

      const bonusNumber = Number(bonusNumberInput.trim());
      lotto.validateBonusNumber(bonusNumber);

      const matchCountResult = {
        "1th": 0,
        "2th": 0,
        "3th": 0,
        "4th": 0,
        "5th": 0,
      };

      lottos.forEach(lottoNumbers => {
        const { matchCount, isMatchBonusNumber } = lotto.getMatchCount(
          lottoNumbers,
          winningNumber,
          bonusNumber,
        );

        switch (matchCount) {
          case 3:
            return (matchCountResult["5th"] += 1);
          case 4:
            return (matchCountResult["4th"] += 1);
          case 5:
            if (!isMatchBonusNumber) {
              return (matchCountResult["3th"] += 1);
            }
            return (matchCountResult["2th"] += 1);
          case 6:
            return (matchCountResult["1th"] += 1);
          default:
            return;
        }
      });

      Console.print("\n당첨 통계\n---\n");
      Console.print(
        `3개 일치 (5,000원) - ${matchCountResult["5th"]}개\n` +
          `4개 일치 (50,000원) - ${matchCountResult["4th"]}개\n` +
          `5개 일치 (1,500,000원) - ${matchCountResult["3th"]}개\n` +
          `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCountResult["2th"]}개\n` +
          `6개 일치 (2,000,000,000원) - ${matchCountResult["1th"]}개\n`,
        // "총 수익률은 62.5%입니다.",
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
