const LOTTO_CONFIG = {
    MIN_NUM: 1,
    MAX_NUM: 45,
    LENGTH: 6,
    MAX_MONEY: 1_000_000_000,
    PRICE_UNIT: 1000,
    WINNING_MESSAGES: {
        3: '3개 일치 (5,000원)',
        4: '4개 일치 (50,000원)',
        5: '5개 일치 (1,500,000원)',
        5.5: '5개 일치, 보너스 볼 일치 (30,000,000원)',
        6: '6개 일치 (2,000,000,000원)',
    },
    PRIZE_MONEY: {
        3: 5000,
        4: 50000,
        5: 1500000,
        5.5: 30000000,
        6: 2000000000,
    },
};

export default LOTTO_CONFIG;
