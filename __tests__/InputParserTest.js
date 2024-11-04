import InputParser from '../src/input/input-parser.js';
import { LOTTO_PRICE } from '../src/constant/index.js';

describe('InputParser 클래스 테스트', () => {
  test('parsePurchaseAmount: 빈 입력값 처리', () => {
    expect(InputParser.parsePurchaseAmount('')).toBe(null);
  });

  test('parsePurchaseAmount: 유효한 숫자 처리', () => {
    expect(InputParser.parsePurchaseAmount('1000')).toBe(1000);
  });

  test('calculateLottoCount: 유효한 구매 금액 입력 시 로또 수량 계산', () => {
    expect(InputParser.calculateLottoCount(LOTTO_PRICE * 3)).toBe(3);
  });

  test('parseWinningNumber: 유효한 당첨 번호 처리', () => {
    const winningNumbers = '1, 2, 3, 4, 5, 6';
    expect(InputParser.parseWinningNumber(winningNumbers)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('parseWinningNumber: 빈 문자열 처리', () => {
    expect(InputParser.parseWinningNumber('')).toEqual([null]);
  });

  test('parseWinningNumber: 잘못된 숫자 포함 시 처리', () => {
    const winningNumbers = '1, a, 3, 4, 5, 6';
    expect(InputParser.parseWinningNumber(winningNumbers)).toEqual([1, NaN, 3, 4, 5, 6]);
  });

  test('parseBonusNumber: 빈 문자열 처리', () => {
    expect(InputParser.parseBonusNumber('')).toBe(null);
  });

  test('parseBonusNumber: 유효한 숫자 처리', () => {
    expect(InputParser.parseBonusNumber('7')).toBe(7);
  });
});
