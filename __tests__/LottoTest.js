import { LOTTO } from '../src/constant/index.js';
import Lotto from '../src/Lotto.js';
import { mockRandoms } from '../src/util/testUtil.js';

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

  test.each([
    {
      winningNumbers: [10, 11, 12, 13, 14, 15],
      bonusNumber: 16,
      expectedCount: { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0 },
      description: '하나도 일치하지 않을 때',
    },
    {
      winningNumbers: [1, 2, 3, 10, 11, 12],
      bonusNumber: 13,
      expectedKey: 3,
      description: '3개 일치할 때 3 카운트 증가',
    },
    {
      winningNumbers: [1, 2, 3, 4, 10, 11],
      bonusNumber: 12,
      expectedKey: 4,
      description: '4개 일치할 때 4 카운트 증가',
    },
    {
      winningNumbers: [1, 2, 3, 4, 5, 10],
      bonusNumber: 11,
      expectedKey: 5,
      description: '5개 일치하나 보너스 번호가 아닐 때 5 카운트 증가',
    },
    {
      winningNumbers: [1, 2, 3, 4, 5, 10],
      bonusNumber: 6,
      expectedKey: '5+bonus',
      description:
        '당첨 번호 5개 일치 + 보너스 번호일 때 "5+bonus" 카운트 증가',
    },
    {
      winningNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 10,
      expectedKey: 6,
      description: '6개 일치할 때 6 카운트 증가',
    },
  ])(
    '$description',
    ({ winningNumbers, bonusNumber, expectedCount, expectedKey }) => {
      const lotto = Lotto.purchaseLotto(1)[0];
      lotto.matchNumbers(winningNumbers, bonusNumber);

      if (expectedCount) {
        expect(Lotto.matchedCount).toEqual(expectedCount);
      } else {
        expect(Lotto.matchedCount[expectedKey]).toBe(1);
      }
    },
  );
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

describe('Lotto 클래스의 getTotalProfit 메서드 테스트', () => {
  test.each([
    {
      matchedCount: { 3: 1, 4: 2, 5: 0, '5+bonus': 1, 6: 0 },
      expectedProfit:
        LOTTO.WINNING_AMOUNT['3'] * 1 +
        LOTTO.WINNING_AMOUNT['4'] * 2 +
        LOTTO.WINNING_AMOUNT['5+bonus'] * 1,
      description: '일치한 개수에 따른 총 수익 금액 계산',
    },
    {
      matchedCount: { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0 },
      expectedProfit: 0,
      description: '수익이 0일 때 확인',
    },
    {
      matchedCount: { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 1 },
      expectedProfit: LOTTO.WINNING_AMOUNT[6] * 1,
      description: '6개 일치 시 최대 수익 확인',
    },
  ])('$description', ({ matchedCount, expectedProfit }) => {
    Lotto.matchedCount = matchedCount;
    const totalProfit = Lotto.getTotalProfit();
    expect(totalProfit).toBe(expectedProfit);
  });
});
