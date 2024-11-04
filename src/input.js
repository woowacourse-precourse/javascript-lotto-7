import { Console } from '@woowacourse/mission-utils';

export const prompt = async (message, validation, rest) => {
  const input = await Console.readLineAsync(message);
  if (validation(input, rest)) {
    return input;
  }
  return prompt(message, validation, rest);
};
