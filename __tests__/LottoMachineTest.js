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

describe('보너스 번호 유효성 검사', () => {
  test('보너스 번호가 숫자가 아닐 시 예외 발생', () => {
    const input = 'a';
    expect(() => new LOTTO_MACHINE().setBonusNumber(Number(input))).toThrow(
      `[ERROR] 숫자를 입력해 주십시오.`
    );
  });

  test('보너스 번호가 범위를 벗어날 시 예외 발생', () => {
    const input = '56';
    expect(() => new LOTTO_MACHINE().setBonusNumber(Number(input))).toThrow(
      `[ERROR] 1 ~ 45 사이의 숫자를 입력해 주십시오`
    );
  });

  test('보너스 번호가 당첨 번호와 중복일 시 예외 발생', () => {
    const input = '6';

    const lottomachine = new LOTTO_MACHINE();
    lottomachine.setWinningNumbers('1,2,3,4,5,6');

    expect(() => lottomachine.setBonusNumber(Number(input))).toThrow(
      `[ERROR] 당첨 번호와 중복된 값이 있습니다.`
    );
  });
});

describe('금액별 구입 기능 검사', () => {
  test('1000원 입력 시 1장 구매', () => {
    const money = 1000;
    expect(new LOTTO_MACHINE().purchaseLottoTickets(money)).toHaveLength(1);
  });

  test('5000원 입력 시 5장 구매', () => {
    const money = 5000;
    expect(new LOTTO_MACHINE().purchaseLottoTickets(money)).toHaveLength(5);
  });
});
