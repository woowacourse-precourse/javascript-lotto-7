import LottoGame from '../src/LottoGame.js';

describe('로또 게임 클래스 테스트', () => {
    test('구매 금액에 맞게 로또가 생성된다.', () => {
        const amount = 5000;
        const lottoGame = new LottoGame(amount);
        lottoGame.createLottoList();

        expect(lottoGame.lottoQuantity()).toBe(5);
        expect(lottoGame.lottoList.length).toBe(5);
    });

    test('수익률이 제대로 계산된다.', () => {
        const amount = 10000;
        const lottoGame = new LottoGame(amount);
        lottoGame.createLottoList();
        
        lottoGame.winRankList = [1, 2, 4];
        const expectedYield = (lottoGame.calTotalWinAmount() / amount * 100).toFixed(1);

        expect(lottoGame.getYield()).toBe(expectedYield);
    });

    test('당첨 결과가 제대로 계산된다.', () => {
        const amount = 10000;
        const lottoGame = new LottoGame(amount);
        lottoGame.createLottoList();

        lottoGame.winRankList = [1, 2, 2, 4]; 
        const results = lottoGame.getWinResult();

        expect(results.length).toBe(5); // 결과 길이 확인
        expect(results[0]).toBe('3개 일치 (5,000원) - 0개'); // 3개 일치
        expect(results[1]).toBe('4개 일치 (50,000원) - 1개'); // 4개 일치
        expect(results[2]).toBe('5개 일치 (1,500,000원) - 0개'); // 5개 일치
        expect(results[3]).toBe('5개 일치, 보너스 볼 일치 (30,000,000원) - 2개'); // 보너스
        expect(results[4]).toBe('6개 일치 (2,000,000,000원) - 1개'); // 6개 일치
    });
});