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
});
