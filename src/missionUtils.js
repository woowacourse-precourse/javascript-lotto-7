import { Console } from "@woowacourse/mission-utils";

export function userInput(input) {
	return Console.readLineAsync(input);
}

export function printOutput(output) {
	return Console.print(output);
}
