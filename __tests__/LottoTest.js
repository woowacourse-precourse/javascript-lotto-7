import Lotto from "../src/Lotto";
import { Random } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
}));

describe("로또 클래스 테스트", () => {
  beforeEach(() => {
    Random.pickUniqueNumbersInRange.mockClear();
  });

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test('로또 번호가 1~45의 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 정상적이면 예외가 발생하지 않는다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });

  test('getNumbers()가 생성된 로또 번호를 반환한다.', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);
    expect(lotto.getNumbers()).toEqual(numbers);
  });

  test('Lotto.generate()가 중복되지 않는 1~45 범위의 6개 숫자를 생성한다.', () => {
    Random.pickUniqueNumbersInRange.mockReturnValue([10, 20, 30, 40, 5, 15]);

    const lotto = Lotto.generate();
    const numbers = lotto.getNumbers();

    expect(numbers.length).toBe(6);
    expect(new Set(numbers).size).toBe(6);
    expect(numbers).toEqual(expect.arrayContaining([5, 10, 15, 20, 30, 40])); // 순서 상관없이 포함 여부 확인
    numbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    });
  });
});
