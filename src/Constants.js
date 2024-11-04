export const MESSAGES = {
    PURCHASE_AMOUNT_INPUT: "구입 금액을 입력해 주세요:",
    WINNING_NUMBERS_INPUT: "당첨 번호를 입력해 주세요:",
    BONUS_NUMBER_INPUT: "보너스 번호를 입력해 주세요:",
    ERROR_INVALID_AMOUNT: "[ERROR] 구입 금액은 1000원 단위의 숫자여야 합니다.",
    ERROR_INVALID_WINNING_NUMBERS: "[ERROR] 당첨 번호는 1부터 45 사이의 숫자 6개여야 합니다.",
    ERROR_INVALID_BONUS_NUMBER_DUPLICATE: "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.",
    ERROR_INVALID_BONUS_NUMBER_RANGE: "[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다."
};

export const PRIZE_AMOUNTS = {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000,
};

export const LOTTO_RULES = {
    NUMBER_RANGE: { MIN: 1, MAX: 45 },
    TICKET_PRICE: 1000,
    NUMBERS_PER_TICKET: 6,
};