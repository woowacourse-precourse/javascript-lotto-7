import LottoUtility from '../src/LottoUtility.js';
import Lotto from '../src/Lotto.js';
import { PRIZE_AMOUNT, PROFIT_ROUND_DECIMAL_PLACE } from '../src/lottoConstants.js';

describe('LottoUtility 클래스', () => {
  let lottoUtility;

  beforeEach(() => {
    lottoUtility = new LottoUtility();
  });

  test('calculateLottoCount - 올바른 로또 개수를 계산한다', () => {
    const amount = 8000;
    const count = lottoUtility.calculateLottoCount(amount);
    expect(count).toBe(8);
  });

  test('generateLottoTickets - 지정된 개수만큼의 로또 티켓을 생성한다', () => {
    const lottoCount = 3;
    const tickets = lottoUtility.generateLottoTickets(lottoCount);
    expect(tickets).toHaveLength(3);
    tickets.forEach(ticket => expect(ticket).toBeInstanceOf(Lotto));
  });

  test('checkWinningRank - 로또 당첨 결과를 올바르게 계산한다', () => {
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;
    const tickets = [
      new Lotto([1, 2, 3, 4, 5, 6]), // 6개 일치 (1등)
      new Lotto([1, 2, 3, 4, 5, 7]), // 5개 + 보너스 (2등)
      new Lotto([1, 2, 3, 4, 5, 8]), // 5개 일치 (3등)
      new Lotto([1, 2, 3, 4, 9, 10]) // 4개 일치 (4등)
    ];
    const result = lottoUtility.checkWinningRank(tickets, winningLotto, bonusNumber);

    expect(result.first).toBe(1);  // 1등 1개
    expect(result.second).toBe(1); // 2등 1개
    expect(result.third).toBe(1);  // 3등 1개
    expect(result.fourth).toBe(1); // 4등 1개
    expect(result.fifth).toBe(0);  // 5등 0개
  });

  test('calculateProfitRate - 수익률을 올바르게 계산한다', () => {
    const winningResult = {
      first: 1,   // 1등 상금
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    const amount = 10000; // 총 구입 금액
    const profitRate = lottoUtility.calculateProfitRate(winningResult, amount);
    const expectedProfitRate = ((PRIZE_AMOUNT.FIRST / amount) * 100).toFixed(PROFIT_ROUND_DECIMAL_PLACE);
    expect(profitRate).toBe(expectedProfitRate);
  });

  test('countMatchNumbers - 로또 티켓 번호가 당첨 번호와 일치하는 개수를 정확히 반환한다', () => {
    const utility = new LottoUtility();
    const lottoTicket = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningLotto = new Lotto([1, 2, 3, 7, 8, 9]);
    const matchCount = utility.countMatchNumbers(lottoTicket, winningLotto);

    expect(matchCount).toBe(3); // 1, 2, 3만 일치하므로 3개
  });

  test('updateResult - 일치하는 번호 개수와 보너스 번호 조건에 따라 당첨 결과를 업데이트한다', () => {
    const utility = new LottoUtility();
    const result = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
    const bonusNumber = 7;

    // 테스트 케이스 1: 6개 일치 -> 1등
    const lottoTicket1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const matchCount1 = utility.countMatchNumbers(lottoTicket1, winningLotto);
    utility.updateResult(result, matchCount1, lottoTicket1, bonusNumber);
    expect(result.first).toBe(1);

    // 테스트 케이스 2: 5개 + 보너스 일치 -> 2등
    const lottoTicket2 = new Lotto([1, 2, 3, 4, 5, 7]);
    const matchCount2 = utility.countMatchNumbers(lottoTicket2, winningLotto);
    utility.updateResult(result, matchCount2, lottoTicket2, bonusNumber);
    expect(result.second).toBe(1);

    // 테스트 케이스 3: 5개 일치 -> 3등
    const lottoTicket3 = new Lotto([1, 2, 3, 4, 5, 10]);
    const matchCount3 = utility.countMatchNumbers(lottoTicket3, winningLotto);
    utility.updateResult(result, matchCount3, lottoTicket3, bonusNumber);
    expect(result.third).toBe(1);

    // 테스트 케이스 4: 4개 일치 -> 4등
    const lottoTicket4 = new Lotto([1, 2, 3, 4, 9, 10]);
    const matchCount4 = utility.countMatchNumbers(lottoTicket4, winningLotto);
    utility.updateResult(result, matchCount4, lottoTicket4, bonusNumber);
    expect(result.fourth).toBe(1);

    // 테스트 케이스 5: 3개 일치 -> 5등
    const lottoTicket5 = new Lotto([1, 2, 3, 8, 9, 10]);
    const matchCount5 = utility.countMatchNumbers(lottoTicket5, winningLotto);
    utility.updateResult(result, matchCount5, lottoTicket5, bonusNumber);
    expect(result.fifth).toBe(1);
  });
});
