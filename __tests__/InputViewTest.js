import InputView from '../src/views/InputView.js';
import { validateAmount, validateNumbers } from '../src/utils/validators.js';
import { ERROR_MESSAGES } from '../src/config/errors.js';

describe('InputView 유효성 검사 테스트', () => {
  // 테스트 케이스 1: 정상적인 구입 금액을 검증하는 테스트
  test('유효한 구입 금액 검사', () => {
    // 구입 금액이 1000원일 때 예외가 발생하지 않아야 함.
    expect(() => validateAmount(1000)).not.toThrow();// `validateAmount` 함수 호출 시 에러가 없어야 함.
  });
  // 테스트 케이스 2: 1,000원 단위가 아닌 경우 예외가 발생하는지 확인하는 테스트
  test('1,000원 단위가 아닌 경우 예외 발생', () => {
    // 1500원은 1,000원 단위가 아니므로 예외가 발생해야 함.
    expect(() => validateAmount(1500)).toThrow(ERROR_MESSAGES.INVALID_AMOUNT);// `validateAmount` 함수가 에러를 던져야 함.
  });
  // 테스트 케이스 3: 유효한 당첨 번호를 검증하는 테스트
  test('당첨 번호 유효성 검사', () => {
    // 1부터 45 사이의 숫자 6개로 이루어진 배열이 전달되었을 때 예외가 발생하지 않아야 함.
    expect(() => validateNumbers([1, 2, 3, 4, 5, 6])).not.toThrow();// `validateNumbers` 함수 호출 시 에러가 없어야 함.
  });
   // 테스트 케이스 4: 범위를 벗어난 당첨 번호가 있는 경우 예외 발생 여부 확인
  test('범위를 벗어난 당첨 번호 예외 발생', () => {
    // 배열에 0이나 46과 같은 범위를 벗어난 숫자가 포함되어 있으면 예외가 발생해야 함.
    expect(() => validateNumbers([0, 2, 3, 4, 5, 46])).toThrow(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);// `validateNumbers` 함수가 에러를 던져야 함
  });
});
