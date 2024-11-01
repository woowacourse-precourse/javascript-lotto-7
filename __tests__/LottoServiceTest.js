import LottoService from '../src/Model/LottoService.js';

describe('로또 서비스 클래스 테스트', () => {
  let lottoService;

  beforeEach(() => {
    lottoService = new LottoService();
  });

  test('로또 구매 금액이 1000단위가 아닐 경우 Error를 발생시킨다.', () => {
    expect(() => {
      lottoService.setPurcharedAmount(1001);
    }).toThrow('[ERROR]');
  });

  test.each([['-1'], ['0'], ['100000000']])('로또 구매 금액이 입력 가능한 Range를 벗어날 경우 Error를 발생시킨다.', (input) => {
    expect(() => {
      lottoService.setPurcharedAmount(input);
    }).toThrow('[ERROR]');
  });

  test('로또 구매 금액을 로또 가격으로 나누어 로또 구매 수량을 설정한다.', () => {
    lottoService.setPurcharedAmount(10000);
    expect(lottoService.getlottoCount()).toBe(10);
  });
});
