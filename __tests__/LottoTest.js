import { lottoTestCase } from '../src/constant/lottoTestCase.js';
import Lotto from '../src/Lotto';

describe('로또 클래스 테스트', () => {
  test.each(lottoTestCase)('$description 예외가 발생한다.', ({ numbers, errorMessage }) => {
    expect(() => {
      new Lotto(numbers);
    }).toThrow(errorMessage);
  });
});
