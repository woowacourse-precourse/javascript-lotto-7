import { LOTTO_PRICE } from "./constants.js";

export const viewMessages = {
  price: '구입금액을 입력해주세요.\n'
};

export const inValidMessages = {
  NaN: '숫자를 입력해주세요.\n',
  priceUnit: `구입 금액은 ${LOTTO_PRICE}원 단위로 입력해주세요.\n`,
}
