import LottoGame from '../src/domain/LottoGame.js';
import { LOTTO_CONDITION } from '../src/constants/constants.js';

describe('로또 게임 테스트', () => {
  const tickets = 3;
  let lottoGame;

  beforeEach(() => {
    lottoGame = new LottoGame();
  });

  test(`${tickets}장의 로또에 숫자 배열 길이가 ${LOTTO_CONDITION.length}개가 맞는지 확인한다.`, () => {
    lottoGame.setLottos(tickets);
    const lottos = lottoGame.getLottos();

    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Array);
      expect(lotto).toHaveLength(LOTTO_CONDITION.length);
    });
  });

  test(`유저의 로또 번호의 당첨 여부를 확인한다. - 당첨 번호만 맞은 경우`, () => {
    const compareResults = [{ matchingCount: 3, hasBonusNumber: false }];
    const result = lottoGame.calculateStatics(compareResults);

    expect(result).toEqual({
      fifth_prize: 1,
      fourth_prize: 0,
      third_prize: 0,
      second_prize: 0,
      first_prize: 0,
    });
  });

  test(`유저의 로또 번호의 당첨 여부를 확인한다. - 당첨 번호와 보너스 번호 모두 맞은 경우`, () => {
    const compareResults = [{ matchingCount: 5, hasBonusNumber: true }];
    const result = lottoGame.calculateStatics(compareResults);

    expect(result).toEqual({
      fifth_prize: 0,
      fourth_prize: 0,
      third_prize: 0,
      second_prize: 1,
      first_prize: 0,
    });
  });

  test(`당첨된 로또의 합산 금액을 제대로 구하는 지 확인한다. - 로또 1개를 사서, 5등인 경우`, () => {
    const totalPrizeAmount = lottoGame.getTotalPrizeAmount({
      fifth_prize: 1,
      fourth_prize: 0,
      third_prize: 0,
      second_prize: 0,
      first_prize: 0,
    });

    expect(totalPrizeAmount).toEqual(5_000);
  });

  test(`당첨된 로또의 합산 금액을 제대로 구하는 지 확인한다. - 로또 3개를 사서, 1,2,3등인 경우`, () => {
    const totalPrizeAmount = lottoGame.getTotalPrizeAmount({
      fifth_prize: 0,
      fourth_prize: 0,
      third_prize: 1,
      second_prize: 1,
      first_prize: 1,
    });

    expect(totalPrizeAmount).toEqual(2_031_500_000);
  });

  test.each([
    [5_000, 8, '62.5'],
    [15_000, 3, '500.0'],
    [1_500_000, 10, '15,000.0'],
  ])(
    '총 합산 금액 "%s"에 대해서, 티켓 %s 장을 구매했을때, 수익률은 %s%여야 한다.',
    (totalPrizeAmount, tickets, profitRatio) => {
      lottoGame.setLottos(tickets);
      expect(lottoGame.getProfitRatio(totalPrizeAmount)).toEqual(profitRatio);
    },
  );
});
