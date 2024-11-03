import LottoGame from '../src/model/LottoGame.js';
import { ERROR_PREFIX } from '../src/Constants.js';

describe('로또 게임 클래스 테스트', () => {
  test.each([
    [
      '당첨 번호의 개수가 6개가 아닐 시 예외가 발생한다.',
      [
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5],
        [1, 2],
      ],
    ],
    [
      '당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.',
      [
        [1, 2, 3, 4, 5, 5],
        [1, 2, 3, 4, 5, 1],
      ],
    ],
    [
      '당첨 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.',
      [
        [1, 2, 3, 4, 'as', 6],
        [1, 2, 3, 4, true, false],
        [1, 2, 3, 4, {}, 6],
      ],
    ],
    [
      '당첨 번호에 범위 밖의 숫자가 있으면 예외가 발생한다.',
      [
        [1, 2, 0, 4, 5, 6],
        [1, 2, 3, 48, 5, 6],
        [1, 2, 3, 4, Infinity, 6],
        [1, 2, 3, 4, -Infinity, 6],
      ],
    ],
  ])('%s', (_, testNumbers) => {
    const bonusNumber = 8;

    testNumbers.forEach((numbers) => {
      expect(() => new LottoGame(numbers, bonusNumber)).toThrow(ERROR_PREFIX);
    });
  });
  test.each([
    [
      '보너스 번호가 숫자가 아닐 경우 예외가 발생한다.',
      ['test', true, false, {}, undefined, null],
    ],
    [
      '보너스 번호가 정수가 아닐 경우 예외가 발생한다.',
      [1.23, 12.454, 23.54124],
    ],
    [
      '보너스 번호가 1에서 45사이가 아닐 경우 예외가 발생한다.',
      [0, 46, -Infinity, Infinity],
    ],
    [
      '보너스 번호가 당첨 번호에 포함된 경우 예외가 발생한다.',
      [1, 2, 3, 4, 5, 6],
    ],
  ])('%s', (_, testInputs) => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    testInputs.forEach((input) => {
      expect(() => new LottoGame(winningNumbers, input)).toThrow(ERROR_PREFIX);
    });
  });
});
