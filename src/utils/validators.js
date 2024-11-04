import { ERROR_MESSAGES } from '../config/errors.js'; // 에러 메시지 상수 가져오기

// 구매 금액 입력 처리
// - 1,000원 단위로 나누어 떨어지지 않는 경우 예외 처리
export const validateAmount = (amount) => {
  if (!Number.isInteger(amount) || amount < 1000 || amount % 1000 !== 0) {
    // 1,000원 단위로 나누어 떨어지지 않는 경우 예외 처리
    throw new Error(ERROR_MESSAGES.INVALID_AMOUNT);
  }
};

//  당첨 번호 입력 처리
// - 중복되지 않는 숫자 6개 입력
// - 범위: 1 ~ 45
export const validateNumbers = (numbers) => {
  if (numbers.length !== 6 || numbers.some((num) => num < 1 || num > 45)) {
    // 숫자 6개가 아닌 경우 또는 범위 1 ~ 45를 벗어나는 숫자가 있는 경우 예외 처리
    throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);
  }
};
