/**
 * 사용자 입력 메시지를 정의한 상수
 *
 * @constant {Object} INPUT_MESSAGES
 * @property {string} purchase_amount - 구입 금액 입력 메시지
 * @property {string} winning_numbers - 당첨 번호 입력 메시지
 * @property {string} bonus_number - 보너스 번호 입력 메시지
 */
export const INPUT_MESSAGES = {
  purchase_amount: '구입 금액을 입력해주세요.\n',
  winning_numbers: '\n당첨 번호를 입력해 주세요.\n',
  bonus_number: '\n보너스 번호를 입력해 주세요.\n',
};

/**
 * 사용자 출력 메시지를 정의한 상수
 *
 * @constant {Object} OUTPUT_MESSAGES
 * @property {Function} purchased_lottos - 구매한 로또 개수를 출력하는 메시지 함수
 * @property {Function} lotto_numbers - 로또 번호 배열을 출력하는 메시지 함수
 * @property {string} result_header - 당첨 통계를 출력하기 위한 헤더 메시지
 * @property {Object[]} prize_counts - 각 등수별 당첨 메시지 배열
 * @property {string} prize_counts.key - 등수 키 값
 * @property {string} prize_counts.message - 등수에 따른 당첨 메시지
 * @property {Function} roi - 수익률을 출력하는 메시지 함수
 */
export const OUTPUT_MESSAGES = {
  purchased_lottos: (count) => `\n${count}개를 구매했습니다.`,
  lotto_numbers: (numbers) => `[${numbers.join(', ')}]`,
  result_header: '\n당첨 통계\n---',
  prize_counts: [
    { key: 'fifth', message: '3개 일치 (5,000원)' },
    { key: 'fourth', message: '4개 일치 (50,000원)' },
    { key: 'third', message: '5개 일치 (1,500,000원)' },
    { key: 'second', message: '5개 일치, 보너스 볼 일치 (30,000,000원)' },
    { key: 'first', message: '6개 일치 (2,000,000,000원)' },
  ],
  roi: (roi) => `총 수익률은 ${roi}%입니다.`,
};
