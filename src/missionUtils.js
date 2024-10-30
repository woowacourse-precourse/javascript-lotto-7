import { MissionUtils } from "@woowacourse/mission-utils";

export function userInput(input) {
	return MissionUtils.Console.readLineAsync(input);
}
