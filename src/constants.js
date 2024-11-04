export const ONE_LOTTO_PRICE = 1000;

export const LOTTO_WINNING_KEYS_IN_ORDER = [
  'MATCH_3',
  'MATCH_4',
  'MATCH_5',
  'MATCH_BONUS',
  'MATCH_6',
];

export const LOTTO_WINNING_KEYS = Object.freeze({
  MATCH_3: '3',
  MATCH_4: '4',
  MATCH_5: '5',
  MATCH_BONUS: '5.5',
  MATCH_6: '6',
});

export const LottoWinningPrice = Object.freeze({
  [LOTTO_WINNING_KEYS.MATCH_3]: 5_000,
  [LOTTO_WINNING_KEYS.MATCH_4]: 50_000,
  [LOTTO_WINNING_KEYS.MATCH_5]: 1_500_000,
  [LOTTO_WINNING_KEYS.MATCH_BONUS]: 30_000_000,
  [LOTTO_WINNING_KEYS.MATCH_6]: 2_000_000_000,
});

export const LottoWinningPriceChar = Object.freeze({
  [LOTTO_WINNING_KEYS.MATCH_3]: '5,000',
  [LOTTO_WINNING_KEYS.MATCH_4]: '50,000',
  [LOTTO_WINNING_KEYS.MATCH_5]: '1,500,000',
  [LOTTO_WINNING_KEYS.MATCH_BONUS]: '30,000,000',
  [LOTTO_WINNING_KEYS.MATCH_6]: '2,000,000,000',
});

export const PROMPT_MESSAGES = Object.freeze({
  buyPrice: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
  lottoResultTitle: '당첨 통계',
  lottoResultDivider: '---',
  rateOfReturnPrefix: '총 수익률은 ',
  rateOfReturnSuffix: '%입니다.',
});
