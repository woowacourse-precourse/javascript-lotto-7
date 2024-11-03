import { LOTTO_UNIT_PRICE } from "./lotto.js";

export const ERROR_MESSAGE = {
  number: {
    notNumber: "숫자가 아닌 값이 들어왔습니다. 양의 정수를 입력해주세요\n",
  },
  lotto: {
    invalidUnit: `로또 구매 가격이 올바르지 않습니다. ${LOTTO_UNIT_PRICE}단위로 가격을 입력해주세요.\n`,
    invalidCount: "로또 번호는 6개여야 합니다.",
    isDuplicated: "로또 번호는 중복되지 않아야 합니다.",
  },
};
