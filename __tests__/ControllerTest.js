import Controller from '../src/controllers/Controller.js';
import { PRIZE } from '../src/constants/LOTTO_CONSTANTS.js';

describe('계산 관련 테스트', () => {
  let controller;

  beforeEach(() => {
    controller = new Controller();
    controller.generator = { getPurchaseAmount: jest.fn(() => 5000) }; // 구입 금액을 5000원으로 설정
  });

  test('수익률을 올바르게 계산한다.', () => {
    // 등수별 당첨 횟수를 설정
    controller.rankingCount = {
      first: 0,
      second: 0,
      third: 1, // 3등 한 번
      fourth: 0,
      fifth: 2 // 5등 두 번
    };

    const profitRate = controller.calculateProfitRate(); // 수익률 계산

    const expectedPrize =
      PRIZE.THIRD.PRIZE_AMOUNT * 1 + // 3등 한 번
      PRIZE.FIFTH.PRIZE_AMOUNT * 2; // 5등 두 번

    const expectedProfitRate =
      (expectedPrize / controller.generator.getPurchaseAmount()) * 100;

    expect(profitRate).toBe(expectedProfitRate);
  });

  test('일치하는 번호에 따라 등수를 올바르게 계산한다.', () => {
    const generatedNumbers = [1, 2, 3, 4, 5, 6]; // 생성된 로또 번호

    controller.bonusNumber = null; // 보너스 번호는 없다고 가정

    controller.calculateRank(6, generatedNumbers); // 번호가 모두 일치 (1등)

    expect(controller.rankingCount.first).toBe(1); // 첫 번째 등수가 증가했는지 확인

    controller.calculateRank(5, generatedNumbers); // 번호가 다섯 개 일치 (3등)

    expect(controller.rankingCount.third).toBe(1); // 세 번째 등수가 증가했는지 확인

    controller.bonusNumber = generatedNumbers[5]; // 보너스 번호를 설정 (두 번째 등수)

    controller.calculateRank(5, generatedNumbers); // 번호가 다섯 개 일치 + 보너스 번호 일치 (2등)

    expect(controller.rankingCount.second).toBe(1); // 두 번째 등수가 증가했는지 확인
  });
});
