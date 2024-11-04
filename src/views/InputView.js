import { Console } from '@woowacourse/mission-utils';

export async function InputView(inputConst) {
  const input = await Console.readLineAsync(inputConst);
  return input;
}
