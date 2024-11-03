const RESULT = {
  RESULT_HEADER: '\n당첨 통계\n---',
  RESULT_MATCH: (count, isBonus) => `${count}개 일치${RESULT.BONUS(isBonus)}`,
  RESULT_PRIZE: (amount) => ` (${amount}원) `,
  RESULT_MATCH_COUNT: (count) => `- ${count}개`,
  RESULT_YEILD: (percent) => `총 수익률은 ${percent}%입니다.`,
  BONUS(isBonus) {
    if (isBonus) return ', 보너스 볼 일치';
    return '';
  },
};
const PURCHASE_LOTTO = {
  REQUEST_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  PRINT_LOTTO_COUNT: (amount) => `${amount}개를 구매했습니다.`,
};

const LOTTO_MESSAGE = Object.freeze({
  ...PURCHASE_LOTTO,
  ...RESULT,
  REQUEST_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  REQUEST_BONUS_NUMBER: '보너스 번호를 입력해 주세요',
  START_MARK: '[',
  END_MARK: ']',
  DELIMITER: ',',
});

export default LOTTO_MESSAGE;
