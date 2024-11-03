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

  test('3개 일치, 보너스 번호 불일치 결과 검증', () => {
    // given
    const matchCount = 3;
    const isBonusMatch = false;

    // when
    lottoResult.saveResult(matchCount, isBonusMatch);

    // then
    const result = lottoResult.getResult();
    const resultPrice = lottoResult.getResultPrice();

    expect(result).toEqual({
      [WINNING_CONDITIONS_DESC.MATCH_3]: 1,
      [WINNING_CONDITIONS_DESC.MATCH_4]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_5]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_6]: 0,
    });
    expect(resultPrice).toBe(
      LOTTO_CONFIG.WINNING_PRIZE_MAP[
        LOTTO_CONFIG.WINNING_CONDITIONS[matchCount][isBonusMatch]
      ],
    );
  });

  test('3개 일치, 보너스 번호 일치 결과 검증', () => {
    // given
    const matchCount = 3;
    const isBonusMatch = true;

    // when
    lottoResult.saveResult(matchCount, isBonusMatch);

    // then
    const result = lottoResult.getResult();
    const resultPrice = lottoResult.getResultPrice();

    expect(result).toEqual({
      [WINNING_CONDITIONS_DESC.MATCH_3]: 1,
      [WINNING_CONDITIONS_DESC.MATCH_4]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_5]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_6]: 0,
    });
    expect(resultPrice).toBe(
      LOTTO_CONFIG.WINNING_PRIZE_MAP[
        LOTTO_CONFIG.WINNING_CONDITIONS[matchCount][isBonusMatch]
      ],
    );
  });

  test('4개 일치, 보너스 번호 일치 결과 검증', () => {
    // given
    const matchCount = 4;
    const isBonusMatch = true;

    // when
    lottoResult.saveResult(matchCount, isBonusMatch);

    // then
    const result = lottoResult.getResult();
    const resultPrice = lottoResult.getResultPrice();

    expect(result).toEqual({
      [WINNING_CONDITIONS_DESC.MATCH_3]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_4]: 1,
      [WINNING_CONDITIONS_DESC.MATCH_5]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_6]: 0,
    });
    expect(resultPrice).toBe(
      LOTTO_CONFIG.WINNING_PRIZE_MAP[
        LOTTO_CONFIG.WINNING_CONDITIONS[matchCount][isBonusMatch]
      ],
    );
  });

  test('5개 일치, 보너스 번호 불일치 결과 검증', () => {
    // given
    const matchCount = 5;
    const isBonusMatch = false;

    // when
    lottoResult.saveResult(matchCount, isBonusMatch);

    // then
    const result = lottoResult.getResult();
    const resultPrice = lottoResult.getResultPrice();

    expect(result).toEqual({
      [WINNING_CONDITIONS_DESC.MATCH_3]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_4]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_5]: 1,
      [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_6]: 0,
    });
    expect(resultPrice).toBe(
      LOTTO_CONFIG.WINNING_PRIZE_MAP[
        LOTTO_CONFIG.WINNING_CONDITIONS[matchCount][isBonusMatch]
      ],
    );
  });

  test('5개 및 보너스 번호 일치 결과 검증', () => {
    // given
    const matchCount = 5;
    const isBonusMatch = true;

    // when
    lottoResult.saveResult(matchCount, isBonusMatch);

    // then
    const result = lottoResult.getResult();
    const resultPrice = lottoResult.getResultPrice();

    expect(result).toEqual({
      [WINNING_CONDITIONS_DESC.MATCH_3]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_4]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_5]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 1,
      [WINNING_CONDITIONS_DESC.MATCH_6]: 0,
    });
    expect(resultPrice).toBe(
      LOTTO_CONFIG.WINNING_PRIZE_MAP[
        LOTTO_CONFIG.WINNING_CONDITIONS[matchCount][isBonusMatch]
      ],
    );
  });

  test('6개 일치, 보너스 번호 일치 결과 검증', () => {
    // given
    const matchCount = 6;
    const isBonusMatch = true;

    // when
    lottoResult.saveResult(matchCount, isBonusMatch);

    // then
    const result = lottoResult.getResult();
    const resultPrice = lottoResult.getResultPrice();

    expect(result).toEqual({
      [WINNING_CONDITIONS_DESC.MATCH_3]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_4]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_5]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 0,
      [WINNING_CONDITIONS_DESC.MATCH_6]: 1,
    });
    expect(resultPrice).toBe(
      LOTTO_CONFIG.WINNING_PRIZE_MAP[
        LOTTO_CONFIG.WINNING_CONDITIONS[matchCount][isBonusMatch]
      ],
    );
  });
});
