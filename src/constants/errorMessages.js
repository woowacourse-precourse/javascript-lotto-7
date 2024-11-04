/**
 * 다양한 오류 메시지를 정의
 *
 * @constant {Object} ERROR_MESSAGES
 * @property {string} prefix - 오류 메시지 접두사
 * @property {string} purchase_amount_not_number - 구입 금액이 숫자가 아닐 때의 오류 메시지
 * @property {Function} purchase_amount_min - 최소 구입 금액 오류 메시지
 * @property {Function} purchase_amount_max - 최대 구입 금액 오류 메시지
 * @property {Function} purchase_amount_unit - 구입 금액 단위 오류 메시지
 * @property {Function} invalid_number_count - 번호 개수 오류 메시지
 * @property {Function} invalid_duplicate_number - 중복 번호 오류 메시지
 * @property {Function} invalid_number_type - 번호 타입 오류 메시지
 * @property {Function} invalid_number_range - 번호 범위 오류 메시지
 * @property {string} invalid_bonus_duplicate - 보너스 번호 중복 오류 메시지
 */
const ERROR_MESSAGES = {
  prefix: '[ERROR]',

  purchase_amount_not_number: '구입 금액은 숫자여야 합니다.\n',
  purchase_amount_min: (min) => `구입 금액은 ${min}원 이상이어야 합니다.\n`,
  purchase_amount_max: (max) => `구입 금액은 ${max}원을 넘을 수 없습니다.\n`,
  purchase_amount_unit: (unit) => `구입 금액은 ${unit}원 단위여야 합니다.\n`,
  invalid_number_count: (context, length) => `${context}는 ${length}개여야 합니다.\n`,
  invalid_duplicate_number: (context) => `${context}는 중복되지 않아야 합니다.\n`,
  invalid_number_type: (context) => `${context}는 정수만 입력할 수 있습니다.\n`,
  invalid_number_range: (context, min, max) =>
    `${context}는 ${min}부터 ${max} 사이의 숫자여야 합니다.\n`,
  invalid_bonus_duplicate: '보너스 번호는 당첨 번호와 중복될 수 없습니다.\n',
};

export default ERROR_MESSAGES;
