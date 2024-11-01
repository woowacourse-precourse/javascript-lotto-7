import { Console } from '@woowacourse/mission-utils';
/**
 * 메시지를 콘솔에 출력합니다.
 *
 * @function printMessage
 * @param {string} message - 출력할 메시지입니다.
 * @example
 * printMessage('안녕하세요!');
 */
export function printMessage(message) {
  Console.print(message);
}

/**
 * 각 자동차의 현재 위치를 콘솔에 출력합니다.
 *
 * @function printCarPositions
 * @param {Array<Object>} cars - 위치를 출력할 자동차 객체 배열입니다.
 *                               각 자동차 객체는 `toString()` 메서드를 구현해야 합니다.
 * @example
 * printCarPositions([car1, car2]);
 * // car1과 car2의 위치가  형태로 출력됩니다.
 */

/**
 * 우승자 목록을 콘솔에 출력합니다.
 *
 * @function printWinners
 * @param {Array<string>} winners - 우승자들의 이름을 포함하는 문자열 배열입니다.
 * @example
 * printWinners(['pobi', 'woni']);
 * // "최종 우승자 : pobi, woni"가 콘솔에 출력됩니다.
 */
export function printResult(winners) {
  const winnerMessage = `최종 우승자 : ${winners.join(', ')}`;
  printMessage(winnerMessage);
}
