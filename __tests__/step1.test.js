import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('1단계 - 구입금액 입력', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('구입 금액이 1000원 단위가 아닐 경우 예외가 발생한다.', async () => {
    const input = '1500';
    const logSpy = getLogSpy();

    mockReadLineAsync(input);
    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('구입 금액이 숫자가 아닐 경우 예외가 발생한다.', async () => {
    const input = '1000원';
    const logSpy = getLogSpy();

    mockReadLineAsync(input);
    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('정상적인 구입 금액을 입력하면 로또 수량이 출력된다.', async () => {
    const input = '3000';
    const logSpy = getLogSpy();

    mockReadLineAsync(input);
    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith('3개를 구매했습니다.');
  });
});

const mockReadLineAsync = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockResolvedValueOnce(input);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
