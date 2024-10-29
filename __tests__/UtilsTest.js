import handleError from '../src/utils/handleError.js';

describe('유틸 함수', () => {
  test('handleError의 condition이 true이면 예외가 발생한다. ', () => {
    const message = '[ERROR]';

    expect(() => handleError(true, message)).toThrow(message);
  });
});
