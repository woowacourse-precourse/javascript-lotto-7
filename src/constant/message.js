import { LOTTO_PRICE, SPLIT_CHAR } from "./constants.js";

export const viewMessages = {
  price: '구입금액을 입력해주세요.\n',
  winning: '\n당첨 번호를 입력해 주세요.\n',
  bonus: '\n보너스 번호를 입력해 주세요.\n',
  count: '개를 구매했습니다.',
};

export const inValidMessages = {
  NaN: '숫자를 입력해주세요.\n',
  empty: '공백 입력은 불가합니다.\n',
  priceUnit: `구입 금액은 ${LOTTO_PRICE}원 단위로 입력해주세요.\n`,
  separator: `당첨 번호를 쉼표(${SPLIT_CHAR})로 구분해서 입력해주세요.`
}
