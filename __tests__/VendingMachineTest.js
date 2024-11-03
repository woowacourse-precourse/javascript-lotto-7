import VendingMachine from '../src/model/VendingMachine.js';
import { ERROR_PREFIX, LOTTO_PRICE } from '../src/Constants.js';
import { mockRandoms } from './ApplicationTest.js';

describe('자판기 클래스 테스트', () => {
  test.each([
    [
      '투입한 금액이 숫자가 아닐 경우 예외가 발생한다.',
      ['test', true, false, {}, undefined, null],
    ],
    [
      '투입한 금액이 정수가 아닐 경우 예외가 발생한다.',
      [1_000.123, 40_000.1423, 32_000.1412],
    ],
    [
      '투입한 금액이 1000원 미만일 경우 예외 처리가 발생한다.',
      [100, 200, 300, 0, -Infinity],
    ],
    [
      '투입한 금액이 10만원을 초과할 경우 예외가 발생한다.',
      [10_000_000_000, Infinity, 101_000],
    ],
    [
      '투입한 금액이 1000원 단위로 나누어 떨어지지 않을 경우 예외가 발생한다.',
      [3200, 4800, 98400, 1250],
    ],
  ])('%s', (_, testInputs) => {
    testInputs.forEach((input) => {
      expect(() => new VendingMachine(input)).toThrow(ERROR_PREFIX);
    });
  });
  test('자판기에 돈을 투입하면 투입한 금액에 맞는 갯수 만큼 로또 번호 난수를 생성한다.', () => {
    const mockLottoConstructor = jest.fn();
    const calledTimes = 3;
    const testCash = LOTTO_PRICE * calledTimes;
    const mockedRandomNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
    ];

    mockRandoms(mockedRandomNumbers);

    new VendingMachine(testCash, mockLottoConstructor);

    expect(mockLottoConstructor).toHaveBeenCalledTimes(calledTimes);
    mockedRandomNumbers.forEach((numbers) => {
      expect(mockLottoConstructor).toHaveBeenCalledWith(numbers);
    });
  });
});
