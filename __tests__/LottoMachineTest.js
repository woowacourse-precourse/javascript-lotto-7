import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from '../src/LottoMachine';
import Lotto from '../src/Lotto';
import { mockRandoms, getLogSpy } from './ApplicationTest';

const inputPurchaseAmountMockQuestion = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn().mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('로또 발매기 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test.each([
    [8000, 8000],
    [8001, new Error('[ERROR]')],
  ])('구입금액 입력검증 테스트', async (input, expected) => {
    // given
    const lottoMachine = new LottoMachine();
    inputPurchaseAmountMockQuestion(input);

    if (expected instanceof Error) {
      // when, then: 비동기 에러 검증
      await expect(lottoMachine.inputPurchaseAmount()).rejects.toThrow(
        '[ERROR]',
      );
    } else {
      // when
      await lottoMachine.inputPurchaseAmount();

      // then
      expect(lottoMachine.amount).toBe(expected);
    }
  });

  test('금액에 맞게 로또 생성 테스트', async () => {
    //given
    const AMOUNT = 8000;
    inputPurchaseAmountMockQuestion(AMOUNT);

    //when
    const lottoMachine = new LottoMachine();
    //내부적으로 #generateLotto() 실행
    await lottoMachine.inputPurchaseAmount();

    //then
    expect(lottoMachine.lottos.length).toBe(AMOUNT / 1000);
    lottoMachine.lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });

  test('발매된 로또 출력 테스트', async () => {
    //given
    const AMOUNT = 8000;
    inputPurchaseAmountMockQuestion(AMOUNT);
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
    const logSpy = getLogSpy();

    //when
    const lottoMachine = new LottoMachine();
    //내부적으로 #printLottos() 실행
    await lottoMachine.inputPurchaseAmount();

    //then
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
