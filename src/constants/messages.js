export const INPUT_MESSAGES = {
  purchase_prompt: "구입 금액을 입력해주세요(로또 1장 당 1000원)",
  winning_numbers_prompt: "당첨 번호를 입력해주세요(쉼표로 구분하여 입력)",
  bonus_number_prompt: "보너스 번호를 입력해주세요",
};

export const OUTPUT_MESSAGES = {
  purchasedAmount(ticketAmount) {
    return `${ticketAmount}개를 구매했습니다.`;
  },
  output_header: "당첨 통계\n---",
  eachRankResult(key, matched, prize, count){
    if (key === 'second') {
      return `${matched}개 일치, 보너스 볼 일치 (${prize.toLocaleString()}원) - ${count}개`;
    }
    return `${matched}개 일치 (${prize.toLocaleString()}원) - ${count}개`;
  },
  totalProfit(profit) {
    return `총 수익은 ${profit.toLocaleString()}원입니다.`;
  },
  totalRate(rateOfReturn) {
    return `총 수익률은 ${rateOfReturn}%입니다.`;
  }
};

export const ERROR_MESSAGES = {
  invalid_length: "[ERROR] : 로또 번호는 6개여야 합니다.",
  duplicate_number: "[ERROR] : 번호들은 중복될 수 없습니다.",
  invalid_range: "[ERROR] : 로또 번호는 1부터 45 사이의 숫자이어야 합니다.",
  not_a_number: "[ERROR] : 로또 번호는 숫자가 입력되어야 합니다.",
  not_a_integer: "[ERROR] : 로또 번호는 정수이어야 합니다.",
  invalid_payment: "[ERROR] : 구입 금액은 1000원 단위로 입력해야 합니다.",
}