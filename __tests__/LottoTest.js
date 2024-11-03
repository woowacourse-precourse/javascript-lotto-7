import { lottoTestCase } from '../src/constant/lottoTestCase.js';
import Lotto from '../src/Lotto';

describe('로또 클래스 테스트', () => {
  test.each(lottoTestCase)('$description 예외가 발생한다.', ({ numbers, errorMessage }) => {
    expect(() => {
      new Lotto(numbers);
    }).toThrow(errorMessage);
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});
