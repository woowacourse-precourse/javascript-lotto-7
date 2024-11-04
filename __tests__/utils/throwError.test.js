import { throwError } from '../../src/utils/throwError';

describe('throwError', () => {
  test('주어진 메시지와 함께 에러를 발생시킨다.', () => {
    const errorMessage = '테스트 에러 메시지';

    expect(() => {
      throwError(errorMessage);
    }).toThrow(`[ERROR] ${errorMessage}`);
  });

  test('빈 메시지를 전달하면 "[ERROR]" 형식의 에러가 발생한다.', () => {
    expect(() => {
      throwError('');
    }).toThrow('[ERROR]');
  });
});
