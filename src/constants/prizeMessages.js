/**
 * 로또 결과 입출력 메세지 모음 js
 */
export const PRIZE_MESSAGES = {
    output_winning_statistics: '당첨 통계\n---',
    output_prize_bonus_text: '5개 일치, 보너스 볼 일치',
    output_prize_condition_text: (count) => `${count}개 일치`,
    output_prize_result: (count, price, conditionText) => `${conditionText} (${price.toLocaleString()}원) - ${count}개`,
    output_rate_return: (rateReturn) => `총 수익률은 ${rateReturn}%입니다.`,
}