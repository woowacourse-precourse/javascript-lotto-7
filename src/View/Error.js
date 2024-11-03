export function makeError(message) {
  throw new Error(`[ERROR]: ${message}`);
}

export const ERROR_MESSAGE = {
  PURCHASE_MONEY_ERROR_TYPE:
    '숫자 혹은 천 단위 구분자를 사용해 금액을 입력해주세요. \n 예시 ) 1000 혹은 1,000',
  PURCHASE_MONEY_ERROR_DEVIDE:
    '1000원으로 나눠 떨어지는 금액으로 입력해주세요.',
  PURCHASE_MONEY_ERROR_COMMA:
    '금액의 구분 쉼표가 제대로 된 위치인지 확인해주세요.',
};
