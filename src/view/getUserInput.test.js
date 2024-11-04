import { Console } from '@woowacourse/mission-utils';
import { getUserInput } from './getUserInput';

describe('사용자 입력 받기', () => {
  test('빈 입력 받을시 에러를 반환한다.', () => {
    const spyFn = jest.spyOn(Console, 'readLineAsync');
    // 빈 입력값 받게끔 모킹
    spyFn.mockImplementation(() => '');

    expect(() => getUserInput()).toThrow();
  });
});
