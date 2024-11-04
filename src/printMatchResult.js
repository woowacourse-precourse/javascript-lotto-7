import { Console } from "@woowacourse/mission-utils";

const printMatchResult = (matchCountList) => {
  Console.print("\n당첨 통계");
  Console.print("---");

  Object.keys(matchCountList).forEach((matchCount) => {
    const { count, winning, isBonusMatchCount, isBonusMatchWinning } =
      matchCountList[matchCount];

    Console.print(
      `${matchCount}개 일치 (${winning.toLocaleString()}원) - ${count}개`
    );
    if (matchCount == 5)
      Console.print(
        `${matchCount}개 일치, 보너스 볼 일치 (${isBonusMatchWinning.toLocaleString()}원) - ${isBonusMatchCount}개`
      );
  });
};

export default printMatchResult;
