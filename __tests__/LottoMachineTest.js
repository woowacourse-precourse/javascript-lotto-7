import LottoMachine from '../src/components/LottoMachine.js';

describe('LottoMachine 클래스 테스트', () => {
  test('구입한 로또의 개수만큼 로또를 발행한다.', () => {
    const lottoMachine = new LottoMachine(3000);
    expect(lottoMachine.getLottoList().length).toBe(3);
  });
});
