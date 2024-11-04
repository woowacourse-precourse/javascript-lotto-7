export function makeError(message) {
  throw new Error(`[ERROR] ${message}`);
}

export const ERROR_MESSAGE = {
  NEED_INPUT: '값을 입력해주세요.',
  NEED_COMMA: '당첨 번호 숫자는 , 기준으로 구분되어야 합니다.',
  PURCHASE_MONEY_ERROR_TYPE:
    '숫자 혹은 천 단위 구분자를 사용해 금액을 입력해주세요. \n 예시 ) 1000 혹은 1,000',
  PURCHASE_MONEY_ERROR_DEVIDE:
    '1000원으로 나눠 떨어지는 금액으로 입력해주세요.',
  PURCHASE_MONEY_ERROR_COMMA:
    '금액의 구분 쉼표가 제대로 된 위치인지 확인해주세요.',
  WINNING_NUMBER_TYPE: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  WINNING_NUMBER_COMMA:
    '당첨 번호 입력란에 , 사이에 숫자를 입력했는지 확인해주세요.',
  WINNING_NUMBER_LENGTH: '로또 번호는 6개여야 합니다.',
  WINNING_NUMBER_DUPLICATION: '로또 번호는 각각 다른 숫자여야합니다.',
  BONUS_NUMBER_DUPLICATION: ' 보너스 숫자는 당첨 숫자와 달라야 합니다.',
};
