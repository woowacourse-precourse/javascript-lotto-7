import LottoResult from '../../src/models/LottoResult';

describe('LottoResult 클래스 테스트', () => {
    let lottoResult;

    beforeEach(() => {
        lottoResult = new LottoResult();
    });

    test('초기 결과가 모두 0으로 설정되어 있는지 확인', () => {
        const results = lottoResult.getResults();
        Object.values(results).forEach(count => {
            expect(count).toBe(0);
        });
    });

    test('1등 당첨 결과 추가', () => {
        lottoResult.addResult(6, false);
        const results = lottoResult.getResults();
        expect(results.FIRST).toBe(1);
    });

    test('2등 당첨 결과 추가 (5개 일치 + 보너스)', () => {
        lottoResult.addResult(5, true);
        const results = lottoResult.getResults();
        expect(results.SECOND).toBe(1);
    });

    test('3등 당첨 결과 추가 (5개 일치)', () => {
        lottoResult.addResult(5, false);
        const results = lottoResult.getResults();
        expect(results.THIRD).toBe(1);
    });

    test('4등 당첨 결과 추가', () => {
        lottoResult.addResult(4, false);
        const results = lottoResult.getResults();
        expect(results.FOURTH).toBe(1);
    });

    test('5등 당첨 결과 추가', () => {
        lottoResult.addResult(3, false);
        const results = lottoResult.getResults();
        expect(results.FIFTH).toBe(1);
    });

    test('수익률 계산 - 손해', () => {
        lottoResult.addResult(3, false); // 5등 1개 (5,000원)
        const rate = lottoResult.calculateProfitRate(10000); // 10,000원 구매
        expect(rate).toBe(50.0); // (5,000 / 10,000) * 100 = 50%
    });

    test('수익률 계산 - 이익', () => {
        lottoResult.addResult(4, false); // 4등 1개 (50,000원)
        const rate = lottoResult.calculateProfitRate(1000); // 1,000원 구매
        expect(rate).toBe(5000.0); // (50,000 / 1,000) * 100 = 5000%
    });

    test('여러 등수 당첨 시 수익률 계산', () => {
        lottoResult.addResult(5, false); // 3등 1개 (1,500,000원)
        lottoResult.addResult(4, false); // 4등 1개 (50,000원)
        lottoResult.addResult(3, false); // 5등 1개 (5,000원)
        
        const purchaseAmount = 5000; // 5,000원 구매
        const expectedPrize = 1555000; // 1,500,000 + 50,000 + 5,000
        const expectedRate = (expectedPrize / purchaseAmount) * 100;
        
        expect(lottoResult.calculateProfitRate(purchaseAmount))
            .toBe(Number(expectedRate.toFixed(1)));
    });
});