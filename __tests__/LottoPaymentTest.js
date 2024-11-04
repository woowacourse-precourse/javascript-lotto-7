import { Console } from "@woowacourse/mission-utils";
import LottoPayment from '../src/lotto/LottoPayment.js';
import { config } from '../src/config.js';
import { ERROR_MESSAGE } from '../src/lotto/constants/Message.js';

const mockQuestions = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => Promise.resolve(input));
};

const { MAX_PURCHASE_AMOUNT, LOTTO_AMOUNT } = config.lottoConfig;

describe('로또 결제 기능 테스트', () => {
  test('구매 금액에 따른 발행 로또 개수를 반환할 수 있다.', () => {
    const purhcaseAmount = 3000;
    const lottoPayment = new LottoPayment(LOTTO_AMOUNT);
    const purchaseCount = lottoPayment.calculateLottoCountByAmount(purhcaseAmount);

    expect(purchaseCount).toBe(purhcaseAmount / LOTTO_AMOUNT);
  })
})

describe('로또 결제 예외 테스트', () => {
  test.each([
    {
      name: '입력 받은 구매 금액에 특수문자가 있을 경우 에러가 발생한다.',
      input: '@!',
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_ONLY_NUMERIC(this.input);
      }
    },
    {
      name: '입력 받은 구매 금액에 문자가 있을 경우 에러가 발생한다.',
      input: 'asb',
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_ONLY_NUMERIC(this.input);
      }
    },
    {
      name: '입력 받은 구매 금액이 NULL값으로 전달될 경우 에러가 발생한다.',
      input: null,
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_NULL_VALUE;
      }
    },
    {
      name: '입력 받은 구매 금액이 undefined값으로 전달될 경우 에러가 발생한다.',
      input: undefined,
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_UNDEFINED_VALUE;
      }
    },
    {
      name: '입력 받은 구매 금액이 빈 값일 경우 에러가 발생한다.',
      input: '',
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_EMPTY_VALUE;
      }
    },
    {
      name: '입력 받은 구매 금액이 최대 구매 금액을 초과하면 에러가 발생한다.',
      input: MAX_PURCHASE_AMOUNT + 1,
      get error() {
        return ERROR_MESSAGE.ERROR_MAX_PURCHASE_AMOUNT_EXCEEDED(MAX_PURCHASE_AMOUNT, this.input);
      }
    },
    {
      name: `입력받은 구매 금액이 ${LOTTO_AMOUNT} 단위로 나누어 떨어지지 않으면 에러가 발생한다.`,
      input: LOTTO_AMOUNT + 2,
      get error() {
        return ERROR_MESSAGE.ERROR_INCORRECT_AMOUNT_UNIT(this.input, LOTTO_AMOUNT);
      }
    },
  ])(`$name`, async ({ input, error }) => {
    mockQuestions(input);

    const lottoPayment = new LottoPayment(LOTTO_AMOUNT);
    await expect(lottoPayment.getPurchaseAmount()).rejects.toThrow(error);
  });
});