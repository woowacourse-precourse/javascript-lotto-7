import App from '../src/App.js';
import {
  mockQuestions,
  mockRandoms,
  getLogSpy,
  runException,
} from '../src/Test/Test.js';

describe('로또 통합 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('정상적인 로또 구매 및 당첨 결과 출력 테스트', async () => {
    // Given
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

    mockQuestions(['8000', '1,2,3,4,5,6', '7']);

    // When
    const app = new App();
    await app.run();

    // Then
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
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('구입 금액 입력 오류 테스트 - 1000원 단위가 아닌 경우', async () => {
    await runException(['1500']);
  });

  test('당첨 번호 입력 오류 테스트 - 숫자가 아닌 값 입력', async () => {
    await runException(['1000', '1,2,3,4,5,six']);
  });

  test('당첨 번호 입력 오류 테스트 - 중복된 번호 입력', async () => {
    await runException(['1000', '1,2,3,4,5,5']);
  });

  test('보너스 번호 입력 오류 테스트 - 당첨 번호와 중복되는 번호 입력', async () => {
    await runException(['1000', '1,2,3,4,5,6', '6']);
  });

  test('로또 구매 후 1등 당첨 테스트', async () => {
    // Given
    const logSpy = getLogSpy();

    mockRandoms([[1, 2, 3, 4, 5, 6]]);

    mockQuestions(['1000', '1,2,3,4,5,6', '7']);

    // When
    const app = new App();
    await app.run();

    // Then
    const logs = [
      '1개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 6]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 200000000%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또 구매 후 보너스볼+5개일치 당첨 테스트', async () => {
    // Given
    const logSpy = getLogSpy();

    mockRandoms([[1, 2, 3, 4, 5, 7]]);

    mockQuestions(['1000', '1,2,3,4,5,6', '7']);

    // When
    const app = new App();
    await app.run();

    // Then
    const logs = [
      '1개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 7]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 3000000%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또 구매 후 3등 당첨 테스트', async () => {
    // Given
    const logSpy = getLogSpy();

    mockRandoms([[1, 2, 3, 4, 5, 8]]);

    mockQuestions(['1000', '1,2,3,4,5,6', '7']);

    // When
    const app = new App();
    await app.run();

    // Then
    const logs = [
      '1개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 8]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 150000%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또 구매 후 4등 당첨 테스트', async () => {
    // Given
    const logSpy = getLogSpy();

    mockRandoms([[1, 2, 3, 4, 7, 8]]);

    mockQuestions(['1000', '1,2,3,4,5,6', '7']);

    // When
    const app = new App();
    await app.run();

    // Then
    const logs = [
      '1개를 구매했습니다.',
      '[1, 2, 3, 4, 7, 8]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 5000%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또 구매 후 5등 당첨 테스트', async () => {
    // Given
    const logSpy = getLogSpy();

    mockRandoms([[1, 2, 3, 7, 8, 9]]);

    mockQuestions(['1000', '1,2,3,4,5,6', '7']);

    // When
    const app = new App();
    await app.run();

    // Then
    const logs = [
      '1개를 구매했습니다.',
      '[1, 2, 3, 7, 8, 9]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 500%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또 구매 후 당첨되지 않은 경우 테스트', async () => {
    // Given
    const logSpy = getLogSpy();

    mockRandoms([[10, 11, 12, 13, 14, 15]]);

    mockQuestions(['1000', '1,2,3,4,5,6', '7']);

    // When
    const app = new App();
    await app.run();

    // Then
    const logs = [
      '1개를 구매했습니다.',
      '[10, 11, 12, 13, 14, 15]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test('10개의 로또 구매 및 당첨 결과 출력 테스트', async () => {
    // Given
    const logSpy = getLogSpy();

    // Mock random numbers for generated lotteries
    mockRandoms([
      [1, 2, 3, 4, 5, 6], // 6개 일치 - 1등
      [7, 8, 9, 10, 11, 12], // 0개 일치
      [13, 14, 15, 16, 17, 18], // 0개 일치
      [19, 20, 21, 22, 23, 24], // 0개 일치
      [25, 26, 27, 28, 29, 30], // 0개 일치
      [31, 32, 33, 34, 35, 36], // 0개 일치
      [37, 38, 39, 40, 41, 42], // 0개 일치
      [2, 4, 6, 8, 10, 12], // 3개 일치 - 5등 (2, 4, 6)
      [1, 3, 5, 7, 9, 11], // 3개 일치 - 5등 (1, 3, 5)
      [13, 15, 17, 19, 21, 23], // 0개 일치
    ]);

    mockQuestions(['10000', '1,2,3,4,5,6', '7']);

    // When
    const app = new App();
    await app.run();

    // Then
    const logs = [
      '10개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 6]',
      '[7, 8, 9, 10, 11, 12]',
      '[13, 14, 15, 16, 17, 18]',
      '[19, 20, 21, 22, 23, 24]',
      '[25, 26, 27, 28, 29, 30]',
      '[31, 32, 33, 34, 35, 36]',
      '[37, 38, 39, 40, 41, 42]',
      '[2, 4, 6, 8, 10, 12]',
      '[1, 3, 5, 7, 9, 11]',
      '[13, 15, 17, 19, 21, 23]',
      '3개 일치 (5,000원) - 2개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 20000100%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test('보너스 볼 일치 테스트 - 5개 번호 일치 + 보너스 번호 일치 (2등)', async () => {
    // Given
    const logSpy = getLogSpy();

    mockRandoms([
      [1, 2, 3, 4, 5, 7], // 5개 일치 + 보너스 번호 일치 - 2등
      [1, 2, 3, 4, 5, 8], // 5개 일치 - 3등
      [1, 2, 3, 4, 7, 8], // 4개 일치 - 4등
      [1, 2, 3, 7, 8, 9], // 3개 일치 - 5등
      [1, 2, 7, 8, 9, 10], // 2개 일치 - 낙첨
      [1, 7, 8, 9, 10, 11], // 1개 일치 - 낙첨
      [7, 8, 9, 10, 11, 12], // 0개 일치 - 낙첨
    ]);

    mockQuestions(['7000', '1,2,3,4,5,6', '7']);

    // When
    const app = new App();
    await app.run();

    // Then
    const logs = [
      '7개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 7]',
      '[1, 2, 3, 4, 5, 8]',
      '[1, 2, 3, 4, 7, 8]',
      '[1, 2, 3, 7, 8, 9]',
      '[1, 2, 7, 8, 9, 10]',
      '[1, 7, 8, 9, 10, 11]',
      '[7, 8, 9, 10, 11, 12]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 450785.71%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
