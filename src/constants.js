export const LOTTO_LENGTH = 6;

export const LOTTO_NUMBER_START = 1;

export const LOTTO_NUMBER_END = 45;

export const WINNING_NUMBER_DELIMITER = ',';

export const INPUT_MESSAGE = {
  READ_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  READ_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  READ_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

export const OUTPUT_MESSAGE = {
  PURCHASE_SUMMARY: (lottoCount) => `${lottoCount}개를 구매했습니다.`,
  STATISTICS_TITLE: (count) => `${count}개 일치`,
  STATISTICS_TITLE_BONUS: '보너스 볼 일치',
  STATISTICS: '당첨 통계',
  STATISTICS_LINE: '---',
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

export const ERROR_MESSAGE = {
  LOTTO_CHECK_LENGTH: `로또 번호는 ${LOTTO_LENGTH}개여야 합니다.`,
  LOTTO_CHECK_DUPLICATES: '로또 번호는 중복이 없어야 합니다.',
  LOTTO_CHECK_NUMBER: '로또 번호는 숫자이어야 합니다.',
  LOTTO_CHECK_NUMBER_RANGE: `로또 번호는 ${LOTTO_NUMBER_START}부터 ${LOTTO_NUMBER_END} 사이의 숫자여야 합니다.`,
  LOTTO_CHECK_PURCHASE_AMOUNT: (price) =>
    `구입 금액은 ${price}원 이상이어야 합니다.`,
};
