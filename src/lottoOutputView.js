import { Console } from "@woowacourse/mission-utils";
import { LottoList } from "./LottoList.js";

const keyByRank = {
  1: 6,
  2: 5,
  3: 5,
  4: 4,
  5: 3,
};

export const lottoOutputView = {
  showMessage: (message) => {
    Console.print(message);
  },
  showLottoQuantity(lottoQuantity) {
    const lottoQuantityMessage = `\n${lottoQuantity}개를 구매했습니다.`;

    Console.print(lottoQuantityMessage);
  },
  showLottoListNumber(lottoList) {
    lottoList.forEach(this.showLottoNumber);
  },
  showLottoNumber(lotto) {
    const lottoDelimiter = ", ";

    const lottoNumberMessage = `[${lotto.numbers.join(lottoDelimiter)}]`;
    Console.print(lottoNumberMessage);
  },
  showRankList(rankMap) {
    Console.print("\n당첨 통계\n---");

    const messageMap = (rank, count) => {
      return `${keyByRank[rank]}개 일치${getBonusMessage(
        rank
      )} (${LottoList.profitByRank[rank].toLocaleString(
        "ko-KR"
      )}원) - ${count}개`;
    };

    const getBonusMessage = (rank) => {
      if (rank === "2") {
        return ", 보너스 볼 일치";
      }

      return "";
    };

    const sortedRankList = Object.entries(rankMap).toSorted(
      ([keyA], [keyB]) => Number(keyB) - Number(keyA)
    );

    sortedRankList.forEach(([rank, count]) => {
      Console.print(messageMap(rank, count));
    });
  },
  showProfit(profit) {
    const message = `총 수익률은 ${profit}%입니다.`;
    Console.print(message);
  },
};
