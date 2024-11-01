import { 
    validatePurchaseAmount,
    validateLottoNumbers,
    validateBonusNumber,
    isValidNumberRange
} from '../../src/utils/validators';
import { ERROR_MESSAGES } from '../../src/utils/constants.js';

describe('구매 금액 유효성 검증', () => {
    test('유효한 구매 금액 검증', () => {
        expect(validatePurchaseAmount('2000')).toBe(2000);
    });

    test('숫자가 아닌 입력 시 예외 발생', () => {
        expect(() => validatePurchaseAmount('abc'))
            .toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    });

    test('1000원 미만 금액 입력 시 예외 발생', () => {
        expect(() => validatePurchaseAmount('500'))
            .toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    });

    test('1000원 단위가 아닌 금액 입력 시 예외 발생', () => {
        expect(() => validatePurchaseAmount('1500'))
            .toThrow(ERROR_MESSAGES.INVALID_PURCHASE_UNIT);
    });
});

describe('로또 번호 유효성 검증', () => {
    test('유효한 로또 번호 검증', () => {
        const validNumbers = [1, 2, 3, 4, 5, 6];
        expect(() => validateLottoNumbers(validNumbers)).not.toThrow();
    });

    test('6개 미만의 번호 입력 시 예외 발생', () => {
        const invalidNumbers = [1, 2, 3, 4, 5];
        expect(() => validateLottoNumbers(invalidNumbers))
            .toThrow(ERROR_MESSAGES.INVALID_NUMBER_COUNT);
    });

    test('중복된 번호 입력 시 예외 발생', () => {
        const duplicateNumbers = [1, 2, 3, 4, 5, 5];
        expect(() => validateLottoNumbers(duplicateNumbers))
            .toThrow(ERROR_MESSAGES.DUPLICATE_NUMBER);
    });

    test('범위를 벗어난 번호 입력 시 예외 발생', () => {
        const outOfRangeNumbers = [0, 1, 2, 3, 4, 5];
        expect(() => validateLottoNumbers(outOfRangeNumbers))
            .toThrow(ERROR_MESSAGES.INVALID_NUMBER_RANGE);
    });
});

describe('보너스 번호 유효성 검증', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    test('유효한 보너스 번호 검증', () => {
        expect(validateBonusNumber('7', winningNumbers)).toBe(7);
    });

    test('숫자가 아닌 입력 시 예외 발생', () => {
        expect(() => validateBonusNumber('a', winningNumbers))
            .toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    });

    test('당첨 번호와 중복된 보너스 번호 입력 시 예외 발생', () => {
        expect(() => validateBonusNumber('1', winningNumbers))
            .toThrow(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    });

    test('범위를 벗어난 보너스 번호 입력 시 예외 발생', () => {
        expect(() => validateBonusNumber('46', winningNumbers))
            .toThrow(ERROR_MESSAGES.INVALID_NUMBER_RANGE);
    });
});