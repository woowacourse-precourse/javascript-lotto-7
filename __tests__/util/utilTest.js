import { _pipe } from '../../src/util/util.js';

describe('유틸리티 함수 테스트', () => {
  describe('_pipe', () => {
    test('함수들을 순차적으로 실행해야 한다', () => {
      const addTwo = (x) => x + 2;
      const multiplyByThree = (x) => x * 3;
      const minusOne = (x) => x - 1;

      const pipedFunction = _pipe(addTwo, multiplyByThree, minusOne);
      expect(pipedFunction(5)).toBe(20);
    });
  });
});
