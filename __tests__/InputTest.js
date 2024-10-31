import App from '../src/App.js';
import { getLogSpy, mockQuestions, mockRandoms } from './testUtils.js';

describe('구입 금액 테스트', () => {
  test.each([
    ['구입 금액이 비어 있는 경우 예외가 발생한다.', ['']],
    ['구입 금액에 공백이 포함된 경우 예외가 발생한다.', ['14 000']],
    ['1000으로 나누어 떨어지지 않는 경우 예외가 발생한다.', ['14500']],
    ['1000으로 나누어 떨어지지 않는 경우 예외가 발생한다.', ['14000.5']],
    ['1000으로 나누어 떨어지지 않는 경우 예외가 발생한다.', ['ab']],
  ])('%s', async (_, inputs) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('정확한 금액이 입력된 경우 통과한다.', async () => {
    const logSpy = getLogSpy();

    mockQuestions(['14000']);

    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('14개를 구매했습니다.'));
  });

  test('정확한 금액이 입력된 경우 통과하여, 랜덤 생성된 로또를 출력한다.', async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['8000']);

    const app = new App();
    await app.run();

    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe('당첨 번호 테스트', () => {
  test.each([
    ['당첨 번호가 비어 있는 경우 예외가 발생한다.', ['14000', '']],
    ['당첨 번호에 공백이 포함된 경우 예외가 발생한다.', ['14000', '1,2,1 0,2 0,3 0,4 0']],
  ])('%s', async (_, inputs) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
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
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
