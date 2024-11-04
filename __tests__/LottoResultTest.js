import LottoResult from '../src/models/LottoResult.js';

describe('LottoResult 클래스 테스트', () => {
  let lottoResult;

  beforeEach(() => {
    lottoResult = new LottoResult();
  });

  test('초기 당첨 결과는 모두 0으로 초기화되어야 한다.', () => {
    const initialResults = {
      match3: 0,
      match4: 0,
      match5: 0,
      match5PlusBonus: 0,
      match6: 0,
    };
    expect(lottoResult.getResults()).toEqual(initialResults);
  });

  test('updateResult 메서드가 호출되면 해당 등수의 개수가 증가해야 한다.', () => {
    lottoResult.updateResult('match3');
    lottoResult.updateResult('match5');
    lottoResult.updateResult('match5');
    lottoResult.updateResult('match6');

    const updatedResults = {
      match3: 1,
      match4: 0,
      match5: 2,
      match5PlusBonus: 0,
      match6: 1,
    };
    expect(lottoResult.getResults()).toEqual(updatedResults);
  });

  test('잘못된 등수로 updateResult를 호출해도 예외가 발생하지 않아야 한다.', () => {
    expect(() => {
      lottoResult.updateResult('invalidRank');
    }).not.toThrow();

    const unchangedResults = {
      match3: 0,
      match4: 0,
      match5: 0,
      match5PlusBonus: 0,
      match6: 0,
    };
    expect(lottoResult.getResults()).toEqual(unchangedResults);
  });
});
