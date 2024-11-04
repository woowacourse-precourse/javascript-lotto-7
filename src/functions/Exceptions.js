import { Console } from '@woowacourse/mission-utils';

// ! 예외 처리
export const throughErrorMessage = (message) => {
  throw new Error(`[ERROR] ${message}`);
};

export const checkInputSymbolOtherThanComma = (lottoPrizeNumbersInput) => {
  const pattern = /[^,ㄱ-ㅎㅏ-ㅣ가-힣\w\s]/g; // ,제외한 특수기호 모두 검색
  const result = pattern.test(lottoPrizeNumbersInput);

  if (result) {
    throw new Error('[ERROR] 콤마로 값을 구분할 수 있습니다.');
  }
  return;
};

export const checkLottoBuyMoneyInput = (lottoBuyMoneyInput) => {
  if (isNaN(lottoBuyMoneyInput)) {
    throw new Error('[ERROR] 구입 금액은 숫자로 입력해주세요.');
  }

  if (lottoBuyMoneyInput % 1000 > 0) {
    throw new Error('[ERROR] 구입 금액은 1000원 단위로 입력해주세요.');
  }

  return;
};

export const checkLootoBounsNumber = (lottoBounsNumber) => {
  if (isNaN(lottoBounsNumber)) {
    throw new Error('[ERROR] 숫자로 입력해주세요.');
  }
};
