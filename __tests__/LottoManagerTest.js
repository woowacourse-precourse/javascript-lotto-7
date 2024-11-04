import LottoManager from '../src/lotto/LottoManager.js';

describe('LottoManager 클래스 테스트', () => {
  let lottoManager;

  beforeEach(() => {
    const price = 5000;
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    lottoManager = new LottoManager(winningNumbers, bonusNumber, price);
  });

  test.each([
    [8000, 8],
    [5000, 5],
    [24000, 24],
  ])('#getLottoCount > %d원이면 로또 %d개', (price, expected) => {
    const result = lottoManager.getLottoCountTest(price);

    expect(result).toBe(expected);
  });
});
