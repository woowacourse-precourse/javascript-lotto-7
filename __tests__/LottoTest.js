import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto';
import LottoStore from '../src/LottoStore';
import { validateEmptyString } from '../src/Validator';
import { ERROR_MESSAGE } from '../src/constants';

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
        validateEmptyString(blank, ERROR_MESSAGE.INPUT_EMPTY);
      }).toThrow(ERROR_MESSAGE.INPUT_EMPTY);
    });
  });

  describe('LottoStore 클래스 테스트', () => {
    let lottoStore;

    beforeEach(() => {
      lottoStore = new LottoStore();
      jest.clearAllMocks();
    });

    test.each([
      { payment: '!@#$', error: ERROR_MESSAGE.NOT_NUMBER },
      { payment: 'abcd', error: ERROR_MESSAGE.NOT_NUMBER },
      { payment: 'ㄱㄴㄷ', error: ERROR_MESSAGE.NOT_NUMBER },
      { payment: 0, error: ERROR_MESSAGE.NOT_POSITIVE_INTEGER },
      { payment: -2000, error: ERROR_MESSAGE.NOT_POSITIVE_INTEGER },
      { payment: 1000.423, error: ERROR_MESSAGE.NOT_POSITIVE_INTEGER },
      { payment: -4000.5, error: ERROR_MESSAGE.NOT_POSITIVE_INTEGER },
      { payment: 1500, error: ERROR_MESSAGE.INVAILD_UNIT },
      { payment: 1234, error: ERROR_MESSAGE.INVAILD_UNIT },
      { payment: 4530, error: ERROR_MESSAGE.INVAILD_UNIT },
      { payment: 10000000, error: ERROR_MESSAGE.OVER_MAXIMUM },
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
      expect(lottoStore.printLottoList()).toEqual(
        mockLottoNumbers.map((numbers) => `[${numbers.join(', ')}]`).join('\n'),
      );
    });
  });
});
