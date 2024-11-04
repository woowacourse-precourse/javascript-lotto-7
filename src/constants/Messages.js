import { VALUES } from './Values.js';

const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGES = Object.freeze({
  divideIntoUnit: `${ERROR_PREFIX}구매 금액은 ${VALUES.amountUnit}원 단위로 입력 가능합니다.`,
  integerGreaterThenZero: `${ERROR_PREFIX}구매 금액은 양의 정수만 입력 가능합니다.`,
  duplicatedWinningNumber: `${ERROR_PREFIX}중복된 번호는 입력할 수 없습니다.`,
  invalidNumberFormat: `${ERROR_PREFIX}숫자는 쉼표(,)를 기준으로 나누어 입력해주세요.`,
  invalidRangeNumber: `${ERROR_PREFIX}로또 번호는 1부터 45 사이의 정수여야 합니다.`,
  invalidWinningNumberLength: `${ERROR_PREFIX}번호는 ${VALUES.lottoLength}개만 입력 가능합니다.`,
  invalidBonusNumberLength: `${ERROR_PREFIX}보너스 번호는 ${VALUES.bonusNumberLength}개만 입력 가능합니다.`,
  duplicatedBonusNumber: `${ERROR_PREFIX}보너스 번호는 당첨 번호와 중복될 수 없습니다.`,
});

export const MESSAGES = Object.freeze({
  readAmount: '구입금액을 입력해 주세요.\n',
  purchaseResult: '개를 구매했습니다.',
  readWinningNumbers: '당첨 번호를 입력해 주세요.\n',
  readBonusNumbers: '보너스 번호를 입력해주세요.\n',
  drawAnalytics: '당첨 통계',
  horizontalRule: '---',
  prize: Object.freeze({
    fifth: '3개 일치 (5,000원) - ',
    fourth: '4개 일치 (50,000원) - ',
    third: '5개 일치 (1,500,000원) - ',
    second: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    first: '6개 일치 (2,000,000,000원) - ',
  }),
  count: '개',
  totalEarningRate: '총 수익률은 ',
  is: '%입니다.',
});
