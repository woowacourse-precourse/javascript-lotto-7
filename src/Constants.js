const MESSAGES = Object.freeze({
    INPUT: {
        ASK_USER_MONEY: '구입 금액을 입력해주세요.\n',
    },
    ERROR: {
        NOT_A_NUMBER: '[ERROR] 숫자만 입력해주세요!',
        EMPTY_INPUT: '[ERROR] 입력 값이 없어요!',
        NEGATIVE_AMOUNT: '[ERROR] 자연수로 입력해주세요!',
        MONEY_NOT_DIVISIBLE_BY_THOUSAND: '[ERROR] 구입 금액은 1000원 단위로 입력해주세요!',
        CANNOT_BUY_OVER_LIMIT: '[ERROR] 한 번에 10만원까지만 구입할 수 있어요! '
    },
});

const DIVISORS = Object.freeze({
    MONEY: 1000,
    // 당첨 번호 목록 길이가 6으로 나누어떨어지고 몫이 2보다 작을 때?
});

const LIMITS = Object.freeze({
    BUY: 100000,
});

export { MESSAGES, DIVISORS, LIMITS };