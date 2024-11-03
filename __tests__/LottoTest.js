import Errors from '../src/Constants/Errors.js';
import Lotto from '../src/Model/Lotto.js';

// 1. 로또 1장 발행하기

//   - 번호가 6개인지 확인 및 예외처리
//   - 번호가 1~45까지 숫자 범위에 포함되는지 확인 및 예외처리
//   - ➕ 번호 중 숫자가 아닌 경우 확인 및 에러처리
//   - ➕ 번호 중 중복된 숫자가 있는 경우 확인 및 에러처리
//   - 주어진 로또번호를 오름차순으로 정렬

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 하나도 없으면 예외가 발생합니다.', () => {
    expect(() => {
      new Lotto([]);
    }).toThrow(`${Errors.PREFIX} ${Errors.Lotto.IS_WRONG_LENGTH}`);
  });

  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생합니다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(`${Errors.PREFIX} ${Errors.Lotto.IS_WRONG_LENGTH}`);
  });

  test('로또 번호는 모두 숫자로 구성되어야 합니다.', () => {
    expect(() => {
      new Lotto(['a', 2, 3, 'b', 5, 6]);
    }).toThrow(`${Errors.PREFIX} ${Errors.Lotto.NOT_NUMBER_VALUE}`);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생합니다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(`${Errors.PREFIX} ${Errors.Lotto.IS_DUPLICATE_VALUE}`);
  });

  test('로또 번호는 1과 45 사이의 숫자이어야 합니다.', () => {
    expect(() => {
      new Lotto([1, 2, 0, 4, 5, 160]);
    }).toThrow(`${Errors.PREFIX} ${Errors.Lotto.NOT_RANGED_VALUE}`);
  });

  test('로또 번호는 오름차순으로 정렬되어야 합니다.', () => {
    const lotto = new Lotto([45, 5, 4, 3, 1, 2]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 45]);
  });
});
