import Generator from '../src/Generator';
import Lotto from '../src/Lotto';

describe('Generator 클래스 테스트', () => {
   test('calculateTimes 메서드 테스트', () => {
      const amount = 10000;
      const generator = new Generator();
      const result = generator.calculateTimes(amount);
      expect(result).toBe(10);
   });

   test('sortNumbers 메서드 테스트', () => {
      const numbers = [2, 1, 3, 5, 6, 4];
      const generator = new Generator();
      const result = generator.sortNumbers(numbers);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
   });

   test('createRealLotto 메서드 테스트', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const generator = new Generator();
      const result = generator.createRealLotto(numbers);
      expect(result).toEqual(new Lotto(numbers));
   });
});
