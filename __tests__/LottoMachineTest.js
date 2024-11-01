import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from '../src/LottoMachine';
import Lotto from '../src/Lotto';

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
    const lottoMachine = new LottoMachine();
    const AMOUNT = 8000;
    inputPurchaseAmountMockQuestion(AMOUNT);

    //when

    //내부적으로 #generateLotto() 실행
    await lottoMachine.inputPurchaseAmount();

    //then
    expect(lottoMachine.lottos.length).toBe(AMOUNT / 1000);
    lottoMachine.lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });
});
