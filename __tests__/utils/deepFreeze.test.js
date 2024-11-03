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

  test('기존 속성 수정 방지', () => {
    expect(() => {
      RANK.FIRST.prize = 1_000_000;
    }).toThrow();
  });

  test('새로운 속성 추가 방지', () => {
    expect(() => {
      RANK.NEW_RANK = { matchCount: 7, prize: 1_000_000 };
    }).toThrow();
  });

  test('속성 삭제 방지', () => {
    expect(() => {
      delete RANK.FIFTH;
    }).toThrow();
  });

  test('기존 속성 읽기', () => {
    expect(RANK.FIRST.prize).toBe(2_000_000_000);
  });

  test('중첩 객체 동결 확인', () => {
    expect(() => {
      RANK.SECOND.prize = 50_000;
    }).toThrow();
  });
});
