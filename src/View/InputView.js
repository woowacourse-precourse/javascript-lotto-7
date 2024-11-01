import { Console } from '@woowacourse/mission-utils';

/**
 * 사용자로부터 입력을 비동기적으로 받습니다.
 *
 * @function getInput
 * @param {string} promptMessage - 사용자에게 표시할 입력 요청 메시지입니다.
 * @returns {Promise<string>} 입력된 문자열을 반환하는 Promise입니다.
 * @example
 * getInput('이름을 입력하세요:').then((input) => {
 *   console.log(input);
 * });
 */
export default async function getInputWhileValid(validator, promptMessage) {
  const input = await Console.readLineAsync(promptMessage);
  const validInput = validator(input);

  if (validInput) {
    return validInput;
  }
  return this.getInputWhileValid(validator, promptMessage);
}
