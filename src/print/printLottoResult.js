import { Console } from "@woowacourse/mission-utils";

const rankMap = {
  1: "6개 일치 (2,000,000,000원)",
  2: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  3: "5개 일치 (1,500,000원)",
  4: "4개 일치 (50,000원)",
  5: "3개 일치 (5,000원)",
};

export default function printLottoResult(lottoResults) {
  Console.print("당첨 통계\n");
  Console.print("---\n");
  Object.entries(rankMap)
    .sort(([a], [b]) => b - a)
    .forEach(([rank, message]) => {
      Console.print(`${message} - ${lottoResults[rank].count}개\n`);
    });
}
