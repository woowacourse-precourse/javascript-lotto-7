import LottoGame from '../src/LottoGame.js';

describe('로또 게임 클래스 테스트', () => {
    test('구매 금액에 맞게 로또가 생성된다', () => {
        const amount = 5000;
        const lottoGame = new LottoGame(amount);
        expect(lottoGame.lottoQuantity()).toBe(5);
    });
});