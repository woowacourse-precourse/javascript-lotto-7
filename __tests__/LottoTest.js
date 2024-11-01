import { LottoTestCase } from '../src/constant/LottoTestCase.js';
import Lotto from '../src/Lotto';

describe('로또 클래스 테스트', () => {
  test.each(LottoTestCase)('$description 예외가 발생한다.', ({ numbers }) => {
    expect(() => {
      new Lotto(numbers);
    }).toThrow('[ERROR]');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});
