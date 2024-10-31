import App from '../src/App';
import Lotto from '../src/Lotto';
import LottoStore from '../src/LottoStore';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성

  describe('App 클래스 테스트', () => {
    test.each(['', ' ', '  '])('입력값이 공백 문자이면 예외가 발생한다. 공백 : [%s]', (blank) => {
      expect(() => {
        new App().validate(blank);
      }).toThrow('금액을 입력해주세요.');
    });
  });

  describe('LottoStore 클래스 테스트', () => {
    test.each(['!@#$', 'abcd', 'ㄱㄴㄷ'])(
      '로또 구입 금액이 숫자가 아니면 예외가 발생한다. 로또 구입 금액 : %s',
      (payment) => {
        expect(() => {
          const lottoStore = new LottoStore();
          lottoStore.buyLotto(Number(payment));
        }).toThrow('금액은 숫자만 입력 가능합니다.');
      },
    );

    test.each([0, -2000, 1000.423, -4000.5])(
      '로또 구입 금액이 양의 정수가 아니면 예외가 발생한다. 구입 금액 : %s',
      (payment) => {
        expect(() => {
          const lottoStore = new LottoStore();
          lottoStore.buyLotto(payment);
        }).toThrow('로또 구입 금액은 양의 정수로만 입력해주세요.');
      },
    );

    test.each([1500, 1700, 1234, 4530])(
      '로또 구입 금액이 1000원 단위가 아니면 예외가 발생한다. 구입 금액 : %s',
      (payment) => {
        expect(() => {
          const lottoStore = new LottoStore();
          lottoStore.buyLotto(payment);
        }).toThrow('로또 구입 금액은 1000원 단위로만 받습니다.');
      },
    );

    test('로또 구입 금액이 100,000원이 넘으면 예외가 발생한다.', () => {
      expect(() => {
        const lottoStore = new LottoStore();
        lottoStore.buyLotto(10000000);
      }).toThrow('10만원 이상은 구매할 수 없습니다.');
    });
  });
});
