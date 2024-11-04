export const MESSAGES = Object.freeze({
  INPUT: {
    PURCHASE_LOTTO_MONEY: "구입금액을 입력해 주세요.\n",
    WIN_NUMBERS: "당첨 번호를 입력해 주세요.\n",
    BOUNS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  },
  OUTPUT: {
    PURCHASE_LOTTO_NUMBER: (n) => `${n}개를 구매했습니다.`,
    WIN_RATE: "당첨 통계\n---",
    WIN_DETAIL_5th: (n) => `3개 일치 (5,000원) - ${n}개`,
    WIN_DETAIL_4th: (n) => `4개 일치 (50,000원) - ${n}개`,
    WIN_DETAIL_3rd: (n) => `5개 일치 (1,500,000원) - ${n}개`,
    WIN_DETAIL_2nd: (n) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${n}개`,
    WIN_DETAIL_1st: (n) => `6개 일치 (2,000,000,000원) - ${n}개`,
    PROFIT_RATE: (profitRate) => `총 수익률은 ${profitRate}%입니다.`,
  },
  ERROR: {
    PREFIX: `[ERROR] `,
    NOT_INT: `정수가 아닌 숫자입니다.\n`,
    SMALL_INT: `정수가 1,000 미만입니다.\n`,
    NOT_UNIT_INT: `입력 받은 수가 1,000 단위가 아닙니다.\n`,
    RANGE_INT: (min, max) =>
      `${min}에서 ${max} 사이의 정수를 입력해야 합니다.\n`,
    LOTTO_PICK_NUM: (pickNum) => `로또 번호는 ${pickNum}개여야 합니다.\n`,
    DUPLICATE_INT: `중복된 숫자가 있습니다.\n`,
  },
});
