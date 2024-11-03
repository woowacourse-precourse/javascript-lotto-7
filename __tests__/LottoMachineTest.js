import { Random } from '@woowacourse/mission-utils';
import LOTTO_MACHINE from '../src/LottoMachine.js';
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

describe('로또 번호 생성 기능 검사', () => {
  test('중복되지 않는 번호로 생성', () => {
    const ticket = new LOTTO_MACHINE().drawSingleLottoTicket();
    expect(
      new Set(ticket.getNumbers()).size === ticket.getNumbers().length
    ).toBeTruthy();
  });

  test('6개의 번호로 생성', () => {
    const ticket = new LOTTO_MACHINE().drawSingleLottoTicket();
    expect(ticket.getNumbers()).toHaveLength(6);
  });

  test('오름차순으로 생성', () => {
    const numbers = [6, 5, 4, 1, 3, 2];
    mockRandoms([numbers]);

    const ticket = new LOTTO_MACHINE().drawSingleLottoTicket();

    expect(ticket.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('당첨 내역 계산 기능 검사', () => {
  const lottomachine = new LOTTO_MACHINE();

  lottomachine.setWinningNumbers('1,2,3,4,5,6');
  lottomachine.setBonusNumber(7);

  test('1등 당첨', () => {
    const tickets = [new Lotto([1, 2, 3, 4, 5, 6])];
    const results = { 0: 0, 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 };

    expect(lottomachine.calculateWinningResult(tickets)).toEqual(results);
  });

  test('2등 당첨', () => {
    const tickets = [new Lotto([1, 2, 3, 4, 5, 7])];
    const results = { 0: 0, 1: 0, 2: 1, 3: 0, 4: 0, 5: 0 };

    expect(lottomachine.calculateWinningResult(tickets)).toEqual(results);
  });

  test('3등 당첨', () => {
    const tickets = [new Lotto([1, 2, 3, 4, 5, 8])];
    const results = { 0: 0, 1: 0, 2: 0, 3: 1, 4: 0, 5: 0 };

    expect(lottomachine.calculateWinningResult(tickets)).toEqual(results);
  });

  test('4등 당첨', () => {
    const tickets = [new Lotto([1, 2, 3, 4, 8, 9])];
    const results = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 1, 5: 0 };

    expect(lottomachine.calculateWinningResult(tickets)).toEqual(results);
  });

  test('5등 당첨', () => {
    const tickets = [new Lotto([1, 2, 3, 8, 9, 10])];
    const results = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 };

    expect(lottomachine.calculateWinningResult(tickets)).toEqual(results);
  });

  test('꽝 당첨', () => {
    const tickets = [new Lotto([7, 8, 9, 10, 11, 12])];
    const results = { 0: 1, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    expect(lottomachine.calculateWinningResult(tickets)).toEqual(results);
  });

  test('두 개 등수 동시 당첨', () => {
    const tickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
    ];
    const results = { 0: 0, 1: 1, 2: 1, 3: 0, 4: 0, 5: 0 };

    expect(lottomachine.calculateWinningResult(tickets)).toEqual(results);
  });

  test('여섯 개 등수 동시 당첨', () => {
    const tickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 8]),
      new Lotto([1, 2, 3, 4, 8, 9]),
      new Lotto([1, 2, 3, 8, 9, 10]),
      new Lotto([7, 8, 9, 10, 11, 12]),
    ];
    const results = { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 };

    expect(lottomachine.calculateWinningResult(tickets)).toEqual(results);
  });
});

describe('총 수익률 계산 기능 검사', () => {
  const lottomachine = new LOTTO_MACHINE();

  test('총 수익률이 자연수', () => {
    const money = 10000;
    const results = { 0: 0, 1: 10, 2: 0, 3: 0, 4: 0, 5: 0 };
    expect(lottomachine.calculateTotalReturn(money, results)).toEqual(
      200000000
    );
  });

  test('총 수익률이 소수점 두 자리 수 이상', () => {
    const money = 8000;
    const results = { 0: 7, 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 };
    expect(lottomachine.calculateTotalReturn(money, results)).toEqual(62.5);
  });

  test('총 수익률이 0', () => {
    const money = 1000;
    const results = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    expect(lottomachine.calculateTotalReturn(money, results)).toEqual(0);
  });
});
