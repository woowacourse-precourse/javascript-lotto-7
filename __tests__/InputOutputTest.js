import { inputMethod } from '../src/utils/index.js';
import validation from '../src/validation.js';

describe('입력문에 대한 테스트', () => {
  test.each(['100+100', 's20f', '@GJe22'])(
    '숫자만 입력되어야 한다.',
    (numberStr) => {
      expect(() => validation.isNotNumber(numberStr)).toThrow();
    },
  );

  test.each(['-100', '0'])('양수만 입력해야 한다.', (numberStr) => {
    expect(() => validation.isNotPositiveNumber(numberStr)).toThrow();
  });
});
