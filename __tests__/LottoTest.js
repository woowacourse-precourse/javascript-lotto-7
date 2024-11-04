import Lotto from '../src/Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { INIT_RANK_COUNT } from '.././src/Constants/LottoConstants.js';
import { ERROR_MESSAGE } from '../src/View/Error.js';

function makeErrorMessage(message) {
  return `[ERROR] ${message}`;
}

describe('로또 클래스 테스트', () => {
  describe('생성자', () => {
    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow(makeErrorMessage(ERROR_MESSAGE.WINNING_NUMBER_LENGTH));
    });

    test('로또 번호의 개수가 6개 보다 적으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 7]);
      }).toThrow(makeErrorMessage(ERROR_MESSAGE.WINNING_NUMBER_LENGTH));
    });

    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow(makeErrorMessage(ERROR_MESSAGE.WINNING_NUMBER_DUPLICATION));
    });

    test('유효한 번호로 Lotto 인스턴스를 생성해야 한다', () => {
      const validNumbers = [1, 2, 3, 4, 5, 6];
      const lotto = new Lotto(validNumbers);
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });

  describe('makeLottoTicketsAsCount', () => {
    test('지정된 수의 티켓을 생성해야 한다', () => {
      const validNumbers = [1, 2, 3, 4, 5, 6];
      const lotto = new Lotto(validNumbers);
      const ticketCount = 3;

      MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();

      MissionUtils.Random.pickUniqueNumbersInRange
        .mockReturnValueOnce([1, 2, 3, 4, 5, 6])
        .mockReturnValueOnce([7, 8, 9, 10, 11, 12])
        .mockReturnValueOnce([13, 14, 15, 16, 17, 18]);

      const tickets = lotto.makeLottoTicketsAsCount(ticketCount);

      expect(tickets.length).toBe(ticketCount);
      expect(tickets).toEqual([
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18],
      ]);
    });
  });

  describe('getAllofLottoTicketsResult', () => {
    test('일치 수에 따라 순위 카운트를 올바르게 업데이트해야 한다', () => {
      const validNumbers = [1, 2, 3, 4, 5, 6];
      const lotto = new Lotto(validNumbers);
      const tickets = [
        [1, 2, 3, 4, 5, 6], // 6개 일치
        [1, 2, 3, 4, 5, 10], // 5개 일치 + 보너스   볼
        [1, 2, 3, 4, 5, 9], // 5개 일치
        [1, 2, 3, 4, 7, 8], // 4개 일치
        [1, 2, 3, 9, 10, 11], // 3개 일치
        [20, 21, 22, 23, 24, 25], // 일치 없음
      ];

      const bonusNumber = 10;

      const result = lotto.getAllofLottoTicketsResult(
        tickets,
        INIT_RANK_COUNT,
        bonusNumber
      );

      expect(result.FIRST).toBe(1);
      expect(result.SECOND).toBe(1);
      expect(result.THIRD).toBe(1);
      expect(result.FOURTH).toBe(1);
      expect(result.FIFTH).toBe(1);
    });
  });
});
