import checkWinning from '../src/Utils/checkWinning.js';

// - 4. 로또 당첨 여부 확인

//   - 당첨번호(+보너스번호)가 주어졌을 때 로또 번호와 비교해 몇 등인지 판단

describe('당첨 체크 함수 테스트', () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  test.each([
    [[7, 8, 9, 10, 11, 12], 13, 'miss'],
    [[1, 8, 9, 10, 11, 12], 13, 'miss'],
    [[1, 2, 9, 10, 11, 12], 13, 'miss'],
    [[1, 2, 3, 10, 11, 12], 13, 'fifth'],
    [[1, 2, 3, 4, 11, 12], 13, 'fourth'],
    [[1, 2, 3, 4, 5, 12], 13, 'third'],
    [[1, 2, 3, 4, 5, 12], 6, 'second'],
    [[1, 2, 3, 4, 5, 6], 13, 'first'],
  ])(
    '번호가 %s, 보너스번호가 %s면 %s입니다.',
    (basicNumbers, bonusNumber, expected) => {
      expect(checkWinning(numbers, basicNumbers, bonusNumber)).toBe(expected);
    }
  );
});
