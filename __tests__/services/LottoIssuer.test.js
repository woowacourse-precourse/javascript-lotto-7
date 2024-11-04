import LottoIssuer from '../../src/services/LottoIssuer.js';
import Lotto from '../../src/domain/Lotto.js';
import { MESSAGES, LOTTO } from '../../src/utils/constants.js';
import { mockRandoms, getLogSpy } from '../../__mocks__/mockUtils.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockUniqueRandoms = (mockNumbers) => {
  const spy = jest.spyOn(MissionUtils.Random, 'pickUniqueNumbersInRange');
  mockNumbers.forEach((numbers) => {
    spy.mockReturnValueOnce(numbers);
  });
  return spy;
};

describe('LottoIssuer 클래스 테스트', () => {
  let logSpy;
  let spy;

  beforeEach(() => {
    logSpy = getLogSpy();
  });

  afterEach(() => {
    jest.clearAllMocks();
    if (spy) spy.mockRestore();
  });

  test('구입 금액에 따른 올바른 로또 티켓 개수가 발행된다.', () => {
    // given
    const purchaseAmount = 3000;
    const mockNumbers = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ];

    mockRandoms(mockNumbers.flat());

    // when
    const lottoTickets = LottoIssuer.createLottoTickets(purchaseAmount);

    // then
    expect(lottoTickets).toHaveLength(purchaseAmount / LOTTO.TICKET_PRICE);
    expect(lottoTickets.every((ticket) => ticket instanceof Lotto)).toBe(true);
  });

  test('구매 금액에 따른 로또 발행 상황이 콘솔에 출력된다.', () => {
    // given
    const purchaseAmount = 2000;
    const mockNumbers = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ];

    spy = mockUniqueRandoms(mockNumbers);

    // when
    LottoIssuer.createLottoTickets(purchaseAmount);

    // then
    expect(logSpy).toHaveBeenCalledWith(`2${MESSAGES.TICKET_PURCHASED}`);
    mockNumbers.forEach((numbers) => {
      expect(logSpy).toHaveBeenCalledWith(`[${numbers.join(', ')}]`);
    });
  });
});
