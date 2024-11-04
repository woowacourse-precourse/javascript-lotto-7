import { ROI, ticketCount } from '../src/utils/Calculation.js';

describe('로또 구매 개수(ticketCount) 함수 테스트', () => {
  test('5000원을 입력하면 5개의 티켓 수를 반환해야 한다', () => {
    expect(ticketCount(5000)).toBe(5);
  });

  test('10000원을 입력하면 10개의 티켓 수를 반환해야 한다', () => {
    expect(ticketCount(10000)).toBe(10);
  });

  test('1000원을 입력하면 1개의 티켓 수를 반환해야 한다', () => {
    expect(ticketCount(1000)).toBe(1);
  });
});

describe('수익률 계산(ROI) 함수 테스트', () => {
  test('8000원의 비용에 50000원의 수익이 나면 625.0을 반환해야 한다', () => {
    expect(ROI(50000, 8000)).toBe('625.0');
  });

  test('10000원의 비용에 1500000원의 수익이 나면 150000.0을 반환해야 한다', () => {
    expect(ROI(1500000, 10000)).toBe('15000.0');
  });

  test('20000원의 비용에 5000원의 수익이 나면 25.0을 반환해야 한다', () => {
    expect(ROI(5000, 20000)).toBe('25.0');
  });
});
