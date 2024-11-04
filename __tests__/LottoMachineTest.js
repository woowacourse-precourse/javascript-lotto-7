import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from '../src/LottoMachine.js';
import Lotto from '../src/Lotto.js';
import { mockRandoms, getLogSpy } from './ApplicationTest.js';

const readLineAsyncMock = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn().mockImplementation(() => {
    return Promise.resolve(input);
  });
};

const arrReadLineAsyncMock = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  inputs.reduce((acc, input) => {
    return acc.mockReturnValueOnce(input);
  }, MissionUtils.Console.readLineAsync);
};

const mapToObject = (map) => {
  const obj = {};
  map.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
};

/* eslint-disable max-lines-per-function */
describe('로또 발매기 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test.skip.each([
    [8000, 8000],
    [8001, new Error('[ERROR]')],
  ])('구입금액 입력검증 테스트', async (input, expected) => {
    // given
    readLineAsyncMock(input);
    const lottoMachine = new LottoMachine();

    if (expected instanceof Error) {
      // when, then
      await expect(
        lottoMachine.inputPurchaseAmountTestMethod(),
      ).rejects.toThrow('[ERROR]');
    } else {
      // when
      await lottoMachine.inputPurchaseAmountTestMethod();
      // then
      expect(lottoMachine.amount).toBe(expected);
    }
  });

  test.skip('금액에 맞는 로또 생성 테스트', async () => {
    // given
    const AMOUNT = 8000;
    readLineAsyncMock(AMOUNT);
    const lottoMachine = new LottoMachine();

    // when
    // 내부적으로 #generateLotto() 실행
    await lottoMachine.inputPurchaseAmountTestMethod();

    // then
    expect(lottoMachine.lottos.length).toBe(AMOUNT / 1000);
    lottoMachine.lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });

  test('발매된 로또 출력 테스트', async () => {
    // given
    const AMOUNT = 8000;
    readLineAsyncMock(AMOUNT);
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 45, 42],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    const logSpy = getLogSpy();

    // when
    const lottoMachine = new LottoMachine();
    // 내부적으로 #printLottos() 실행
    await lottoMachine.inputPurchaseAmountTestMethod();

    // then
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

  test.each([
    ['1,2,3,4,5,6', [1, 2, 3, 4, 5, 6]],
    ['1, 2,3,4,5,6', new Error('[ERROR]')],
    ['1,2,3$,4,5,6', new Error('[ERROR')],
    ['1,2,2,3,4,5', new Error('[ERROR]')],
    ['1,2,46,3,4,5', new Error('[ERROR]')],
    ['1,2,0,3,4,5', new Error('[ERROR]')],
  ])('당첨번호 입력 테스트', async (input, expected) => {
    // given
    readLineAsyncMock(input);
    const lottoMachine = new LottoMachine();

    if (expected instanceof Error) {
      // when, then
      await expect(
        lottoMachine.inputWinningNumbersTestMethod(),
      ).rejects.toThrow('[ERROR]');
    } else {
      // when, then

      await lottoMachine.inputWinningNumbersTestMethod();
      expect(lottoMachine.winningNumbers).toEqual(expected);
    }
  });

  test.each([
    ['1,2,3,4,5,6', 7, 7],
    ['1,2,3,4,5,6', 6, new Error('[ERROR')],
  ])('보너스번호 입력 메서드', async (input, bonusNumber, expected) => {
    // given
    arrReadLineAsyncMock([input, bonusNumber]);
    const lottoMachine = new LottoMachine();
    lottoMachine.inputWinningNumbersTestMethod();

    if (expected instanceof Error) {
      await expect(lottoMachine.inputBonusNumberTestMethod()).rejects.toThrow(
        '[ERROR]',
      );
    } else {
      await lottoMachine.inputBonusNumberTestMethod();
      expect(lottoMachine.bonusNumber).toBe(expected);
    }
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], { 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 }], // 6 개 일치 => 1등
    [[1, 2, 3, 4, 5, 7], { 1: 0, 2: 1, 3: 0, 4: 0, 5: 0 }], // 5 개 일치 + 보너스 번호 => 2등
    [[1, 2, 3, 4, 5, 10], { 1: 0, 2: 0, 3: 1, 4: 0, 5: 0 }], // 5 개 일치 => 3등
    [[1, 2, 3, 4, 7, 11], { 1: 0, 2: 0, 3: 0, 4: 1, 5: 0 }], // 4 개 일치 + 보너스 번호 => 4 등
    [[1, 2, 3, 4, 10, 11], { 1: 0, 2: 0, 3: 0, 4: 1, 5: 0 }], // 4 개 일치 => 4 등
    [[1, 2, 3, 7, 11, 12], { 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 }], // 3 개 일치 + 보너스 번호 => 5 등
    [[1, 2, 3, 10, 11, 12], { 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 }], // 3 개 일치 => 5 등
  ])('당첨 등수계산 메서드', async (inputs, expected) => {
    // given
    const LOTTO_NUM = '1,2,3,4,5,6';
    const BONUS_NUM = 7;
    arrReadLineAsyncMock([LOTTO_NUM, BONUS_NUM]);
    const lottoMachine = new LottoMachine();
    const lotto = new Lotto(inputs);
    lottoMachine.setLottosTestMethod([lotto]);
    await lottoMachine.inputWinningNumbersTestMethod();
    await lottoMachine.inputBonusNumberTestMethod();

    // when
    lottoMachine.rankLottoResultTestMethod();

    // then

    expect(mapToObject(lottoMachine.rankResultMap)).toEqual(expected);
  });

  test('수익률 계산 메서드', async () => {
    // given
    const YIELD = 166.7;
    const AMOUNT = 3000;
    const LOTTO_NUMBERS = [
      [10, 11, 12, 13, 14, 15],
      [1, 2, 3, 9, 10, 11],
      [9, 10, 11, 12, 13, 14],
    ];
    const WINNING_NUMBERS = '1,2,3,4,5,6';
    const BONUS_NUM = 7;
    arrReadLineAsyncMock([WINNING_NUMBERS, BONUS_NUM]);

    const lottos = LOTTO_NUMBERS.map((numbers) => new Lotto(numbers));
    const lottoMachine = new LottoMachine();
    lottoMachine.setAmountTestMethod(AMOUNT);
    lottoMachine.setLottosTestMethod(lottos);

    // 비동기 함수 대기
    await lottoMachine.inputWinningNumbersTestMethod();
    await lottoMachine.inputBonusNumberTestMethod();

    // when
    lottoMachine.rankLottoResultTestMethod();
    lottoMachine.calculateYieldRateTestMethod();

    // then
    expect(lottoMachine.yield).toBe(YIELD);
  });

  test('당첨 통계 출력 메서드', () => {
    // given
    const logSpy = getLogSpy();
    const RESULT_MAP = new Map([
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 1],
    ]);

    const YIELD = 62.5;
    const lottoMachine = new LottoMachine();
    lottoMachine.setResultRankMapTestMethod(RESULT_MAP);
    lottoMachine.setYieldTestMethod(YIELD);

    // when
    lottoMachine.printResultTestMethod();

    // then
    const logs = [
      '당첨 통계',
      '---',
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
});
