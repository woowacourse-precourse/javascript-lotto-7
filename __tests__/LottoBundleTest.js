import Lotto from '../src/Model/Lotto';
import LottoBundle from '../src/Model/LottoBundle';

// - 3. 로또 여러장 발행하기

//   - 로또 개수를 입력받으면 그만큼의 로또를 발급

describe('로또묶음 클래스 테스트', () => {
  const lottoBundle = new LottoBundle(3);
  test('로또를 발급할 개수를 입력하면 그만큼의 로또를 발급한다.', () => {
    expect(lottoBundle.getList().length).toBe(3);
  });

  test('로또묶음엔 로또가 있어야 한다.', () => {
    expect(
      lottoBundle.getList().some((lotto) => !(lotto instanceof Lotto))
    ).toBe(false);
  });
});
