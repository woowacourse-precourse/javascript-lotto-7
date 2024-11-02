import { Random } from '@woowacourse/mission-utils';
import LOTTO_MACHINE from '../src/Domain/LottoMachine.js';
import Lotto from '../src/Lotto.js';

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

describe('당첨 번호 유효성 검사', () => {
  test('당첨 번호의 구분자가 올바르지 않을 시 예외 발생', () => {
    const input = '1.2.3.4.5.6';
    expect(() => new LOTTO_MACHINE().setWinningNumbers(input)).toThrow(
      `[ERROR] ,(쉼표)로 구분해 주십시오.`
    );
  });

  test('당첨 번호에 문자가 있을 시 예외 발생', () => {
    const input = '1,r,3,4,5,6';
    expect(() => new LOTTO_MACHINE().setWinningNumbers(input)).toThrow(
      `[ERROR] 숫자를 입력해 주십시오.`
    );
  });

  test('당첨 번호 중 범위를 벗어난 숫자가 있을 시 예외 발생', () => {
    const input = '1,2,3,4,56,6';
    expect(() => new LOTTO_MACHINE().setWinningNumbers(input)).toThrow(
      `[ERROR] 1 ~ 45 사이의 숫자를 입력해 주십시오`
    );
  });

  test('당첨 번호 중 중복 숫자가 있을 시 예외 발생', () => {
    const input = '1,2,3,4,6,6';
    expect(() => new LOTTO_MACHINE().setWinningNumbers(input)).toThrow(
      `[ERROR] 중복된 값이 있습니다.`
    );
  });
});
