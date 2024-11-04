import { Console } from "@woowacourse/mission-utils";

export default function printResult(score, totalPrize, yields) {
  const rankCounts = [0, 0, 0, 0, 0, 0];
  score.forEach((rank) => rankCounts[rank]++);

  Console.print("당첨 내역:");
  Console.print(`3개 일치 (5,000원) - ${rankCounts[5]}개`);
  Console.print(`4개 일치 (50,000원) - ${rankCounts[4]}개`);
  Console.print(`5개 일치 (1,500,000원) - ${rankCounts[3]}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts[2]}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${rankCounts[1]}개`);
  Console.print(`총 당첨금: ${totalPrize}원`);
  Console.print(`총 수익률은 ${yields}%입니다.`);
}
