export const CONSOLE_MESSAGE = {
    INPUT_AMOUNT: "구입금액을 입력해 주세요.\n",
    INPUT_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
    INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
    STATISTICS: "\n당첨 통계\n---\n",
    OUTPUT_LOTTO_COUNT: "개를 구매했습니다.\n"
};

export const formatErrorMessage = (error) => `[ERROR] ${error}`;
export const ERROR_MESSAGE =  {
    NOT_INTEGER: "숫자로 입력해주세요.",
    IS_BLANK: "공백은 입력할 수 없습니다.",
    NEGATIVE_AMOUNT: "양수를 입력해주세요.",
    NOT_THOUSAND_UNIT: "1,000원 단위로 입력해주세요.",
    MINIMUM_AMOUNT: "최소 주문 금액은 1,000원입니다.",
};

export const WINNING_CRITERIA = {
    1: { price: 2000000000, message: "6개 일치 (2,000,000,000원)" },
    2: { price: 30000000, message: "5개 일치, 보너스 볼 일치 (30,000,000원)" },
    3: { price: 1500000, message: "5개 일치 (1,500,000원)" },
    4: { price: 50000, message: "4개 일치 (50,000원)" },
    5: { price: 5000, message: "3개 일치 (5,000원)" },
};
