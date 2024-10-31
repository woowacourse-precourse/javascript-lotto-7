import InputView from '../src/view/InputView.js';
import { Console } from '@woowacourse/mission-utils';

describe('InputView 클래스 테스트', () => {
  beforeEach(() => {
    jest.spyOn(Console, 'readLine').mockImplementation((_, callback) => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('사용자로부터 입력된 로또 당첨 번호가 올바르게 반환된다.', () => {
    Console.readLine.mockImplementationOnce((_, callback) => {
      callback('1, 2, 3, 4, 5, 6');
    });

    InputView.readWinningNumbers((numbers) => {
      expect(numbers).toBe('1, 2, 3, 4, 5, 6');
    });
  });
});
