import { resultNums } from './constants.js';

export const IO_MESSAGE = Object.freeze({
  INPUT_CASH: '구입금액을 입력해 주세요.\n',
  INPUT_ALARM_BUY: '개를 구매했습니다.',
  INPUT_WINNING_NUM: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMS: '보너스 번호를 입력해 주세요.\n',

  OUTPUT_TEXT: `\n당첨통계\n---`,
  OUTPUT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
});

export const ERROR_MESSAGE = Object.freeze({
  ERROR_LOTTO_NUM_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  ERROR_WINNG_NUM: '[ERROR] 당첨번호를 쉼표(,)를 기준으로 구분하며 6개의 숫자를 입력해주세요.',
  ERROR_BONUS_SET: '[ERROR] 로또 번호는 중복될 수 없습니다.',
  ERROR_BONUS_NUM: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  ERROR_CASH: '[ERROR] 로또 구입은 1,000 단위로 구입가능합니다.',
  ERROR_NUM: '[ERROR] 숫자를 입력해주세요',
});

export const TEXT_LOTTO_RESULT = () => {
  let [a, b, c, d, e] = [...resultNums.values()];

  return (
    `3개 일치 (5,000원) - ${a}개\n` +
    `4개 일치 (50,000원) - ${b}개\n` +
    `5개 일치 (1,500,000원) - ${c}개\n` +
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${d}개\n` +
    `6개 일치 (2,000,000,000원) - ${e}개`
  );
};
