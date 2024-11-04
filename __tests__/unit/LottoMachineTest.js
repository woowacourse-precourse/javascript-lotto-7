import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from '../../src/model/LottoMachine.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();

  numbers.reduce((mockFn, number) => {
    return mockFn.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

beforeEach(() => {
  jest.restoreAllMocks(); 
});

describe("getLottoCount() 테스트", () => {
  test.each([
    { purchaseAmount: "1000", expectedCount: 1 },         
    { purchaseAmount: "50000", expectedCount: 50 },      
  ])("구입 금액에 따라 올바른 로또 개수를 반환해야 한다", ({ purchaseAmount, expectedCount }) => {

    const amount = purchaseAmount;

    const lottoMachine = new LottoMachine(amount);
    const lottoCount = lottoMachine.getLottoCount();

    expect(lottoCount).toBe(expectedCount);
  });
});

describe("getLottoNumbers() 테스트", () => {
  test("구입 금액에 따른 로또 번호 배열을 생성해야 한다", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44]
    ]);
    const lottoMachine = new LottoMachine("3000"); 

    const lottoNumbers = lottoMachine.getLottoNumbers();

    expect(lottoNumbers).toEqual([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44]
    ]);
  });
});
