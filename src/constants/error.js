const ERROR_MESSAGE = {
    MONEY: {
        NOT_A_NUMBER: '[ERROR] 구입 금액은 숫자여야 합니다.',
        ZERO: '[ERROR] 1,000원이상 입력해주세요.',
        INVALID_MONEY: '[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.',
        EXCEED_MONEY: '[ERROR] 구입 금액은 10억원이하여야 합니다.',
    },
    NUMBER: {
        INVALID_LENGTH: '[ERROR] 당첨 번호는 6개여야 합니다.',
        NOT_A_NUMBER: '[ERROR] 당첨 번호는 숫자여야 합니다.',
        INVALID_RANGE: '[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.',
        DUPLICATE_NUMBER: '[ERROR] 당첨 번호에 중복된 숫자가 있습니다.',
    },
};

export default ERROR_MESSAGE;
