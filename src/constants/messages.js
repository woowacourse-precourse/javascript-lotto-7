import { CONFIG, PRIZE } from './constants';

const INPUT_MESSAGES = Object.freeze({
  PURCHASE_AMOUNT: `구입금액을 입력해 주세요.\n`,
  WINNING_NUMBERS: `당첨 번호를 입력해 주세요.\n`,
  BONUS_NUMBER: `보너스 번호를 입력해 주세요.\n`,
});

const OUTPUT_MESSAGES = Object.freeze({
  LOTTO_AMOUNT: (amount) => `${amount}개를 구매했습니다.`,
  LOTTO_NUMBERS: (numbers) => `[${numbers.join(', ')}]`,
  WINNING_STATS: `당첨 통계\n---`,
  THREE_MATCH: (count) => `3개 일치 (${PRIZE[5]}) - (${count}개)`,
  FOUR_MATCH: (count) => `4개 일치 (${PRIZE[4]}) - (${count}개)`,
  FIVE_MATCH: (count) => `5개 일치 (${PRIZE[3]}) - (${count}개)`,
  FIVE_MATCH_WITH_BONUS: (count) =>
    `5개 일치, 보너스 볼 일치 (${PRIZE[2]}) - (${count}개)`,
  SIX_MATCH: (count) => `6개 일치 (${PRIZE[1]}) - (${count}개)`,
  TOTAL_REVENUE: (rate) => `총 수익률은 ${rate}입니다.`,
});

const ERROR = '[ERROR]';

const ERROR_MESSAGES = Object.freeze({
  INVALID_NUMBER: `${ERROR} 0이상의 숫자만 입력 가능합니다.`,
  INVALID_UNIT: `${ERROR} 구입 금액은 ${CONFIG.LOTTO_COUNT}원 단위여야 합니다.`,
  INVALID_WINNING_NUMBER: `${ERROR} 당첨 번호는 ${CONFIG.LOTTO_MIN_NUMBER}부터 ${CONFIG.LOTTO_MAX_NUMBER}까지의 숫자여야 합니다.`,
  INVALID_COUNT: `${ERROR} 로또 번호는 ${CONFIG.LOTTO_COUNT}개여야 합니다.`,
  DUPLICATED_WINNING_NUMBER: `${ERROR} 중복된 숫자는 입력할 수 없습니다.`,
  DUPLICATED_BONUS_NUMBER: `${ERROR} 보너스 번호는 당첨 번호와 중복되면 안됩니다.`,
});

export { INPUT_MESSAGES, OUTPUT_MESSAGES, ERROR_MESSAGES };
