import LottoGenerator from '../../src/models/LottoGenerator';
import { LOTTO } from '../../src/utils/constants.js';

describe('LottoGenerator 클래스 테스트', () => {
    test('로또 번호 생성 시 6개의 유효한 번호가 생성되는지 확인', () => {
        const lotto = LottoGenerator.generateNumbers();
        const numbers = lotto.getNumbers();
        
        expect(numbers).toHaveLength(LOTTO.SIZE);
        expect(new Set(numbers).size).toBe(LOTTO.SIZE);
        numbers.forEach(number => {
            expect(number).toBeGreaterThanOrEqual(LOTTO.MIN_NUMBER);
            expect(number).toBeLessThanOrEqual(LOTTO.MAX_NUMBER);
        });
    });

    test('여러 개의 로또 생성 시 지정된 수량만큼 생성되는지 확인', () => {
        const count = 5;
        const lottos = LottoGenerator.generateMany(count);
        
        expect(lottos).toHaveLength(count);
        lottos.forEach(lotto => {
            expect(lotto.getNumbers()).toHaveLength(LOTTO.SIZE);
        });
    });

    test('생성된 모든 로또의 번호가 유일한지 확인', () => {
        const count = 5;
        const lottos = LottoGenerator.generateMany(count);
        
        lottos.forEach(lotto => {
            const numbers = lotto.getNumbers();
            expect(new Set(numbers).size).toBe(LOTTO.SIZE);
        });
    });
});