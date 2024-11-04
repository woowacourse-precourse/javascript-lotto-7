import App from '../../src/App.js';

describe('App 클래스 단위 테스트', () => {
  const LOTTO_COUNT_CASSES = [
    [1000, 1],
    [15000, 15],
    [3000, 3],
  ];
  test.each(LOTTO_COUNT_CASSES)(
    '구입 금액에 따른 로또 개수 테스트',
    async (money, count) => {
      const app = new App();
      app.money = money;

      const lottos = await app.createLottos();
      expect(lottos.length).toEqual(count);
    }
  );
});
