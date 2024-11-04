const LOG_MESSAGE = Object.freeze({
  ENTER_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.",
  PURCHASE_CONFIRMATION: "개를 구매했습니다.",
  ENTER_WINNING_NUMBERS: "당첨 번호를 입력해 주세요.",
  ENTER_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
  RATE_RETURN: (rate) => `총 수익률은 ${rate}%입니다.`,
})

const TAGS = Object.freeze({
  ERROR: "[ERROR]",
});

const STATISTICS = Object.freeze({
  HEADER: "당첨 통계\n---\n",
  STATISTICSMESSAGE: (description, count) => `${description} - ${count}개`,
});

const FORMAT = Object.freeze({
  LINEBREAK: "\n",
});

export {
  LOG_MESSAGE,
  STATISTICS,
  FORMAT,
  TAGS,
};