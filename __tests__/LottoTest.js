import Lotto from '../src/Model/Lotto.js';
import { ERROR_MSG } from '../src/constants/constants.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MSG.invalidNumberCount);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MSG.duplicateNumber);
  });

  test('로또 번호가 입력 가능한 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow(ERROR_MSG.outOfLottoRange);
  });

  test('입력 받은 로또 번호를 오름 차순으로 정렬된 배열형식으로 전달한다.', () => {
    const lotto = new Lotto([6, 5, 4, 3, 1, 2]);
    const OUTPUT = [1, 2, 3, 4, 5, 6];

    expect(lotto.getNumbers()).toEqual(OUTPUT);
  });
});
