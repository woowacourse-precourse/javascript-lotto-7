import {
  LOTTO_CONFIG,
  WINNING_CONDITIONS_DESC,
} from '../src/constants/lottoConfig.js';
import LottoResult from '../src/models/LottoResult.js';

describe('로또 결과 기능 테스트', () => {
  let lottoResult;

  // 각 테스트마다 새로운 인스턴스를 생성
  beforeEach(() => {
    lottoResult = new LottoResult();
  });

  test.each([
    {
      description: '3개 일치, 보너스 번호 불일치 결과 검증',
      matchCount: 3,
      isBonusMatch: false,
      expectedResult: {
        [WINNING_CONDITIONS_DESC.MATCH_3]: 1,
        [WINNING_CONDITIONS_DESC.MATCH_4]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_5]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_6]: 0,
      },
    },
    {
      description: '3개 일치, 보너스 번호 일치 결과 검증',
      matchCount: 3,
      isBonusMatch: true,
      expectedResult: {
        [WINNING_CONDITIONS_DESC.MATCH_3]: 1,
        [WINNING_CONDITIONS_DESC.MATCH_4]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_5]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_6]: 0,
      },
    },
    {
      description: '4개 일치, 보너스 번호 일치 결과 검증',
      matchCount: 4,
      isBonusMatch: true,
      expectedResult: {
        [WINNING_CONDITIONS_DESC.MATCH_3]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_4]: 1,
        [WINNING_CONDITIONS_DESC.MATCH_5]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_6]: 0,
      },
    },
    {
      description: '5개 일치, 보너스 번호 불일치 결과 검증',
      matchCount: 5,
      isBonusMatch: false,
      expectedResult: {
        [WINNING_CONDITIONS_DESC.MATCH_3]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_4]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_5]: 1,
        [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_6]: 0,
      },
    },
    {
      description: '5개 일치 및 보너스 번호 일치 결과 검증',
      matchCount: 5,
      isBonusMatch: true,
      expectedResult: {
        [WINNING_CONDITIONS_DESC.MATCH_3]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_4]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_5]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 1,
        [WINNING_CONDITIONS_DESC.MATCH_6]: 0,
      },
    },
    {
      description: '6개 일치, 보너스 번호 일치 결과 검증',
      matchCount: 6,
      isBonusMatch: true,
      expectedResult: {
        [WINNING_CONDITIONS_DESC.MATCH_3]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_4]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_5]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 0,
        [WINNING_CONDITIONS_DESC.MATCH_6]: 1,
      },
    },
  ])(
    '$description',
    ({ matchCount, isBonusMatch, expectedResult }) => {
      // given
      const expectedResultPrice = LOTTO_CONFIG.WINNING_PRIZE_MAP[
        LOTTO_CONFIG.WINNING_CONDITIONS[matchCount][isBonusMatch]
        ];

      // when
      lottoResult.saveResult(matchCount, isBonusMatch);

      // then
      const result = lottoResult.getResult();
      const resultPrice = lottoResult.getResultPrice();

      expect(result).toEqual(expectedResult);
      expect(resultPrice).toBe(expectedResultPrice);
    }
  );
});
