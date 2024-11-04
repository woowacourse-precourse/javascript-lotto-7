import { MissionUtils } from "@woowacourse/mission-utils";

export function printResult(counts) {
  MissionUtils.Console.print(`3개 일치 (5,000원) - ${counts[3]}개`);
  MissionUtils.Console.print(`4개 일치 (50,000원) - ${counts[4]}개`);
  MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${counts[5]}개`);
  MissionUtils.Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${counts["5_bonus"]}개`
  );
  MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${counts[6]}개`);
}
