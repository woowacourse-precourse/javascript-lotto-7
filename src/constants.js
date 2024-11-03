const Settings = {
    PRICE_PER_LOTTO: 1000,
    NUMBER_MIN: 1,
    NUMBER_MAX: 45,
    NUMBER_COUNT: 6,
    PRIZE: {
        3: 5000,
        4: 50000,
        5: 1500000,
        5.5: 30000000,
        6: 2000000000
    }
};

const Messages = {
    ERROR: {
        PREFIX: '[ERROR] '
    },
    LOTTO: {
        COUNT: `로또 번호는 ${Settings.NUMBER_COUNT}개여야 합니다.`,
        UNIQUE: '중복된 번호는 입력할 수 없습니다.',
        PRINT: (numbers) => {
            return `[${numbers}]`;
        }
    },
    PURCHASE_AMOUNT: {
        INPUT: '구입금액을 입력해 주세요.\n',
        NAN: '구입 금액은 숫자여야 합니다.',
        LESS_THAN_1: '구입 금액은 1 이상이어야 합니다.',
        PRICE_PER_LOTTO: `구입 금액은 ${Settings.PRICE_PER_LOTTO.toLocaleString()}원 단위여야 합니다.`
    },
    PURCHASE_COUNT: {
        BOUGHT: (purchaseCount) => {
            return `\n${purchaseCount}개를 구매했습니다.`
        }
    },
    WINNING_NUMBERS: {
        INPUT: '\n당첨 번호를 입력해 주세요\n',
        INVALID: '올바른 형식으로 당첨 번호를 입력해 주세요.',
        NAN: '당첨 번호는 숫자여야 합니다.',
        MIN_MAX: `당첨 번호는 ${Settings.NUMBER_MIN}부터 ${Settings.NUMBER_MAX} 사이여야 합니다.`,
        UNIQUE: '중복된 번호는 입력할 수 없습니다.',
        COUNT: `당첨 번호는 ${Settings.NUMBER_COUNT}개를 입력해야 합니다.`
    },
    BONUS_NUMBER: {
        INPUT: '\n보너스 번호를 입력해 주세요\n',
        NAN: '보너스 번호는 숫자여야 합니다.',
        MIN_MAX: `보너스 번호는 ${Settings.NUMBER_MIN}부터 ${Settings.NUMBER_MAX} 사이여야 합니다.`,
        UNIQUE: '보너스 번호는 로또 번호와 중복될 수 없습니다.',
    },
    RESULT: {
        TITLE: '\n당첨 통계\n---',
        COUNT_3: (count) => {
            return `3개 일치 (${Settings.PRIZE[3].toLocaleString()}원) - ${count}개`;
        },
        COUNT_4: (count) => {
            return `4개 일치 (${Settings.PRIZE[4].toLocaleString()}원) - ${count}개`;
        },
        COUNT_5: (count) => {
            return `5개 일치 (${Settings.PRIZE[5].toLocaleString()}원) - ${count}개`;
        },
        COUNT_5_5: (count) => {
            return `5개 일치, 보너스 볼 일치 (${Settings.PRIZE[5.5].toLocaleString()}원) - ${count}개`;
        },
        COUNT_6: (count) => {
            return `6개 일치 (${Settings.PRIZE[6].toLocaleString()}원) - ${count}개`;
        },
        PROFIT_RATE: (profitRate) => {
            return `총 수익률은 ${profitRate}%입니다.`;
        }
    }
};

export {
    Settings,
    Messages
};