export const LOTTO_CONSTANTS = Object.freeze({
  price: 1000,
  minLottoNumber: 1,
  maxLottoNumber: 45,
  length: 6,
  rank: 5,
});

export const LOTTO_MESSAGES = Object.freeze({
  notDuplcate: '[ERROR] 로또 번호에 중복된 값이 있으면 안됩니다.',
  notInRange: '[ERROR] 로또 번호에 범위는 1~45이어야 합니다.',
  notLength6: '[ERROR] 로또 번호는 6개여야 합니다.',
});

export const MONEY_MESSAGES = Object.freeze({
  question: '구입금액을 입력해 주세요.\n',
  error: {
    notBlank: '[ERROR] 구입금액을 입력하지 않았습니다.',
    notDevide: '[ERROR] 구입금액은 1000원 단위여야 합니다.',
    notNumber: '[ERROR] 숫자를 입력해주세요.',
  },
});

export const WINNING_NUMBER_MESSAGE = Object.freeze({
  question: '\n당첨 번호를 입력해 주세요.\n',
  error: {
    notDuplcate: '[ERROR] 중복된 값이 있습니다.',
    notOver6: '[ERROR] 숫자는 6개여야 합니다.',
    notNumber: '[ERROR] 숫자를 입력해주세요.',
    notBlank: '[ERROR] 공백이 있으면 안됩니다.',
    notInRange: '[ERROR] 번호의 범위는 1 ~ 45 이어야 합니다.',
  },
});

export const BONUS_NUMBER_MESSAGE = Object.freeze({
  question: '\n보너스 번호를 입력해 주세요.\n',
  error: {
    notBlank: '[ERROR] 보너스 번호를 입력하지 않았습니다.',
    notNumber: '[ERROR] 숫자를 입력해주세요.',
    notInRange: '[ERROR] 번호의 범위는 1 ~ 45 이어야 합니다.',
    notDuplicate: '[ERROR] 번호는 중복되면 안됩니다.',
  },
});

export const OUTPUT_MESSAGE = Object.freeze({
  buyLotto: (money) => `\n${money}개를 구매했습니다.`,
  lottoNumbers: (number) => `[${number.join(', ')}]`,
  winningStatistics: '\n당첨 통계\n---',
  collect3: (count) => `3개 일치 (5,000원) - ${count}개`,
  collect4: (count) => `4개 일치 (50,000원) - ${count}개`,
  collect5: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  collect5WithBonus: (count) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  collect6: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  income: (percentage) => `총 수익률은 ${percentage}%입니다.`,
});
