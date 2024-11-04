import { MAX_LIMIT, PREFIX_ERRMSG } from "./utils.js";

export const CONSOLE_MESSAGES = Object.freeze({
  buyPrice: '구입금액을 입력해 주세요.\n',
  winNumber: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
  winningTotal: '당첨 통계',
  empty_line: '',
  separator: '---',
})

export const PRINT_PROFIT = (profitRate) => {
  return `총 수익률은 ${profitRate}%입니다.`
}

export const ERROR_MSG = Object.freeze({
  invalidNumber: `${PREFIX_ERRMSG} 1부터 45까지의 숫자만 입력해주세요.`,
  invalidLottoNumber: `${PREFIX_ERRMSG} 로또 번호는 6개여야 합니다.`,
  isDuplicatedNum: `${PREFIX_ERRMSG} 중복되지 않는 수 6개를 입력해주세요.`,
  invalidPriceNum: `${PREFIX_ERRMSG} 1000원 단위의 양수 금액을 입력해주세요.`,
  sameWinBonus: `${PREFIX_ERRMSG} 보너스 번호는 당첨 번호와 중복될 수 없습니다.`,
  beyondMaxPurchaseNum: `${PREFIX_ERRMSG} 최대 구매 금액은 ${MAX_LIMIT}원입니다.`
})
