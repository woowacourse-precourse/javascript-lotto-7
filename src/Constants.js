const MESSAGES = Object.freeze({
    INPUT: {
        ASK_USER_MONEY: '구입 금액을 입력해 주세요.\n',
        ASK_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
        ASK_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
    },
    OUTPUT: {
        MATCH_RESULT_BELOW: "\n당첨 통계\n---",
        MATCH_THREE:"3개 일치 (5,000원)",
        MATCH_FOUR:"4개 일치 (50,000원)",
        MATCH_FIVE:"5개 일치 (1,500,000원)",
        MATCH_FIVE_PLUS_BONUS:"5개 일치, 보너스 볼 일치 (30,000,000원)",
        MATCH_SIX: "6개 일치 (2,000,000,000원)"
        
    },
    ERROR: {
        NOT_A_NUMBER: '[ERROR] 숫자만 입력해 주세요!',
        EMPTY_INPUT: '[ERROR] 입력 값이 없어요!',
        NEGATIVE_AMOUNT: '[ERROR] 자연수만 입력해 주세요!',
        MONEY_NOT_DIVISIBLE_BY_THOUSAND: '[ERROR] 구입 금액은 1000원 단위로 입력해 주세요!',
        CANNOT_BUY_OVER_LIMIT: '[ERROR] 한 번에 10만원까지만 구입할 수 있어요!',
        NUMBER_OUT_OF_RANGE: '[ERROR] 1~45 범위 안의 숫자를 입력해 주세요!',
        HAS_DUPLICATES: '[ERROR] 중복된 숫자를 입력했어요!',
        NOT_SIX_NUMBERS: '[ERROR] 6개의 숫자를 입력해 주세요! 쉼표(,)로 구분.',
        BONUS_NUMBER_IN_WINNING_NUMBERS: '[ERROR] 보너스 번호가 당첨 번호 중 하나와 중복돼요!',
    },
});

const LOTTERY = Object.freeze({
    PRICE: 1000,
    BUY_LIMIT: 100000,
    MIN_NUMBER: 1,
    MAX_NUMBER: 45,
    FIRST_PRIZE: 2000000000,
    SECOND_PRIZE: 30000000,
    THIRD_PRIZE: 1500000,
    FOURTH_PRIZE: 50000,
    FIFTH_PRIZE: 5000,
});

export { MESSAGES, LOTTERY };