import { MissionUtils } from '@woowacourse/mission-utils';
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
    let lottoStore;

    beforeEach(() => {
      lottoStore = new LottoStore();
      jest.clearAllMocks();
    });

    test.each([
      { payment: '!@#$', error: '금액은 숫자만 입력 가능합니다.' },
      { payment: 'abcd', error: '금액은 숫자만 입력 가능합니다.' },
      { payment: 'ㄱㄴㄷ', error: '금액은 숫자만 입력 가능합니다.' },
      { payment: 0, error: '로또 구입 금액은 양의 정수로만 입력해주세요.' },
      { payment: -2000, error: '로또 구입 금액은 양의 정수로만 입력해주세요.' },
      { payment: 1000.423, error: '로또 구입 금액은 양의 정수로만 입력해주세요.' },
      { payment: -4000.5, error: '로또 구입 금액은 양의 정수로만 입력해주세요.' },
      { payment: 1500, error: '로또 구입 금액은 1000원 단위로만 받습니다.' },
      { payment: 1700, error: '로또 구입 금액은 1000원 단위로만 받습니다.' },
      { payment: 1234, error: '로또 구입 금액은 1000원 단위로만 받습니다.' },
      { payment: 4530, error: '로또 구입 금액은 1000원 단위로만 받습니다.' },
      { payment: 10000000, error: '10만원 이상은 구매할 수 없습니다.' },
    ])('로또 구입 금액이 $payment 일 때 예외: %s', ({ payment, error }) => {
      expect(() => {
        lottoStore.buyLotto(Number(payment));
      }).toThrow(error);
    });

    test('로또 구입 테스트', () => {
      const mockLottoNumbers = [
        [3, 15, 22, 33, 41, 45],
        [1, 5, 9, 10, 23, 35],
      ];

      MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
      mockLottoNumbers.forEach((mockLottoNumber) => {
        MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValueOnce(mockLottoNumber);
      });

      lottoStore.buyLotto(mockLottoNumbers.length * 1000);
      mockLottoNumbers.forEach((mockLottoNumber, index) => {
        expect(lottoStore.getLotto(index).getNumbers()).toEqual(mockLottoNumber);
      });

      expect(lottoStore.getLottoCount()).toEqual(mockLottoNumbers.length);
    });
  });
});
