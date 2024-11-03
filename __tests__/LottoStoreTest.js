import LottoStore from '../src/LottoStore';
import InputView from '../src/view/InputView';
import OutputView from '../src/view/OutputView';
import LottoBundle from '../src/LottoBundle';

jest.mock('../src/view/InputView');
jest.mock('../src/view/OutputView');
jest.mock('../src/LottoBundle');

let lottoStore;

beforeEach(() => {
  jest.clearAllMocks();
  lottoStore = new LottoStore();
});

// purchaseLottos 메서드 테스트 - 유효한 금액 입력한 경우
describe.each([
  {
    userAmount: '1000',
    generatedLottos: [[1, 2, 3, 4, 5, 6]],
    expectedLottoCount: 1,
  },
  {
    userAmount: '5000',
    generatedLottos: Array(5).fill([5, 10, 15, 20, 25, 30]),
    expectedLottoCount: 5,
  },
  {
    userAmount: '10000',
    generatedLottos: Array(10).fill([3, 6, 9, 12, 15, 18]),
    expectedLottoCount: 10,
  },
  {
    userAmount: '100000',
    generatedLottos: Array(100).fill([3, 6, 9, 12, 15, 18]),
    expectedLottoCount: 100,
  },
])(
  'purchaseLottos 메서드 테스트 - 유효한 구매 금액',
  ({ userAmount, generatedLottos, expectedLottoCount }) => {
    it(`구매 금액이 ${userAmount}일 때 ${expectedLottoCount}개의 로또를 가진 LottoBundle이 정상 생성된다`, async () => {
      InputView.getUserInput.mockResolvedValueOnce(userAmount);

      // LottoBundle을 지정한 로또 번호 배열로 설정
      LottoBundle.prototype.getLottos = jest.fn().mockReturnValue(generatedLottos);
      const lottoBundle = await lottoStore.purchaseLottos();

      expect(lottoBundle.getLottos()).toEqual(generatedLottos);
      expect(lottoStore.getAmount()).toBe(parseInt(userAmount, 10));
      expect(OutputView.printMessage).toHaveBeenCalledWith(
        `\n${expectedLottoCount}개를 구매했습니다.`,
      );
    });
  },
);
