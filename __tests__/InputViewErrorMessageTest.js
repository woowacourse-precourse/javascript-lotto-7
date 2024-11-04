import { Console } from '@woowacourse/mission-utils';
import {
  inputBonusNumber,
  inputPurchaseAmount,
  inputWinningNumbers,
} from '../src/utils/io/InputView';
import INPUTMONEY from '../src/resources/ERROR/INPUTMONEY';
import WINNINGNUMBERS from '../src/resources/ERROR/WINNINGNUMBERS';
import BONUSNUMBER from '../src/resources/ERROR/BONUSNUMBER';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
}));

describe('InputView 테스트 - 오류 메시지 검증', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  // 올바른 값이 입력되지 않으면 Prompt가 종료되지 않으므로,
  // 두 번째 입력에는 올바른 값을 넣는다.
  test('구매 금액 빈 문자열 입력 시 NOT_TYPED 에러 메시지 출력', async () => {
    Console.readLineAsync
      .mockResolvedValueOnce('')
      .mockResolvedValueOnce('1000');

    await inputPurchaseAmount();
    expect(Console.print).toHaveBeenCalledWith(INPUTMONEY.NOT_TYPED);
  });

  test('구매 금액 숫자가 아닌 값 입력 시 CONTAIN_NAN 에러 메시지 출력', async () => {
    Console.readLineAsync
      .mockResolvedValueOnce('abc')
      .mockResolvedValueOnce('1000');

    await inputPurchaseAmount();
    expect(Console.print).toHaveBeenCalledWith(INPUTMONEY.CONTAIN_NAN);
  });

  test('구매 금액을 0으로 시작하는 값 입력 시 STARTSWITH_ZERO 에러 메시지 출력', async () => {
    Console.readLineAsync
      .mockResolvedValueOnce('0123')
      .mockResolvedValueOnce('1000');

    await inputPurchaseAmount();
    expect(Console.print).toHaveBeenCalledWith(INPUTMONEY.STARTSWITH_ZERO);
  });

  test('구매 금액이 1000으로 나누어 떨어지지 않는 값 입력 시 REMAINDER_NOT_ZERO 에러 메시지 출력', async () => {
    Console.readLineAsync
      .mockResolvedValueOnce('1234')
      .mockResolvedValueOnce('1000');

    await inputPurchaseAmount();
    expect(Console.print).toHaveBeenCalledWith(INPUTMONEY.REMAINDER_NOT_ZERO);
  });

  test('당첨 번호 빈 문자열 입력 시 NOT_TYPED 에러 메시지 출력', async () => {
    Console.readLineAsync
      .mockResolvedValueOnce('')
      .mockResolvedValueOnce('1,2,3,4,5,6');

    await inputWinningNumbers();
    expect(Console.print).toHaveBeenCalledWith(WINNINGNUMBERS.NOT_TYPED);
  });

  test('당첨 번호 잘못된 구분자를 사용하여 입력 시 INVALID_DELIMITER_SPLIT 에러 메시지 출력', async () => {
    Console.readLineAsync
      .mockResolvedValueOnce('1-2-3')
      .mockResolvedValueOnce('1,2,3,4,5,6');

    await inputWinningNumbers();
    expect(Console.print).toHaveBeenCalledWith(
      WINNINGNUMBERS.INVALID_DELIMITER_SPLIT,
    );
  });

  test('당첨 번호에 중복된 숫자 입력 시 DUPLICATED_NUMBER 에러 메시지 출력', async () => {
    Console.readLineAsync
      .mockResolvedValueOnce('1,2,2,3,4,5')
      .mockResolvedValueOnce('1,2,3,4,5,6');

    await inputWinningNumbers();
    expect(Console.print).toHaveBeenCalledWith(
      WINNINGNUMBERS.DUPLICATED_NUMBER,
    );
  });

  test('당첨 번호에 범위를 초과하는 숫자 입력 시 OVER_NUMBER_RANGE 에러 메시지 출력', async () => {
    Console.readLineAsync
      .mockResolvedValueOnce('1,2,3,4,5,46')
      .mockResolvedValueOnce('1,2,3,4,5,6');

    await inputWinningNumbers();
    expect(Console.print).toHaveBeenCalledWith(
      WINNINGNUMBERS.OVER_NUMBER_RANGE,
    );
  });

  test('보너스 번호에 빈 문자열 입력 시 NOT_TYPED 에러 메시지 출력', async () => {
    Console.readLineAsync.mockResolvedValueOnce('').mockResolvedValueOnce('7');

    await inputBonusNumber([1, 2, 3, 4, 5]);
    expect(Console.print).toHaveBeenCalledWith(BONUSNUMBER.NOT_TYPED);
  });

  test('보너스 번호와 당첨 번호가 중복된 경우 DUPLICATED_NUMBER 에러 메시지 출력', async () => {
    Console.readLineAsync.mockResolvedValueOnce('1').mockResolvedValueOnce('7');

    await inputBonusNumber([1, 2, 3, 4, 5]);
    expect(Console.print).toHaveBeenCalledWith(BONUSNUMBER.PREEMPTED_NUMBER);
  });

  test('보너스 번호에 범위를 초과하는 숫자 입력 시 OVER_NUMBER_RANGE 에러 메시지 출력', async () => {
    Console.readLineAsync
      .mockResolvedValueOnce('46')
      .mockResolvedValueOnce('7');

    await inputBonusNumber([1, 2, 3, 4, 5]);
    expect(Console.print).toHaveBeenCalledWith(BONUSNUMBER.OVER_NUMBER_RANGE);
  });
});
