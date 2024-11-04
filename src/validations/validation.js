import { ERROR_MESSAGES } from '../constants/errorMessage.js';

const validation = {
  numericString(value) {
    // Number() 변환 시 NaN, 음수, 소수, 지수 표현 문제 사전 방지
    if (!/^[0-9]+$/.test(value)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
  },
  safeInteger(value) {
    if (!Number.isSafeInteger(value)) {
      throw new Error(ERROR_MESSAGES.SAFE_INTEGER);
    }
  },
  integer(value) {
    this.numericString(value);
    this.safeInteger(Number(value));
  },
};

export default validation;
