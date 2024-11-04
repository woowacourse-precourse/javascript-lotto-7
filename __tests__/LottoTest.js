import { Lotto } from '../src/models/index.js';

describe('로또 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('로또 번호 생성 성공 테스트', () => {
    test('올바른 로또 번호로 인스턴스를 생성할 수 있다.', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const lotto = new Lotto(numbers);

      expect(lotto.getNumbers()).toEqual(numbers);
    });

    test('로또 번호는 오름차순으로 정렬되어야 한다.', () => {
      const numbers = [6, 3, 2, 5, 1, 4];
      const sortedNumbers = [1, 2, 3, 4, 5, 6];
      const lotto = new Lotto(numbers);

      expect(lotto.getNumbers()).toEqual(sortedNumbers);
    });
  });

  describe('로도 번호 생성 예외 테스트', () => {
    test('로또 번호의 개수가 6이 아니면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow('[ERROR]');
    });

    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow('[ERROR]');
    });
  });
});
