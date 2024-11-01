import { MissionUtils } from '@woowacourse/mission-utils';
import InputManagement from '../src/InputManagement.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    console.log(input);
    return Promise.resolve(input);
  });
};

describe('Input 테스트', () => {
  test('로또 구입 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();

    mockQuestions(['15100']);
    expect(inputManagement.inputPurchaseAmount()).rejects.toThrow('[ERROR]');
  });

  test('로또 구입 금액이 공백이면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();

    mockQuestions(['']);
    expect(inputManagement.inputPurchaseAmount()).rejects.toThrow('[ERROR]');
  });

  test('로또 구입 금액이 숫자가 아니면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();

    mockQuestions(['1000sw']);
    expect(inputManagement.inputPurchaseAmount()).rejects.toThrow('[ERROR]');
  });

  test('당첨 번호가 공백이면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();

    mockQuestions(['']);
    expect(inputManagement.inputWinningNumbers()).rejects.toThrow('[ERROR]');
  });

  test('당첨 번호가 숫자가 아니면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();

    mockQuestions(['fab,a,sd,v12,1,24']);
    expect(inputManagement.inputWinningNumbers()).rejects.toThrow('[ERROR]');
  });

  test('당첨 번호가 6개가 아니면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();

    mockQuestions(['1,2,3,4,5,6,7']);
    expect(inputManagement.inputWinningNumbers()).rejects.toThrow('[ERROR]');
  });

  test('당첨 번호가 1 ~ 45의 범위를 벗어나면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();

    mockQuestions(['1,2,3,4,5,47']);
    expect(inputManagement.inputWinningNumbers()).rejects.toThrow('[ERROR]');
  });

  test('당첨 번호가 소수이면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();

    mockQuestions(['1.1,2,3,4,5,6']);
    expect(inputManagement.inputWinningNumbers()).rejects.toThrow('[ERROR]');
  });

  test('당첨 번호가 중복되면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();

    mockQuestions(['1,1,2,3,4,5']);
    expect(inputManagement.inputWinningNumbers()).rejects.toThrow('[ERROR]');
  });

  test('보너스 번호가 공백이면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();

    mockQuestions(['']);
    expect(inputManagement.inputBonusNumber()).rejects.toThrow('[ERROR]');
  });

  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();

    mockQuestions(['a']);
    expect(inputManagement.inputBonusNumber()).rejects.toThrow('[ERROR]');
  });

  test('보너스 번호가 1 ~ 45의 범위를 벗어나면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();

    mockQuestions(['-1']);
    expect(inputManagement.inputBonusNumber()).rejects.toThrow('[ERROR]');
  });

  test('보너스 번호가 소수이면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();

    mockQuestions(['1.1']);
    expect(inputManagement.inputBonusNumber()).rejects.toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();

    mockQuestions(['1,2,3,4,5,6', '6']);
    await inputManagement.inputWinningNumbers();
    expect(inputManagement.inputBonusNumber()).rejects.toThrow('[ERROR]');
  });
});