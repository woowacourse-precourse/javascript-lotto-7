import { Console } from '@woowacourse/mission-utils';

export default async function getInputWhileValid(validator, promptMessage) {
  const input = await Console.readLineAsync(promptMessage);
  const validInput = validator(input);

  if (validInput) {
    return validInput;
  }
  return getInputWhileValid(validator, promptMessage);
}
