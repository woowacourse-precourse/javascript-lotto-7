import { Console } from "@woowacourse/mission-utils";
import MoneyValidator from "./MoneyValidator.js";
import LottoGenerator from "./LottoGenerator.js";
import Lotto from "./Lotto.js";
import { PRIZE } from "./constants/prize.js";

class App {
  async run() {
    try {
      const moneyInput =
        await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
      const moneyValidator = new MoneyValidator();
      const money = moneyValidator.validateMoney(moneyInput);

      const lottoGenerator = new LottoGenerator(money);
      const lottos = lottoGenerator.getLottos();
      const lottosCount = lottoGenerator.lottoCount;
      Console.print(`\n${lottosCount}개를 구매했습니다.`);
      lottos.forEach(lotto => {
        Console.print(`[${lotto.sort((a, b) => a - b).join(", ")}]`);
      });

      const winningNumberInput = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n",
      );

      const winningNumber = winningNumberInput
        .split(",")
        .map(number => Number(number.trim()));

      const lotto = new Lotto();
      lotto.validateLottoNumber(winningNumber);
      const bonusNumberInput = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n",
      );

      const bonusNumber = Number(bonusNumberInput.trim());
      lotto.validateBonusNumber(bonusNumber);

      const matchCountResult = {
        "1st": 0,
        "2nd": 0,
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
            return (matchCountResult["2nd"] += 1);
          case 6:
            return (matchCountResult["1st"] += 1);
          default:
            return;
        }
      });

      const totalMoney =
        PRIZE["1st"] * matchCountResult["1st"] +
        PRIZE["2nd"] * matchCountResult["2nd"] +
        PRIZE["3th"] * matchCountResult["3th"] +
        PRIZE["4th"] * matchCountResult["4th"] +
        PRIZE["5th"] * matchCountResult["5th"];

      const totalProfit = Math.round((totalMoney / money) * 10000) / 100;

      Console.print("\n당첨 통계\n---\n");
      Console.print(
        `3개 일치 (5,000원) - ${matchCountResult["5th"]}개\n` +
          `4개 일치 (50,000원) - ${matchCountResult["4th"]}개\n` +
          `5개 일치 (1,500,000원) - ${matchCountResult["3th"]}개\n` +
          `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCountResult["2nd"]}개\n` +
          `6개 일치 (2,000,000,000원) - ${matchCountResult["1st"]}개\n` +
          `총 수익률은 ${totalProfit}%입니다.`,
      );
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
