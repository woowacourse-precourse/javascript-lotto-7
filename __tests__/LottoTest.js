import Lotto from '../src/Lotto';
import { mockRandoms } from './testUtil';

describe('Lotto 클래스의 purchaseLotto 메서드 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('6개의 로또 번호가 오름차순으로 정렬되어 지정된 개수만큼 나온다.', () => {
    mockRandoms([
      [43, 42, 23, 21, 41, 8],
      [38, 16, 11, 5, 32, 3],
    ]);

    const lottoList = Lotto.purchaseLotto(2);
    const expectedList = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ];

    lottoList.forEach((lotto, idx) => {
      expect(lotto.numbers).toEqual(expectedList[idx]);
    });
  });
});

describe('Lotto 클래스의 matchNumbers 메서드 테스트', () => {
  beforeEach(() => {
    Lotto.matchedCount = { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0 };
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
  });

  test('하나도 일치하지 않을 때', () => {
    const lotto = Lotto.purchaseLotto(1)[0];
    lotto.matchNumbers([10, 11, 12, 13, 14, 15], 16);
    expect(Lotto.matchedCount).toEqual({
      3: 0,
      4: 0,
      5: 0,
      '5+bonus': 0,
      6: 0,
    });
  });

  test('3개 일치할 때 3 카운트 증가', () => {
    const lotto = Lotto.purchaseLotto(1)[0];
    lotto.matchNumbers([1, 2, 3, 10, 11, 12], 13);
    expect(Lotto.matchedCount[3]).toBe(1);
  });

  test('4개 일치할 때 4 카운트 증가', () => {
    const lotto = Lotto.purchaseLotto(1)[0];
    lotto.matchNumbers([1, 2, 3, 4, 10, 11], 12);
    expect(Lotto.matchedCount[4]).toBe(1);
  });

  test('5개 일치하나 보너스 번호가 아닐 때 5 카운트 증가', () => {
    const lotto = Lotto.purchaseLotto(1)[0];
    lotto.matchNumbers([1, 2, 3, 4, 5, 10], 11);
    expect(Lotto.matchedCount[5]).toBe(1);
  });

  test('당첨 번호 5개 일치 + 보너스 번호일 때 "5+bonus" 카운트 증가', () => {
    const lotto = Lotto.purchaseLotto(1)[0];
    lotto.matchNumbers([1, 2, 3, 4, 5, 10], 6);
    expect(Lotto.matchedCount['5+bonus']).toBe(1);
  });

  test('6개 일치할 때 6 카운트 증가', () => {
    const lotto = Lotto.purchaseLotto(1)[0];
    lotto.matchNumbers([1, 2, 3, 4, 5, 6], 10);
    expect(Lotto.matchedCount[6]).toBe(1);
  });
});

describe('다수의 matchNumbers 메서드 테스트', () => {
  beforeEach(() => {
    Lotto.matchedCount = { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0 };
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ]);
  });

  test('3개 일치하는 것 하나, 5개 + bonus 일치하는 것 하나 카운트 증가', () => {
    const lottoList = Lotto.purchaseLotto(2);
    lottoList[0].matchNumbers([1, 2, 3, 10, 11, 12], 13);
    lottoList[1].matchNumbers([1, 2, 3, 4, 5, 10], 6);
    expect(Lotto.matchedCount).toEqual({
      3: 1,
      4: 0,
      5: 0,
      '5+bonus': 1,
      6: 0,
    });
  });
});
