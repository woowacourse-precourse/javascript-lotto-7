import LottoNumbersGenerator from '../src/model/LottoNumbersGenerator.js';

describe('숫자 생성기 테스트', () => {
  let generator;

  beforeEach(() => {
    generator = new LottoNumbersGenerator();
  });

  test('printLottoNumbers 기능 테스트', () => {
    const quantity = 2;
    const result = generator.printLottoNumbers(quantity);
    expect(result.length).toEqual(2);
  });
});
