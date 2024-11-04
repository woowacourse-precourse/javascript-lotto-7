export const WINNING_CRITERIA = {
    5: { price: 5000, message: "3개 일치 (5,000원)" },
    4: { price: 50000, message: "4개 일치 (50,000원)" },
    3: { price: 1500000, message: "5개 일치 (1,500,000원)" },
    2: { price: 30000000, message: "5개 일치, 보너스 볼 일치 (30,000,000원)" },
    1: { price: 2000000000, message: "6개 일치 (2,000,000,000원)" },
};

export const MINIMUM_NUMBER = 1;
export const MAXIMUM_NUMBER = 45;
export const PICK_AMOUNT = 6;

export const REGEX_ONLY_DIGITS_AND_COMMAS = /^[0-9,\s]+$/;
export const REGEX_LOTTO_NUMBERS = /^\s*(?:[1-9]|[1-3][0-9]|4[0-5])\s*(,\s*(?:[1-9]|[1-3][0-9]|4[0-5])\s*)*$/;