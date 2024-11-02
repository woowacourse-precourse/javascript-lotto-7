import { MissionUtils } from "@woowacourse/mission-utils";

export class ExceptionHandler {
  ERROR_PREFIX = '[ERROR] ';

  async printError(error) {
    await MissionUtils.Console.print(this.ERROR_PREFIX + error.message)
  }
}
