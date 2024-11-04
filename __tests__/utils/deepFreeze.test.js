import deepFreeze from '../../src/utils/deepFreeze';

describe('deepFreeze', () => {
  const RANK = deepFreeze({
    FIRST: {
      matchCount: 6,
      prize: 2_000_000_000,
    },
    SECOND: {
      matchCount: 5.5,
      prize: 30_000_000,
    },
    THIRD: {
      matchCount: 5,
      prize: 1_500_000,
    },
    FOURTH: {
      matchCount: 4,
      prize: 50_000,
    },
    FIFTH: {
      matchCount: 3,
      prize: 5_000,
    },
  });

  test('기존 속성을 수정하려고 할 때 예외가 발생해야 한다.', () => {
    expect(() => {
      RANK.FIRST.prize = 1_000_000;
    }).toThrow();
  });

  test('새로운 속성을 추가하려고 할 때 예외가 발생해야 한다.', () => {
    expect(() => {
      RANK.NEW_RANK = { matchCount: 7, prize: 1_000_000 };
    }).toThrow();
  });

  test('기존 속성을 삭제하려고 할 때 예외가 발생해야 한다.', () => {
    expect(() => {
      delete RANK.FIFTH;
    }).toThrow();
  });

  test('기존 속성을 정상적으로 읽을 수 있어야 한다.', () => {
    expect(RANK.FIRST.prize).toBe(2_000_000_000);
  });

  test('중첩 객체의 속성을 수정하려고 할 때 예외가 발생해야 한다.', () => {
    expect(() => {
      RANK.SECOND.prize = 50_000;
    }).toThrow();
  });
});
