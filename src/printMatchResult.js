import { Console } from "@woowacourse/mission-utils";

const printMatchResult = (matchCountList) => {
  Console.print("\n당첨 통계");
  Console.print("---");
  Console.print(`3개 일치 (5,000원) - ${matchCountList[3].count}개`);
  Console.print(`4개 일치 (50,000원) - ${matchCountList[4].count}개`);
  Console.print(`5개 일치 (1,500,000원) - ${matchCountList[5].count}개`);
  Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCountList[5].isBonusMatchCount}개`
  );
  Console.print(`6개 일치 (2,000,000,000원) - ${matchCountList[6].count}개`);
};

export default printMatchResult;
