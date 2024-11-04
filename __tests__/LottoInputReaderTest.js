import { Console } from '@woowacourse/mission-utils';
import LottoInputReader from '../src/classes/LottoInputReader.js';
import ERROR_MESSAGES from '../src/utills/errors.js';
import Lotto from '../src/classes/Lotto.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
}));

describe('LottoInputReader 클래스 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // 구입 금액 입력 테스트
  test('올바른 구입 금액을 입력하면 금액이 반환된다.', async () => {
    Console.readLineAsync.mockResolvedValue('5000');
    const result = await LottoInputReader.readLottoPurchaseAmount();
    expect(result).toBe(5000);
  });

  test('구입 금액이 비어 있으면 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('');
    await expect(LottoInputReader.readLottoPurchaseAmount()).rejects.toThrow(
      ERROR_MESSAGES.INPUT.EMPTY_INPUT
    );
  });

  test('구입 금액이 숫자가 아니면 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('abc');
    await expect(LottoInputReader.readLottoPurchaseAmount()).rejects.toThrow(
      ERROR_MESSAGES.INPUT.NOT_A_NUMBER
    );
  });

  test('구입 금액이 1000 단위가 아니면 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('1500');
    await expect(LottoInputReader.readLottoPurchaseAmount()).rejects.toThrow(
      ERROR_MESSAGES.INPUT.INVALID_AMOUNT
    );
  });

  test('구입 금액이 음수이거나 0이면 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('-1000');
    await expect(LottoInputReader.readLottoPurchaseAmount()).rejects.toThrow(
      ERROR_MESSAGES.INPUT.NEGATIVE_OR_ZERO_AMOUNT
    );
  });

  // 당첨 번호 입력 테스트
  test('올바른 당첨 번호를 입력하면 Lotto 인스턴스가 반환된다.', async () => {
    Console.readLineAsync.mockResolvedValue('1,2,3,4,5,6');
    const result = await LottoInputReader.readWinningNumbers();
    expect(result).toBeInstanceOf(Lotto);
  });

  test('당첨 번호 입력이 비어 있으면 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('');
    await expect(LottoInputReader.readWinningNumbers()).rejects.toThrow(
      ERROR_MESSAGES.INPUT.EMPTY_INPUT
    );
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('1,2,3,3,4,5');
    await expect(LottoInputReader.readWinningNumbers()).rejects.toThrow(
      ERROR_MESSAGES.LOTTO.DUPLICATE_NUMBERS
    );
  });

  test('당첨 번호가 1 미만이거나 45 초과인 경우 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('0,2,3,4,5,6');
    await expect(LottoInputReader.readWinningNumbers()).rejects.toThrow(
      ERROR_MESSAGES.LOTTO.INVALID_RANGE
    );

    Console.readLineAsync.mockResolvedValue('1,2,3,4,5,46');
    await expect(LottoInputReader.readWinningNumbers()).rejects.toThrow(
      ERROR_MESSAGES.LOTTO.INVALID_RANGE
    );
  });

  // 보너스 번호 입력 테스트
  test('올바른 보너스 번호를 입력하면 번호가 반환된다.', async () => {
    Console.readLineAsync.mockResolvedValue('7');
    LottoInputReader.setWinningNumbers(new Lotto([1, 2, 3, 4, 5, 6]));
    const result = await LottoInputReader.readBonusNumber();
    expect(result).toBe(7);
  });

  test('보너스 번호 입력이 비어 있으면 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('');
    await expect(LottoInputReader.readBonusNumber()).rejects.toThrow(
      ERROR_MESSAGES.INPUT.EMPTY_INPUT
    );
  });

  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('abc');
    await expect(LottoInputReader.readBonusNumber()).rejects.toThrow(
      ERROR_MESSAGES.INPUT.NOT_A_NUMBER
    );
  });

  test('보너스 번호가 당첨 번호에 중복되면 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('6');
    LottoInputReader.setWinningNumbers(new Lotto([1, 2, 3, 4, 5, 6]));
    await expect(LottoInputReader.readBonusNumber()).rejects.toThrow(
      ERROR_MESSAGES.LOTTO.DUPLICATE_NUMBERS
    );
  });

  test('보너스 번호가 1 미만이거나 45 초과인 경우 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('0');
    await expect(LottoInputReader.readBonusNumber()).rejects.toThrow(
      ERROR_MESSAGES.LOTTO.INVALID_RANGE
    );

    Console.readLineAsync.mockResolvedValue('46');
    await expect(LottoInputReader.readBonusNumber()).rejects.toThrow(
      ERROR_MESSAGES.LOTTO.INVALID_RANGE
    );
  });
});
