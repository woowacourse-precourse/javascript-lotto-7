import { ticketCount } from '../src/utils/Calculation.js';

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
