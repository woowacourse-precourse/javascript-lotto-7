import {
  LOTTO_PRICE_UNIT,
  LOTTO_NUMBER_STANDARD,
  PURCHASE_MONEY_MAX,
} from './Constant.js';

const INPUT = {
  purchaseMoney: '구입금액을 입력해 주세요.\n',
  winningNumber: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
};

const OUTPUT = {
  winningStatistics: '\n당첨 통계\n---',
  ticketQuantity: (count) => `${count}개를 구매했습니다.`,
  ticketNumber: (number) => `[${number}]`,
  defaultPrize: (match, reward, count) =>
    `${match}개 일치 (${reward.toLocaleString('ko-KR')}원) - ${count}개`,
  bonusPrize: (match, reward, count) =>
    `${match}개 일치, 보너스 볼 일치 (${reward.toLocaleString(
      'ko-KR'
    )}원) - ${count}개`,
  totalProfit: (value) => `총 수익률은 ${value.toFixed(1)}%입니다.`,
};

const PREFIX_ERROR = '[ERROR]';

const BASIC_ERROR = {
  null: `${PREFIX_ERROR} 입력이 없습니다.`,
  invalidType: `${PREFIX_ERROR} 숫자를 입력해 주십시오.`,
  invalidMoney: `${PREFIX_ERROR} ${LOTTO_PRICE_UNIT}원 단위로 입력해 주십시오.`,
  invalidPossiblePurchase: `${PREFIX_ERROR} 금액은 ${LOTTO_PRICE_UNIT}원 이상부터 가능합니다.`,
  invalidPurchaseMoneyMax: `${PREFIX_ERROR} 1회 한도는 ${PURCHASE_MONEY_MAX}원 입니다.`,
  invalidNumber: `${PREFIX_ERROR} ${LOTTO_NUMBER_STANDARD.min} ~ ${LOTTO_NUMBER_STANDARD.max} 사이의 숫자를 입력해 주십시오.`,
  invalidLength: (count) =>
    `${PREFIX_ERROR} 입력은 ${count}걔의 숫자를 입력해 주십시오.`,
};

const WINNING_NUMBER_ERROR = {
  overlap: `${PREFIX_ERROR} 중복된 값이 있습니다.`,
  invalidSeparator: `${PREFIX_ERROR} ,(쉼표)로 구분해 주십시오.`,
};

const BONUS_NUMBER_ERROR = {
  overlapBonus: `${PREFIX_ERROR} 당첨 번호와 중복된 값이 있습니다.`,
};

export { INPUT, OUTPUT, BASIC_ERROR, WINNING_NUMBER_ERROR, BONUS_NUMBER_ERROR };
