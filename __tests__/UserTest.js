import User from '../src/User.js';
import {
  WINNER_PRIZE,
  UNIT,
  INIT_RANK_COUNT,
} from '../src/Constants/LottoConstants.js';

describe('User 클래스 테스트', () => {
  let user;

  beforeEach(() => {
    user = new User(10000); // 구매 금액을 10,000으로 설정
  });

  test('구매 금액을 제대로 초기화해야 한다', () => {
    expect(user.purchaseMoney).toBe(10000);
  });

  test('구매한 로또 수를 계산해야 한다', () => {
    expect(user.purchasedLottoCount).toBe(10000 / UNIT); // UNIT이 1000으로 가정
  });

  test('당첨 번호 개수 결과를 반환해야 한다', () => {
    expect(user.getWinnerCountResult()).toEqual(INIT_RANK_COUNT);
  });

  test('당첨 번호 개수 결과를 설정해야 한다', () => {
    const newWinnerRankCount = { 1: 2, 2: 1, 3: 0, 4: 0, 5: 0, 6: 0 };
    user.setWinnerCountResult(newWinnerRankCount);
    expect(user.winnerRankCount).toEqual(newWinnerRankCount);
  });

  test('티켓을 설정하고 가져올 수 있어야 한다', () => {
    const tickets = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ];
    user.setTickets(tickets);
    expect(user.tickets).toEqual(tickets);
  });

  test('상금 계산이 정확해야 한다', () => {
    const winnerRankCount = { 1: 2, 2: 1, 3: 0, 4: 0, 5: 0, 6: 0 };
    user.setWinnerCountResult(winnerRankCount);
    user.calculatePrizeAmount();
    const expectedPrize =
      WINNER_PRIZE[1] * winnerRankCount[1] +
      WINNER_PRIZE[2] * winnerRankCount[2];
    expect(user.sumOfPrize).toBe(expectedPrize);
  });

  test('수익률 계산이 정확해야 한다', () => {
    const winnerRankCount = { 1: 2, 2: 1, 3: 0, 4: 0, 5: 0, 6: 0 };
    user.setWinnerCountResult(winnerRankCount);
    user.calculatePrizeAmount();
    const profitRate = (user.sumOfPrize / user.purchaseMoney) * 100;
    expect(user.getProfitRate()).toBe(profitRate.toFixed(1));
  });
});
