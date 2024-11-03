import { lottoConfig } from '../src/models/lottoConfig.js';
import LottoResult from '../src/models/LottoResult.js';

describe('로또 결과 기능 테스트', () => {
  let lottoResult;

  beforeEach(() => {
    lottoResult = new LottoResult(); // 각 테스트마다 새로운 인스턴스를 생성
  });

  test('3개 일치, 보너스 번호 불일치 결과 검증', () => {
    lottoResult.saveResult(3, false);

    const result = lottoResult.getResult();
    expect(result).toEqual({
      '3개 일치': 1,
      '4개 일치': 0,
      '5개 일치': 0,
      '5개 일치, 보너스 볼 일치': 0,
      '6개 일치': 0,
    });
  });

  test('3개 일치, 보너스 번호 일치 결과 검증', () => {
    lottoResult.saveResult(3, true);

    const result = lottoResult.getResult();
    expect(result).toEqual({
      '3개 일치': 1,
      '4개 일치': 0,
      '5개 일치': 0,
      '5개 일치, 보너스 볼 일치': 0,
      '6개 일치': 0,
    });
  });

  test('4개 일치, 보너스 번호 일치 결과 검증', () => {
    lottoResult.saveResult(4, true);

    const result = lottoResult.getResult();
    expect(result).toEqual({
      '3개 일치': 0,
      '4개 일치': 1,
      '5개 일치': 0,
      '5개 일치, 보너스 볼 일치': 0,
      '6개 일치': 0,
    });
  });

  test('5개 일치, 보너스 번호 불일치 결과 검증', () => {
    lottoResult.saveResult(5, false);

    const result = lottoResult.getResult();
    expect(result).toEqual({
      '3개 일치': 0,
      '4개 일치': 0,
      '5개 일치': 1,
      '5개 일치, 보너스 볼 일치': 0,
      '6개 일치': 0,
    });
  });

  test('5개 및 보너스 번호 일치 결과 검증', () => {
    lottoResult.saveResult(5, true);

    const result = lottoResult.getResult();
    expect(result).toEqual({
      '3개 일치': 0,
      '4개 일치': 0,
      '5개 일치': 0,
      '5개 일치, 보너스 볼 일치': 1,
      '6개 일치': 0,
    });
  });

  test('6개 일치, 보너스 번호 일치 결과 검증', () => {
    lottoResult.saveResult(6, true);

    const result = lottoResult.getResult();
    expect(result).toEqual({
      '3개 일치': 0,
      '4개 일치': 0,
      '5개 일치': 0,
      '5개 일치, 보너스 볼 일치': 0,
      '6개 일치': 1,
    });
  });
});
