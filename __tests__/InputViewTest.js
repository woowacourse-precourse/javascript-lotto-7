import InputView from '../src/view/InputView.js';
import { Console } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
    readLineAsync: jest.fn(),
  },
}));

describe('InputView 클래스 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('사용자로부터 입력된 로또 당첨 번호가 올바르게 반환된다.', () => {
    Console.readLineAsync.mockResolvedValueOnce((_, callback) => {
      callback('1, 2, 3, 4, 5, 6');
    });

    InputView.readWinningNumbers((numbers) => {
      expect(numbers).toBe('1, 2, 3, 4, 5, 6');
    });
  });

  test('사용자로부터 입력된 보너스 번호가 올바르게 반환된다.', () => {
    Console.readLineAsync.mockResolvedValueOnce((_, callback) => {
      callback('5');
    });

    InputView.readBonusNumber((numbers) => {
      expect(numbers).toBe('5');
    });

    Console.readLineAsync.mockResolvedValueOnce((_, callback) => {
      callback('25');
    });

    InputView.readBonusNumber((numbers) => {
      expect(numbers).toBe('25');
    });
  });

  test('사용자로부터 입력된 로또 구입 금액이 올바르게 반환된다.', () => {
    Console.readLineAsync.mockResolvedValueOnce((_, callback) => {
      callback('5000');
    });

    InputView.readPurchaseAmount((numbers) => {
      expect(numbers).toBe('5000');
    });

    Console.readLineAsync.mockResolvedValueOnce((_, callback) => {
      callback('23000');
    });

    InputView.readPurchaseAmount((numbers) => {
      expect(numbers).toBe('23000');
    });
  });
});
