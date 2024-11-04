import VerifyingLotto from '../src/VerifyingLotto.js';
import LottoPublication from '../src/LottoPublication.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 검증 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("로또 검증 시 매치된 번호의 개수대로 WinningHistory가 작성돼야 한다.", () => {
    mockRandoms([
      [8, 11, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 23, 32, 38],
      [8, 11, 16, 23, 32, 38]
    ]);

    const verifyingLotto = new VerifyingLotto();
    const lottoPublication = new LottoPublication();

    lottoPublication.publicationLotto(4);
    verifyingLotto.verifyWinningLottoList(
      [8, 11, 16, 23, 32, 38],
      7,
      lottoPublication.getPublishedLottoList()
    );

    expect(verifyingLotto.getWinningHistory()).toEqual({
      FIRST: 1,
      SECOND: 1,
      THIRD: 0,
      FOURTH: 1,
      FIFTH: 1
    });
  });
});
