import Lotto from '../../src/models/Lotto';
import { ERROR_MESSAGES } from '../../src/utils/constants';

describe('Lotto 클래스 테스트', () => {
    const validNumbers = [1, 2, 3, 4, 5, 6];

    test('유효한 번호로 로또 생성', () => {
        const lotto = new Lotto(validNumbers);
        expect(lotto.getNumbers()).toEqual(validNumbers);
    });

    test('로또 번호는 오름차순으로 정렬', () => {
        const unorderedNumbers = [6, 3, 1, 4, 5, 2];
        const lotto = new Lotto(unorderedNumbers);
        expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('당첨 번호와 일치하는 번호 개수 확인', () => {
        const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
        const winningNumbers = [1, 2, 3, 7, 8, 9];
        expect(lotto.countMatchingNumbers(winningNumbers)).toBe(3);
    });

    test('특정 번호 포함 여부 확인', () => {
        const lotto = new Lotto(validNumbers);
        expect(lotto.hasNumber(1)).toBe(true);
        expect(lotto.hasNumber(45)).toBe(false);
    });
});