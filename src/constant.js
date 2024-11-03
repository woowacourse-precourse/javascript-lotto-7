export const LOTTO_INPUT_MIN = 1;
export const LOTTO_INPUT_MAX = 45;
export const LOTTO_LENGTH = 6;
export const UNIT = 1_000;

export const PRICE_COUNT = {
  first: 6,
  secondThird: 5,
  fourth: 4,
  fifth: 3,
};

export const ERROR_MESSAGE = '[ERROR] 잘못된 입력입니다. 다시 입력해주세요.';

export const BUY_INPUT_MESSAGE = '구입금액을 입력해 주세요.';
export const BUY_RESULT_MESSAGE = (count) => `${count}개를 구매했습니다.`;

export const LOTTO_INPUT_MESSAGE = '당첨 번호를 입력해 주세요.';
export const BONUS_NUMBER_INPUT_MESSAGE = '보너스 번호를 입력헤 주세요';

export const LOTTO_RESULT_MESSAGE = (result) => {
  return [
    '당첨 통계',
    '---',
    `3개 일치 (5,000원) - ${result[LOTTO_PRICE_KEY.fifth]}개`,
    `4개 일치 (50,000원) - ${result[LOTTO_PRICE_KEY.fourth]}개`,
    `5개 일치 (1,500,000원) - ${result[LOTTO_PRICE_KEY.third]}개`,
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[LOTTO_PRICE_KEY.second]}개`,
    `6개 일치 (2,000,000,000원) - ${result[LOTTO_PRICE_KEY.first]}개`,
  ];
};
export const RATE_RESULT_MESSAGE = (rate) => `총 수익률은 ${rate}%입니다.`;

export const LOTTO_PRICE = {
  first: 2_000_000_000,
  second: 30_000_000,
  third: 1_500_000,
  fourth: 50_000,
  fifth: 5_000,
};

export const LOTTO_PRICE_KEY = {
  first: 'first',
  second: 'second',
  third: 'third',
  fourth: 'fourth',
  fifth: 'fifth',
};
