import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App';
import Lotto from '../src/Lotto';
import LottoStore from '../src/LottoStore';
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

  describe('LottoStore 클래스 테스트', () => {
    let lottoStore;

    beforeEach(() => {
      lottoStore = new LottoStore();
      jest.clearAllMocks();
    });

    test.each([
      { payment: '', error: ERROR_MESSAGE.INPUT_EMPTY },
      { payment: ' ', error: ERROR_MESSAGE.INPUT_EMPTY },
      { payment: '  ', error: ERROR_MESSAGE.INPUT_EMPTY },
      { payment: '!@#$', error: ERROR_MESSAGE.NOT_NUMBER },
      { payment: 'abcd', error: ERROR_MESSAGE.NOT_NUMBER },
      { payment: 'ㄱㄴㄷ', error: ERROR_MESSAGE.NOT_NUMBER },
      { payment: '0', error: ERROR_MESSAGE.NOT_POSITIVE_INTEGER },
      { payment: '-2000', error: ERROR_MESSAGE.NOT_POSITIVE_INTEGER },
      { payment: '1000.423', error: ERROR_MESSAGE.NOT_POSITIVE_INTEGER },
      { payment: '-4000.5', error: ERROR_MESSAGE.NOT_POSITIVE_INTEGER },
      { payment: '1500', error: ERROR_MESSAGE.INVALID_UNIT },
      { payment: '1234', error: ERROR_MESSAGE.INVALID_UNIT },
      { payment: '4530', error: ERROR_MESSAGE.INVALID_UNIT },
      { payment: '10000000', error: ERROR_MESSAGE.OVER_MAXIMUM },
    ])('로또 구입 금액이 $payment 일 때 예외: $error', ({ payment, error }) => {
      expect(() => {
        lottoStore.buyLotto(payment);
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

      lottoStore.buyLotto(`${mockLottoNumbers.length * 1000}`);
      mockLottoNumbers.forEach((mockLottoNumber, index) => {
        expect(lottoStore.getLotto(index).getNumbers()).toEqual(mockLottoNumber);
      });

      expect(lottoStore.getLottoCount()).toEqual(mockLottoNumbers.length);
      expect(lottoStore.printLottoList()).toEqual(
        mockLottoNumbers.map((numbers) => `[${numbers.join(', ')}]`).join('\n'),
      );
    });

    test.each([
      { winningNumbers: '', error: ERROR_MESSAGE.INPUT_EMPTY },
      { winningNumbers: '6,12a,23,32,40,41', error: ERROR_MESSAGE.INVALID_WINNING_NUMBERS },
      { winningNumbers: '1,9,14,32,35,60', error: ERROR_MESSAGE.OUT_OF_RANGE },
      { winningNumbers: '4,24,35,37,45', error: ERROR_MESSAGE.NUMBERS_COUNT },
      { winningNumbers: '7,14,15,22,31,35,41', error: ERROR_MESSAGE.NUMBERS_COUNT },
      { winningNumbers: '1,14,23,23,26,37', error: ERROR_MESSAGE.SAME_NUMBER },
    ])('로또 당첨 번호가 $winningNumbers 일 때 예외: $error', ({ winningNumbers, error }) => {
      expect(() => {
        lottoStore.setWinningLotto(winningNumbers);
      }).toThrow(error);
    });

    test.each([
      { winningNumbers: '1,6,11,25,33,37', bonusNumber: '', error: ERROR_MESSAGE.INPUT_EMPTY },
      { winningNumbers: '1,6,11,25,33,37', bonusNumber: '!@#$', error: ERROR_MESSAGE.NOT_NUMBER },
      { winningNumbers: '1,6,11,25,33,37', bonusNumber: '0', error: ERROR_MESSAGE.OUT_OF_RANGE },
      { winningNumbers: '1,6,11,25,33,37', bonusNumber: '-20', error: ERROR_MESSAGE.OUT_OF_RANGE },
      { winningNumbers: '1,6,11,25,33,37', bonusNumber: '100', error: ERROR_MESSAGE.OUT_OF_RANGE },
      { winningNumbers: '1,6,11,25,33,37', bonusNumber: '11', error: ERROR_MESSAGE.SAME_NUMBER },
      { winningNumbers: '11,13,21,29,30,44', bonusNumber: '44', error: ERROR_MESSAGE.SAME_NUMBER },
    ])(
      '로또 당첨 번호가 $winningNumbers, 보너스 번호가 $bonusNumber 일 때  예외: $error',
      ({ winningNumbers, bonusNumber, error }) => {
        expect(() => {
          lottoStore.setWinningLotto(winningNumbers);
          lottoStore.setBonusNumber(bonusNumber);
        }).toThrow(error);
      },
    );
  });
});
