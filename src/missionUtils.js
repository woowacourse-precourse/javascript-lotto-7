import { Console, Random } from "@woowacourse/mission-utils";

export function userInput(input) {
	return Console.readLineAsync(input);
}

export function printOutput(output) {
	return Console.print(output);
}

export function randomNumbersInRange(min, max, count) {
	return Random.pickUniqueNumbersInRange(min, max, count);
}
