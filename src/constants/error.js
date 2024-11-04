import LOTTO_CONFIG from './lotto.js';

const ERROR = {
    MONEY: {
        NOT_A_NUMBER: '[ERROR] 구입 금액은 자연수이어야 합니다.',
        INVALID_MONEY: `[ERROR] 구입 금액은 ${LOTTO_CONFIG.PRICE_UNIT}원 단위로 입력해야 합니다.`,
        EXCEED_MONEY: '[ERROR] 구입 금액은 10억원이하여야 합니다.',
    },
    NUMBER: {
        INVALID_LENGTH: `[ERROR] 당첨 번호는 ${LOTTO_CONFIG.LENGTH}개여야 합니다.`,
        INVALID_RANGE: `[ERROR] 당첨 번호는 ${LOTTO_CONFIG.MIN_NUM}부터 ${LOTTO_CONFIG.MAX_NUM} 사이의 숫자여야 합니다.`,
        NOT_A_NUMBER: '[ERROR] 당첨 번호는 자연수이어야 합니다.',
        DUPLICATE_NUMBER: '[ERROR] 당첨 번호에 중복된 숫자가 있습니다.',
    },
    LOTTO: {
        INVALID_LENGTH: `[ERROR] 로또 번호는 ${LOTTO_CONFIG.LENGTH}개여야 합니다.`,
        INVALID_RANGE: `[ERROR] 로또 번호는 ${LOTTO_CONFIG.MIN_NUM}부터 ${LOTTO_CONFIG.MAX_NUM} 사이의 숫자여야 합니다.`,
        NOT_A_ARRAY: '[ERROR] 로또 번호는 배열이어야 합니다.',
        DUPLICATE_NUMBER: '[ERROR] 로또 번호는 중복될 수 없습니다.',
    },
};

export default ERROR;
