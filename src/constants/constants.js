/**
 * 금액 관련 상수
 * @constant {Object} AMOUNT
 * @property {number} min - 최소 금액
 * @property {number} max - 최대 금액
 * @property {number} unit - 구입 단위 금액
 */
export const AMOUNT = {
  min: 1000,
  max: 100000,
  unit: 1000,
};

/**
 * 상금 관련 상수
 * @constant {Object} PRIZE
 * @property {number} first - 1등 상금
 * @property {number} second - 2등 상금
 * @property {number} third - 3등 상금
 * @property {number} fourth - 4등 상금
 * @property {number} fifth - 5등 상금
 */
export const PRIZE = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};

/**
 * 번호 관련 상수
 * @constant {Object} NUMBER
 * @property {number} expected_length - 기대되는 번호 개수
 * @property {number} min_range - 번호 최소값
 * @property {number} max_range - 번호 최대값
 */
export const NUMBER = {
  expected_length: 6,
  min_range: 1,
  max_range: 45,
};

/**
 * 컨텍스트 관련 상수
 * @constant {Object} CONTEXT
 * @property {string} default - 기본 컨텍스트
 * @property {string} lotto - 로또 번호 컨텍스트
 * @property {string} winning - 당첨 번호 컨텍스트
 * @property {string} bonus - 보너스 번호 컨텍스트
 */
export const CONTEXT = {
  default: '번호',
  lotto: '로또 번호',
  winning: '당첨 번호',
  bonus: '보너스 번호',
};
