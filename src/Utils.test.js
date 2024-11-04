import { printLottoArray } from './Utils';

import { ERROR_MESSAGE_FORMAT_OUTPUT } from './ErrorMessage.js';

describe('Utils 테스트', () => {
  test('printLottoArray() 테스트', () => {
    expect(() => printLottoArray('viva')).toThrow(ERROR_MESSAGE_FORMAT_OUTPUT.nonArray);
    expect(() => printLottoArray(1)).toThrow(ERROR_MESSAGE_FORMAT_OUTPUT.nonArray);
  });
});
