import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

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

describe('구입 금액 테스트', () => {
  test.each([
    ['구입 금액이 비어 있는 경우 예외가 발생한다.', ['']],
    ['구입 금액에 공백이 포함된 경우 예외가 발생한다.', ['14 000']],
    ['1000으로 나누어 떨어지지 않는 경우 예외가 발생한다.', ['14500']],
    ['1000으로 나누어 떨어지지 않는 경우 예외가 발생한다.', ['14000.5']],
    ['1000으로 나누어 떨어지지 않는 경우 예외가 발생한다.', ['ab']],
  ])('%s', async (_, inputs) => {
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });
});

describe('당첨 번호 테스트', () => {
  test.each([
    ['당첨 번호가 비어 있는 경우 예외가 발생한다.', ['14000', '']],
    ['당첨 번호에 공백이 포함된 경우 예외가 발생한다.', ['14000', '1,2,1 0,2 0,3 0,4 0']],
    ['당첨 번호가 정수가 아닌 경우 예외가 발생한다.', ['14000', '1.5,2.5,3.5,4.5,5.5,6.5']],
    ['당첨 번호가 범위를 벗어난 경우 예외가 발생한다.', ['14000', '100,200,300,400,500,600']],
  ])('%s', async (_, inputs) => {
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });
});

describe('보너스 번호 테스트', () => {
  test.each([
    ['보너스 번호가 비어 있는 경우 예외가 발생한다.', ['14000', '1,2,3,4,5,6', '']],
    ['보너스 번호에 공백이 포함된 경우 예외가 발생한다.', ['14000', '1,2,3,4,5,6', '1 0']],
    ['보너스 번호가 정수가 아닌 경우 예외가 발생한다.', ['14000', '1,2,3,4,5,6', '1.5']],
    ['보너스 번호가 당첨 번호와 중복된 경우 예외가 발생한다.', ['14000', '1,2,3,4,5,6', '6']],
    ['보너스 번호가 범위를 벗어난 경우 예외가 발생한다.', ['14000', '1,2,3,4,5,6', '100']],
  ])('%s', async (_, inputs) => {
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });
});
