import Winnings from '../../src/domain/Winnings.js';

describe('당첨 내역 테스트', () => {
  test('모두 일치하는 것이 3개 미만이면 모든 내역이 0개로 반환된다.', () => {
    // given
    const LOTTOS = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ];
    const WINNING_NUMBERS = [1, 7, 13, 14, 15, 16];
    const BONUS_NUMBER = 17;
    const STATS =
      '3개 일치 (5,000원) - 0개\n4개 일치 (50,000원) - 0개\n5개 일치 (1,500,000원) - 0개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 0개\n6개 일치 (2,000,000,000원) - 0개';
    const LIST = [
      ['3개 일치 (5,000원)', 0],
      ['4개 일치 (50,000원)', 0],
      ['5개 일치 (1,500,000원)', 0],
      ['5개 일치, 보너스 볼 일치 (30,000,000원)', 0],
      ['6개 일치 (2,000,000,000원)', 0],
    ];

    // when
    const { winningStats, winningList } = new Winnings(
      LOTTOS,
      WINNING_NUMBERS,
      BONUS_NUMBER,
    ).getWinningsInfo();

    // then
    expect(winningStats).toBe(STATS);
    expect(winningList).toStrictEqual(LIST);
  });

  test.each([
    [[[1, 2, 3, 4, 5, 6]], [1, 2, 3, 7, 8, 9]],
    [[[7, 8, 9, 10, 11, 12]], [7, 9, 11, 13, 15, 18]],
    [[[39, 40, 41, 42, 43, 44]], [1, 2, 3, 39, 41, 43]],
  ])(
    '일치하는 번호가 3개면 해당 3개 일치 내역에 반영되어 반환된다.',
    (lottos, winningNumbers) => {
      // given
      const BONUS_NUMBER = 17;
      const STATS =
        '3개 일치 (5,000원) - 1개\n4개 일치 (50,000원) - 0개\n5개 일치 (1,500,000원) - 0개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 0개\n6개 일치 (2,000,000,000원) - 0개';
      const LIST = [
        ['3개 일치 (5,000원)', 1],
        ['4개 일치 (50,000원)', 0],
        ['5개 일치 (1,500,000원)', 0],
        ['5개 일치, 보너스 볼 일치 (30,000,000원)', 0],
        ['6개 일치 (2,000,000,000원)', 0],
      ];

      // when
      const { winningStats, winningList } = new Winnings(
        lottos,
        winningNumbers,
        BONUS_NUMBER,
      ).getWinningsInfo();

      // then
      expect(winningStats).toBe(STATS);
      expect(winningList).toStrictEqual(LIST);
    },
  );

  test.each([
    [[[1, 2, 3, 4, 5, 6]], [1, 2, 3, 4, 8, 9]],
    [[[7, 8, 9, 10, 11, 12]], [7, 9, 11, 12, 15, 18]],
    [[[39, 40, 41, 42, 43, 44]], [2, 3, 39, 41, 43, 44]],
  ])(
    '일치하는 번호가 4개면 해당 4개 일치 내역에 반영되어 반환된다.',
    (lottos, winningNumbers) => {
      // given
      const BONUS_NUMBER = 17;
      const STATS =
        '3개 일치 (5,000원) - 0개\n4개 일치 (50,000원) - 1개\n5개 일치 (1,500,000원) - 0개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 0개\n6개 일치 (2,000,000,000원) - 0개';
      const LIST = [
        ['3개 일치 (5,000원)', 0],
        ['4개 일치 (50,000원)', 1],
        ['5개 일치 (1,500,000원)', 0],
        ['5개 일치, 보너스 볼 일치 (30,000,000원)', 0],
        ['6개 일치 (2,000,000,000원)', 0],
      ];

      // when
      const { winningStats, winningList } = new Winnings(
        lottos,
        winningNumbers,
        BONUS_NUMBER,
      ).getWinningsInfo();

      // then
      expect(winningStats).toBe(STATS);
      expect(winningList).toStrictEqual(LIST);
    },
  );

  test.each([
    [[[1, 2, 3, 4, 5, 6]], [1, 2, 3, 4, 5, 9]],
    [[[7, 8, 9, 10, 11, 12]], [7, 8, 9, 11, 12, 15]],
    [[[39, 40, 41, 42, 43, 44]], [2, 39, 41, 42, 43, 44]],
  ])(
    '일치하는 번호가 5개인데, 보너스 번호와 일치하지 않으면 해당 5개 일치에 반영되어 반환된다.',
    (lottos, winningNumbers) => {
      // given
      const BONUS_NUMBER = 17;
      const STATS =
        '3개 일치 (5,000원) - 0개\n4개 일치 (50,000원) - 0개\n5개 일치 (1,500,000원) - 1개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 0개\n6개 일치 (2,000,000,000원) - 0개';
      const LIST = [
        ['3개 일치 (5,000원)', 0],
        ['4개 일치 (50,000원)', 0],
        ['5개 일치 (1,500,000원)', 1],
        ['5개 일치, 보너스 볼 일치 (30,000,000원)', 0],
        ['6개 일치 (2,000,000,000원)', 0],
      ];

      // when
      const { winningStats, winningList } = new Winnings(
        lottos,
        winningNumbers,
        BONUS_NUMBER,
      ).getWinningsInfo();

      // then
      expect(winningStats).toBe(STATS);
      expect(winningList).toStrictEqual(LIST);
    },
  );

  test.each([
    [[[1, 2, 3, 4, 5, 17]], [1, 2, 3, 4, 5, 9]],
    [[[10, 11, 17, 18, 20, 21]], [7, 10, 11, 18, 20, 21]],
    [[[17, 39, 40, 41, 42, 43, 44]], [2, 39, 41, 42, 43, 44]],
  ])(
    '일치하는 번호가 5개인데, 보너스 번호와 일치하면 해당 5개 일치, 보너스 볼 일치에 반영되어 반환된다.',
    (lottos, winningNumbers) => {
      // given
      const BONUS_NUMBER = 17;
      const STATS =
        '3개 일치 (5,000원) - 0개\n4개 일치 (50,000원) - 0개\n5개 일치 (1,500,000원) - 0개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 1개\n6개 일치 (2,000,000,000원) - 0개';
      const LIST = [
        ['3개 일치 (5,000원)', 0],
        ['4개 일치 (50,000원)', 0],
        ['5개 일치 (1,500,000원)', 0],
        ['5개 일치, 보너스 볼 일치 (30,000,000원)', 1],
        ['6개 일치 (2,000,000,000원)', 0],
      ];

      // when
      const { winningStats, winningList } = new Winnings(
        lottos,
        winningNumbers,
        BONUS_NUMBER,
      ).getWinningsInfo();

      // then
      expect(winningStats).toBe(STATS);
      expect(winningList).toStrictEqual(LIST);
    },
  );

  test.each([
    [[[1, 2, 3, 4, 5, 6]], [1, 2, 3, 4, 5, 6]],
    [[[7, 8, 9, 10, 11, 12]], [7, 8, 9, 10, 11, 12]],
    [[[20, 21, 22, 23, 24, 25]], [20, 21, 22, 23, 24, 25]],
  ])(
    '일치하는 번호가 보너스 번호와 모두 일치하면 해당 6개 일치에 반영되어 반환된다.',
    (lottos, winningNumbers) => {
      // given
      const BONUS_NUMBER = 17;
      const STATS =
        '3개 일치 (5,000원) - 0개\n4개 일치 (50,000원) - 0개\n5개 일치 (1,500,000원) - 0개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 0개\n6개 일치 (2,000,000,000원) - 1개';
      const LIST = [
        ['3개 일치 (5,000원)', 0],
        ['4개 일치 (50,000원)', 0],
        ['5개 일치 (1,500,000원)', 0],
        ['5개 일치, 보너스 볼 일치 (30,000,000원)', 0],
        ['6개 일치 (2,000,000,000원)', 1],
      ];

      // when
      const { winningStats, winningList } = new Winnings(
        lottos,
        winningNumbers,
        BONUS_NUMBER,
      ).getWinningsInfo();

      // then
      expect(winningStats).toBe(STATS);
      expect(winningList).toStrictEqual(LIST);
    },
  );
  test('발행한 로또 수가 여섯 개고, 일치하는 숫자가 순서대로 2개, 3개, 3개, 4개, 5개, 5개에 보너스 일치면 해당 내역이 알맞게 적용되어 반환된다.', () => {
    // given
    const LOTTOS = [
      [1, 3, 5, 7, 9, 10],
      [7, 17, 20, 40, 41, 42],
      [17, 20, 22, 27, 40, 41],
      [2, 7, 10, 17, 20, 40],
      [3, 7, 10, 17, 27, 37],
      [7, 10, 17, 27, 37, 40],
    ];
    const WINNING_NUMBERS = [7, 10, 17, 20, 27, 37];
    const BONUS_NUMBER = 40;
    const STATS =
      '3개 일치 (5,000원) - 2개\n4개 일치 (50,000원) - 1개\n5개 일치 (1,500,000원) - 1개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 1개\n6개 일치 (2,000,000,000원) - 0개';
    const LIST = [
      ['3개 일치 (5,000원)', 2],
      ['4개 일치 (50,000원)', 1],
      ['5개 일치 (1,500,000원)', 1],
      ['5개 일치, 보너스 볼 일치 (30,000,000원)', 1],
      ['6개 일치 (2,000,000,000원)', 0],
    ];

    // when
    const { winningStats, winningList } = new Winnings(
      LOTTOS,
      WINNING_NUMBERS,
      BONUS_NUMBER,
    ).getWinningsInfo();

    // then
    expect(winningStats).toBe(STATS);
    expect(winningList).toStrictEqual(LIST);
  });
});
