// _tests_/mytest/lotto.test.js
import Lotto from '../../src/Lotto.js'; // Lotto 클래스의 경로에 맞게 수정
import { describe, test, expect } from '@woowacourse/mission-utils';

describe('Lotto Class Tests', () => {
    test('정상적인 로또 번호 생성', () => {
        const numbers = Lotto.generateRandomNumbers();
        expect(numbers.length).toBe(6);
        numbers.forEach(num => {
            expect(num).toBeGreaterThanOrEqual(1);
            expect(num).toBeLessThanOrEqual(45);
        });
    });

    test('로또 번호 유효성 검사', () => {
        expect(() => new Lotto([1, 2, 3, 4, 5, 6])).not.toThrow();
        expect(() => new Lotto([1, 1, 2, 3, 4, 5])).toThrow("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
        expect(() => new Lotto([1, 2, 3])).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
    });

    test('getNumbers() 메서드 테스트', () => {
        const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
        expect(lotto.getNumbers()).toBe('[1, 2, 3, 4, 5, 6]');
    });
});

// 보너스 번호 관련 테스트를 추가할 수 있습니다.
