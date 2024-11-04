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
