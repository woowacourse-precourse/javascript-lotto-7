import LottoStore from '../src/LottoStore';
import InputView from '../src/view/InputView';
import OutputView from '../src/view/OutputView';
import LottoBundle from '../src/LottoBundle';
import { ERROR_MESSAGES } from '../src/constants/messages';

jest.mock('../src/view/InputView');
jest.mock('../src/view/OutputView');
jest.mock('../src/LottoBundle');

let lottoStore;

beforeEach(() => {
  jest.clearAllMocks();
  lottoStore = new LottoStore();
});

// purchaseLottos 메서드 테스트 - 유효한 구매 금액 테스트
describe.each([
  {
    amount: '1000',
    generatedLottos: [[1, 2, 3, 4, 5, 6]],
    expectedLottoCount: 1,
  },
  {
    amount: '5000',
    generatedLottos: Array(5).fill([5, 10, 15, 20, 25, 30]),
    expectedLottoCount: 5,
  },
  {
    amount: '10000',
    generatedLottos: Array(10).fill([3, 6, 9, 12, 15, 18]),
    expectedLottoCount: 10,
  },
  {
    amount: '100000',
    generatedLottos: Array(100).fill([3, 6, 9, 12, 15, 18]),
    expectedLottoCount: 100,
  },
])(
  'purchaseLottos 메서드 테스트 - 유효한 구매 금액',
  ({ amount, generatedLottos, expectedLottoCount }) => {
    it(`구매 금액이 ${amount}일 때 ${expectedLottoCount}개의 로또를 가진 LottoBundle이 정상 생성된다`, async () => {
      InputView.getUserInput.mockResolvedValueOnce(amount);

      // LottoBundle을 지정한 로또 번호 배열로 설정
      LottoBundle.prototype.getLottos = jest.fn().mockReturnValue(generatedLottos);
      const { lottoCount, lottoBundle } = await lottoStore.purchaseLottos();

      expect(lottoBundle.getLottos()).toEqual(generatedLottos);
      expect(lottoCount).toBe(expectedLottoCount);
      expect(lottoStore.getAmount()).toBe(parseInt(amount, 10));
    });
  },
);

const expectErrorMessage = (errorMessage, expectedError) => {
  expect(errorMessage).toHaveBeenCalledWith(
    expect.objectContaining({
      message: expectedError,
    }),
  );
};

// purchaseLottos 메서드 테스트 - 유효하지 않은 구매 금액 테스트
describe.each([
  { amount: '', expectedError: ERROR_MESSAGES.EMPTY_INPUT },
  { amount: '0', expectedError: ERROR_MESSAGES.INVALID_AMOUNT_RANGE },
  { amount: '101000', expectedError: ERROR_MESSAGES.INVALID_AMOUNT_RANGE },
  { amount: '2500', expectedError: ERROR_MESSAGES.INVALID_AMOUNT_UNIT },
  { amount: '-1000', expectedError: ERROR_MESSAGES.INVALID_AMOUNT_INPUT },
  { amount: 'abc', expectedError: ERROR_MESSAGES.INVALID_AMOUNT_INPUT },
])('purchaseLottos 메서드 테스트 - 유효하지 않은 구매 금액', ({ amount, expectedError }) => {
  it(`구매 금액이 ${amount}일 때 오류 메시지 : ${expectedError}`, async () => {
    InputView.getUserInput.mockResolvedValueOnce(amount);

    const errorMessage = jest.spyOn(OutputView, 'printError').mockImplementation(() => {
      throw new Error(expectedError);
    });

    await expect(lottoStore.purchaseLottos()).rejects.toThrow(expectedError);
    expectErrorMessage(errorMessage, expectedError);
  });
});
