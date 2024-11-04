import { Bonus } from '../src/Bonus.js';
import { ERROR } from '../src/constant.js';

describe('Bonus 클래스 테스트', () => {
  const validLottoNumbers = [1, 2, 3, 4, 5, 6];

  test('1부터 45 사이의 숫자가 아닐 경우 예외가 발생한다', () => {
    expect(() => {
      new Bonus(0, validLottoNumbers);
    }).toThrow(ERROR.message);

    expect(() => {
      new Bonus(46, validLottoNumbers);
    }).toThrow(ERROR.message);

    expect(() => {
      new Bonus(-1, validLottoNumbers);
    }).toThrow(ERROR.message);
  });

  test('숫자가 아닌 값이 입력될 경우 예외가 발생한다', () => {
    expect(() => {
      new Bonus(NaN, validLottoNumbers);
    }).toThrow(ERROR.message);
  });

  test('당첨 번호와 중복되는 경우 예외가 발생한다', () => {
    expect(() => {
      new Bonus(1, validLottoNumbers);
    }).toThrow(ERROR.message);
  });

  test('유효한 보너스 번호는 예외가 발생하지 않는다', () => {
    expect(() => {
      new Bonus(7, validLottoNumbers);
    }).not.toThrow(ERROR.message);
  });
});
