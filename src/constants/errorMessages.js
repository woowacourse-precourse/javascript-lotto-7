import { LOTTO_UNIT_PRICE } from "./lotto.js";

export const ERROR_MESSAGE = {
  string: {
    notNull: "빈 값은 입력할 수 없습니다. 값을 입력해주세요\n",
  },
  number: {
    notNumber: "숫자가 아닌 값이 들어왔습니다. 양의 정수를 입력해주세요\n",
    notPositive: "음수가 입력이 되었습니다. 양의 정수를 입력해주세요\n",
    notZero: "0은 입력할 수 없습니다. 양의 정수를 입력해주세요\n",
    notInteger: "소수는 입력할 수 없습니다. 양의 정수를 입력해주세요\n",
    tooLarge:
      "너무 큰 수를 입력하셨습니다. 1,000,000 이하의 값을 입력해주세요\n",
  },
  lotto: {
    invalidUnit: `로또 구매 가격이 올바르지 않습니다. ${LOTTO_UNIT_PRICE}단위로 가격을 입력해주세요.\n`,
    invalidCount: "로또 번호는 6개여야 합니다.",
    isDuplicated: "로또 번호는 중복되지 않아야 합니다.",
    tooManyNested:
      "10번 이상 입력을 잘못하셨습니다. 다시 로또를 구매해주세요\n",
    invalidRange: "로또 번호는 1부터 45까지의 숫자여야 합니다.\n",
  },
};
