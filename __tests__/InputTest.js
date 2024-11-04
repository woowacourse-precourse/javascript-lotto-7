import { MissionUtils } from '@woowacourse/mission-utils';
import InputManagement from '../src/InputManagement.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Input 테스트', () => {
  test('로또 구입 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();
    const logSpy = getLogSpy();

    mockQuestions(['15100', '1000']);

    await inputManagement.inputPurchaseAmount();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('로또 구입 금액이 공백이면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();
    const logSpy = getLogSpy();

    mockQuestions(['', '1000']);

    await inputManagement.inputPurchaseAmount();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('로또 구입 금액이 숫자가 아니면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();
    const logSpy = getLogSpy();

    mockQuestions(['1000sw', '1000']);

    await inputManagement.inputPurchaseAmount();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('당첨 번호가 공백이면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();
    const logSpy = getLogSpy();

    mockQuestions(['', '1,2,3,4,5,6']);

    await inputManagement.inputWinningNumbers();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('당첨 번호가 숫자가 아니면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();
    const logSpy = getLogSpy();

    mockQuestions(['fab,a,sd,v12,1,24', '1,2,3,4,5,6']);

    await inputManagement.inputWinningNumbers();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('당첨 번호가 6개가 아니면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();
    const logSpy = getLogSpy();

    mockQuestions(['1,2,3,4,5,6,7', '1,2,3,4,5,6']);

    await inputManagement.inputWinningNumbers();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('당첨 번호가 1 ~ 45의 범위를 벗어나면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();
    const logSpy = getLogSpy();

    mockQuestions(['1,2,3,4,5,47', '1,2,3,4,5,6']);

    await inputManagement.inputWinningNumbers();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('당첨 번호가 소수이면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();
    const logSpy = getLogSpy();

    mockQuestions(['1.1,2,3,4,5,6', '1,2,3,4,5,6']);

    await inputManagement.inputWinningNumbers();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('당첨 번호가 중복되면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();
    const logSpy = getLogSpy();

    mockQuestions(['1,1,2,3,4,5', '1,2,3,4,5,6']);

    await inputManagement.inputWinningNumbers();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('보너스 번호가 공백이면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();
    const logSpy = getLogSpy();

    mockQuestions(['', '7']);

    await inputManagement.inputBonusNumber();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();
    const logSpy = getLogSpy();

    mockQuestions(['a', '7']);

    await inputManagement.inputBonusNumber();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('보너스 번호가 1 ~ 45의 범위를 벗어나면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();
    const logSpy = getLogSpy();

    mockQuestions(['-1', '7']);

    await inputManagement.inputBonusNumber();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('보너스 번호가 소수이면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();
    const logSpy = getLogSpy();

    mockQuestions(['1.1', '7']);

    await inputManagement.inputBonusNumber();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', async () => {
    const inputManagement = new InputManagement();
    const logSpy = getLogSpy();
    
    mockQuestions(['1,2,3,4,5,6', '6', '7']);

    await inputManagement.inputWinningNumbers();
    await inputManagement.inputBonusNumber();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });
});