import { Console } from '@woowacourse/mission-utils';


export async function input(message) {
  const inputValue = await Console.readLineAsync(message);
  return inputValue;
}


export function output(message) {
  return Console.print(message);
}