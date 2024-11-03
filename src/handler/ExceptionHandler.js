import { MissionUtils } from "@woowacourse/mission-utils";

export class ExceptionHandler {
  async printError(error) {
    await MissionUtils.Console.print(error.message)
  }
}
