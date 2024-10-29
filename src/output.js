import { MissionUtils } from "@woowacourse/mission-utils";

class DisplayOutput {
    
    async displayPaidLotto(number) {
        MissionUtils.Console.print(`${number}개를 구입했습니다.`)
      }

}

const test = new DisplayOutput();
test.displayPaidLotto(2)