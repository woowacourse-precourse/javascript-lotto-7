import Calculator from '../src/model/Calculator.js';
import { LOTTO_PRICE, LOTTO_PRIZE_LIST } from '../src/Constants.js';

describe('계산기 클래스 테스트', () => {
  const rank = 0;
  const mockedLottoList = [{ rank }, { rank }, { rank }];
  const mockedGame = { rankFinder: (lotto) => lotto.rank };
  const money = LOTTO_PRICE * mockedLottoList.length;
  const totalPrizeMoney = LOTTO_PRIZE_LIST[rank].cash * mockedLottoList.length;
  const expectedTotalProfitRate = (totalPrizeMoney / money) * 100;

  test('당첨 횟수 계산 시 올바른 값을 도출한다.', () => {
    const calc = new Calculator(mockedGame, mockedLottoList);

    const winningCountList = calc.computeWinningCountList();

    expect(winningCountList[rank]).toBe(mockedLottoList.length);
  });

  test('총 수익률 계산 시 올바른 값을 도출한다.', () => {
    const calc = new Calculator(mockedGame, mockedLottoList);

    const totalProfitRate = calc.computeTotalProfitRate(money);

    expect(totalProfitRate).toBe(expectedTotalProfitRate);
  });

  test('프린터 함수와 함께 호출 시 프린터 함수는 계산 1회당 1회씩 실행된다.', () => {
    const mockedPrinter = jest.fn();

    const calc = new Calculator(mockedGame, mockedLottoList);

    calc.computeWinningCountList(mockedPrinter);
    calc.computeTotalProfitRate(money, mockedPrinter);

    expect(mockedPrinter).toHaveBeenCalledTimes(2);
  });
});
