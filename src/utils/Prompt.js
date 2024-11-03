import { Console } from '@woowacourse/mission-utils';

export async function promptUserInput(message, parser, validator) {
  try {
    const userInput = await Console.readLineAsync(message);
    const parsedInput = parser(userInput);
    validator(parsedInput);
    return parsedInput;
  } catch (error) {
    Console.print(error.message);
    return promptUserInput(message, parser, validator);
  }
}
