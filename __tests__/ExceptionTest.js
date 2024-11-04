import Validate from '../src/Validate';
import { ERROR_MESSAGE } from '../src/lottoConstants';
import InputHandler from '../src/InputHandler';
import { MissionUtils } from '@woowacourse/mission-utils';

// 입력 모킹 함수
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('Validate 클래스 예외 테스트', () => {
  const validate = new Validate();

  test('빈 입력 값에 대해 예외를 발생시킨다', () => {
    expect(() => validate.isEmpty('')).toThrow('[ERROR]');
    expect(() => validate.isEmpty('   ')).toThrow('[ERROR]');
  });

  test('숫자가 아닌 값에 대해 예외를 발생시킨다', () => {
    expect(() => validate.isNumber('abc')).toThrow('[ERROR]');
  });

  test('정수가 아닌 값에 대해 예외를 발생시킨다', () => {
    expect(() => validate.isInteger('3.14')).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복될 때 예외를 발생시킨다', () => {
    expect(() => validate.isDuplicateWithWinningNumbers(7, [1, 2, 3, 4, 5, 7]))
      .toThrow(ERROR_MESSAGE.BONUS_DUPLICATE);
  });
});

describe('InputHandler 클래스 예외 테스트', () => {
  const inputHandler = new InputHandler();

  test('구매 금액이 빈 입력일 때 예외를 발생시킨다', async () => {
    mockQuestions(['']);
    await expect(inputHandler.getAmount()).rejects.toThrow('[ERROR]');
  });

  test('구매 금액이 숫자가 아닐 때 예외를 발생시킨다', async () => {
    mockQuestions(['abc']);
    await expect(inputHandler.getAmount()).rejects.toThrow('[ERROR]');
  });

  test('구매 금액이 정수가 아닐 때 예외를 발생시킨다', async () => {
    mockQuestions(['100.5']);
    await expect(inputHandler.getAmount()).rejects.toThrow('[ERROR]');
  });

  test('구매 금액이 로또 가격의 배수가 아닐 때 예외를 발생시킨다', async () => {
    mockQuestions(['1500']);
    await expect(inputHandler.getAmount()).rejects.toThrow('[ERROR]');
  });

  test('구매 금액이 0 이하일 때 예외를 발생시킨다', async () => {
    mockQuestions(['-5000']);
    await expect(inputHandler.getAmount()).rejects.toThrow('[ERROR]');
  });

  test('당첨 번호가 빈 입력일 때 예외를 발생시킨다', async () => {
    mockQuestions(['']);
    await expect(inputHandler.getWinningNumbers()).rejects.toThrow('[ERROR]');
  });

  test('보너스 번호가 빈 입력일 때 예외를 발생시킨다', async () => {
    mockQuestions(['']);
    await expect(inputHandler.getBonusNumber()).rejects.toThrow('[ERROR]');
  });

  test('보너스 번호가 숫자가 아닐 때 예외를 발생시킨다', async () => {
    mockQuestions(['abc']);
    await expect(inputHandler.getBonusNumber()).rejects.toThrow('[ERROR]');
  });

  test('보너스 번호가 정수가 아닐 때 예외를 발생시킨다', async () => {
    mockQuestions(['3.5']);
    await expect(inputHandler.getBonusNumber()).rejects.toThrow('[ERROR]');
  });

  test('보너스 번호가 범위를 벗어날 때 예외를 발생시킨다', async () => {
    mockQuestions(['50']);
    await expect(inputHandler.getBonusNumber()).rejects.toThrow('[ERROR]');
  });

  test('보너스 번호가 하나 이상 입력될 때 예외를 발생시킨다', async () => {
    mockQuestions(['7,8']);
    await expect(inputHandler.getBonusNumber()).rejects.toThrow('[ERROR]');
  });
});