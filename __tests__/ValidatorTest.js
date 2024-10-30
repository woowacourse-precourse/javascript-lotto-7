import { ERROR_MESSAGE, ERROR_PREFIX } from '../src/constants/messages.js';
import { Validator } from '../src/utils/validator.js';

describe('유효성 검증 테스트', () => {
	let validator;
	beforeEach(() => {
		validator = new Validator();
	});
	describe('구입 금액 입력 검증기 테스트', () => {
		test('정상 입력 테스트', () => {
			expect(validator.isValidCost('1000')).toBe(true);
			expect(validator.isValidCost('2000')).toBe(true);
			expect(validator.isValidCost('10000')).toBe(true);
			expect(validator.isValidCost('50000')).toBe(true);
			expect(validator.isValidCost('100000')).toBe(true);
		});
		test('isEmpty 테스트', () => {
			expect(() => validator.isValidCost('')).toThrow(
				ERROR_PREFIX + ' ' + ERROR_MESSAGE.EMPTY
			);
		});
		test('hasWhiteSpace 테스트', () => {
			expect(() => validator.isValidCost('10 000')).toThrow(
				ERROR_PREFIX + ' ' + ERROR_MESSAGE.HAS_WHITE_SPACE
			);
		});
		test('isNaN 테스트', () => {
			expect(() => validator.isValidCost('안녕하세요')).toThrow(
				ERROR_PREFIX + ' ' + ERROR_MESSAGE.NOT_A_NUMBER
			);
		});
		test('isNegative 테스트', () => {
			expect(() => validator.isValidCost('-324')).toThrow(
				ERROR_PREFIX + ' ' + ERROR_MESSAGE.IS_NEGATIVE
			);
		});
		test('isDividedByThousand 테스트', () => {
			expect(() => validator.isValidCost('1400')).toThrow(
				ERROR_PREFIX + ' ' + ERROR_MESSAGE.NOT_DIVIDED_BY_THOUSAND
			);
		});
	});
	describe('당첨 번호 입력 검증기 테스트', () => {
		test('정상 입력 테스트', () => {
			expect(validator.isValidWinningNumber('1,2,3,4,5,6')).toBe(true);
			expect(validator.isValidWinningNumber('7,8,9,10,11,12')).toBe(true);
			expect(validator.isValidWinningNumber('40,41,42,43,44,45')).toBe(true);
		});

		test('isEmpty 테스트', () => {
			expect(() => validator.isValidWinningNumber('')).toThrow(
				ERROR_PREFIX + ' ' + ERROR_MESSAGE.EMPTY
			);
		});

		test('hasWhiteSpace 테스트', () => {
			expect(() => validator.isValidWinningNumber('1, 2,3,4,5,6')).toThrow(
				ERROR_PREFIX + ' ' + ERROR_MESSAGE.HAS_WHITE_SPACE
			);
		});

		test('숫자와 쉼표 외의 문자 포함 테스트', () => {
			expect(() => validator.isValidWinningNumber('1,2,3,a,5,6')).toThrow(
				ERROR_PREFIX + ' ' + ERROR_MESSAGE.INVALID_WINNING_FORMAT
			);
			expect(() => validator.isValidWinningNumber('1,2,3,4,5,six')).toThrow(
				ERROR_PREFIX + ' ' + ERROR_MESSAGE.INVALID_WINNING_FORMAT
			);
		});

		test('로또 번호 개수 불일치 테스트', () => {
			expect(() => validator.isValidWinningNumber('1,2,3,4,5')).toThrow(
				ERROR_PREFIX + ' ' + ERROR_MESSAGE.INVALID_LOTTO_COUNT
			);
			expect(() => validator.isValidWinningNumber('1,2,3,4,5,6,7')).toThrow(
				ERROR_PREFIX + ' ' + ERROR_MESSAGE.INVALID_LOTTO_COUNT
			);
		});

		test('중복 숫자 테스트', () => {
			expect(() => validator.isValidWinningNumber('1,2,3,4,5,5')).toThrow(
				ERROR_PREFIX + ' ' + ERROR_MESSAGE.IS_DUPLICATED
			);
		});

		test('숫자 범위 초과 테스트', () => {
			expect(() => validator.isValidWinningNumber('0,1,2,3,4,5')).toThrow(
				ERROR_PREFIX + ' ' + ERROR_MESSAGE.IS_OVER_NUMBER_RANGE
			);
			expect(() => validator.isValidWinningNumber('1,2,3,4,5,46')).toThrow(
				ERROR_PREFIX + ' ' + ERROR_MESSAGE.IS_OVER_NUMBER_RANGE
			);
		});
	});
});
