import {
  LOTTO_CONDITION,
  PRICE_MAX_AMOUNT,
  PRICE_PER_LOTTO,
  PRIZE_KEY,
  RANK,
} from './constants.js';

const PREFIX_ERROR = '[ERROR]';

const INPUT_MESSAGES = Object.freeze({
  purchase_amount: '구입금액을 입력해 주세요.\n',
  winning_lotto: '당첨 번호를 입력해 주세요.\n',
  bonus_number: '보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGES = Object.freeze({
  purchase_amount: (tickets) => `\n${tickets}개를 구매했습니다.`,
  statics_title: `\n당첨통계\n---`,
  total_statics: (key, value) => `${key} - ${value}개`,
  total_profit_ratio: (profitRatio) => `총 수익률은 ${profitRatio}%입니다.`,
});

const STATISTIC_LABEL = Object.freeze({
  [PRIZE_KEY.fifth_prize]: `${RANK.fifth}개 일치 (5,000원)`,
  [PRIZE_KEY.fourth_prize]: `${RANK.fourth}개 일치 (50,000원)`,
  [PRIZE_KEY.third_prize]: `${RANK.third}개 일치 (1,500,000원)`,
  [PRIZE_KEY.second_prize]: `${RANK.second}개 일치, 보너스 볼 일치 (30,000,000원)`,
  [PRIZE_KEY.first_prize]: `${RANK.first}개 일치 (2,000,000,000원)`,
});

const ERROR_MESSAGES = Object.freeze({
  empty: `${PREFIX_ERROR} 값을 입력해주세요.\n`,
  numeric: `${PREFIX_ERROR} 숫자만 입력 가능합니다.\n`,
  positive: `${PREFIX_ERROR} 양의 정수만 입력 가능합니다.\n`,
  exceed_range: `${PREFIX_ERROR} 구입 금액은 ${PRICE_MAX_AMOUNT}원 이하여야 합니다.\n`,
  invalid_amount: `${PREFIX_ERROR} 구입 금액은 ${PRICE_PER_LOTTO}원으로 나누어 떨어져야 합니다.\n`,
  invalid_lotto_input: `${PREFIX_ERROR} 로또 번호는 숫자와 콤마(,)만 이용해서 작성하셔야 합니다.\n`,
  invalid_lotto_length: `${PREFIX_ERROR} 로또 번호는 ${LOTTO_CONDITION.length}개여야 합니다.\n`,
  invalid_lotto_range: `${PREFIX_ERROR} 로또 번호는 ${LOTTO_CONDITION.startRange}부터 ${LOTTO_CONDITION.endRange}사이의 숫자여야 합니다.\n`,
  invalid_lotto_unique: `${PREFIX_ERROR} 로또 번호는 중복될 수 없습니다.\n`,
});

export {
  PREFIX_ERROR,
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  ERROR_MESSAGES,
  STATISTIC_LABEL,
};
