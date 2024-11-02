import LottoBundle from '../src/LottoBundle';

const expectLottoCountToMatch = (lottoBundle, expectedCount) => {
  expect(lottoBundle.getLottos()).toHaveLength(expectedCount);
};

const expectLottoNumbersToBeSorted = (lottoBundle) => {
  lottoBundle.getLottos().forEach((lotto) => {
    expect(lotto.getNumbers()).toEqual([...lotto.getNumbers()].sort((a, b) => a - b));
  });
};

describe.each([{ lottoCount: 1 }, { lottoCount: 5 }, { lottoCount: 10 }])(
  '로또 수량이 $lottoCount일 때',
  ({ lottoCount }) => {
    let lottoBundle;
    beforeEach(() => {
      lottoBundle = new LottoBundle();
      lottoBundle.generateLottos(lottoCount);
    });

    test('로또 수량만큼 생성된다', () => {
      expectLottoCountToMatch(lottoBundle, lottoCount);
    });

    test('각 로또는 정렬된 숫자를 포함한다', () => {
      expectLottoNumbersToBeSorted(lottoBundle);
    });
  },
);
