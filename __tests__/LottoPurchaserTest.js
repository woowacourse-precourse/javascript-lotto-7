import {LOTTO_CONFIG,WINNING_CONDITIONS_DESC} from '../src/constants/lottoConfig.js';
import LottoPurchaser from '../src/models/LottoPurchaser.js';
import WinningLotto from '../src/models/WinningLotto.js';
import Lotto from '../src/models/Lotto.js';

describe('로또 구매자 테스트', () => {
  let lottoPurchaser;

  beforeEach(() => {
    lottoPurchaser = new LottoPurchaser();
  });

  describe('로또 구매 금액 예외 테스트',()=>{
    test('로또 구매 금액이 잘 들어왔을 경우', () => {
      const purchasePrice = LOTTO_CONFIG.LOTTO_PRICE;

      expect(() => lottoPurchaser.purchase(purchasePrice)).not.toThrow('[ERROR]');
    });

    test('로또 구매 금액이 음수일 경우 예외가 발생', () => {
      const purchasePrice = -LOTTO_CONFIG.LOTTO_PRICE;

      expect(() => lottoPurchaser.purchase(purchasePrice)).toThrow('[ERROR]');
    });

    test('로또 구매 금액이 단위에 맞지 않을 경우 예외가 발생', () => {
      const purchasePrice = LOTTO_CONFIG.LOTTO_PRICE * 0.5;

      expect(() => lottoPurchaser.purchase(purchasePrice)).toThrow('[ERROR]');
    });

    test('로또 구매 금액이 0일 경우 예외가 발생', () => {
      const purchasePrice = 0

      expect(() => lottoPurchaser.purchase(purchasePrice)).toThrow('[ERROR]');
    });
  })

  test('로또 구매 기능 검증', () => {
    // given
    const LOTTO_COUNT = 10;
    const purchasePrice = LOTTO_CONFIG.LOTTO_PRICE * LOTTO_COUNT;

    // when
    lottoPurchaser.purchase(purchasePrice);

    // then
    const lottoCount = lottoPurchaser.getLottoCount();
    const lottos = lottoPurchaser.getLottos();

    expect(lottoCount).toBe(LOTTO_COUNT);
    expect(lottos.length).toBe(LOTTO_COUNT);
  });

  describe('당첨 번호와 비교하여 결과를 올바르게 저장하는지 테스트', () => {
    let lottoPurchaser;

    beforeEach(() => {
      lottoPurchaser = new LottoPurchaser();
      const purchasePrice = LOTTO_CONFIG.LOTTO_PRICE;
      lottoPurchaser.setPurchasePrice(purchasePrice);
    });

    test.each([
      {
        description: '6개 일치 결과를 올바르게 저장해야 한다',
        customLottoNumbers: [1, 2, 3, 4, 5, 6],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        expectedResult: {
          [WINNING_CONDITIONS_DESC.MATCH_3]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_4]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_5]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_6]: 1,
        },
      },
      {
        description: '5개 일치 결과를 올바르게 저장해야 한다',
        customLottoNumbers: [1, 2, 3, 4, 5, 8],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        expectedResult: {
          [WINNING_CONDITIONS_DESC.MATCH_3]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_4]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_5]: 1,
          [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_6]: 0,
        },
      },
      {
        description: '5개 일치 + 보너스 번호 결과를 올바르게 저장해야 한다',
        customLottoNumbers: [1, 2, 3, 4, 5, 7],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        expectedResult: {
          [WINNING_CONDITIONS_DESC.MATCH_3]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_4]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_5]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 1,
          [WINNING_CONDITIONS_DESC.MATCH_6]: 0,
        },
      },
      {
        description: '4개 일치 결과를 올바르게 저장해야 한다',
        customLottoNumbers: [1, 2, 3, 4, 8, 9],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        expectedResult: {
          [WINNING_CONDITIONS_DESC.MATCH_3]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_4]: 1,
          [WINNING_CONDITIONS_DESC.MATCH_5]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_6]: 0,
        },
      },
      {
        description: '3개 일치 결과를 올바르게 저장해야 한다',
        customLottoNumbers: [1, 2, 3, 8, 9, 10],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        expectedResult: {
          [WINNING_CONDITIONS_DESC.MATCH_3]: 1,
          [WINNING_CONDITIONS_DESC.MATCH_4]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_5]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 0,
          [WINNING_CONDITIONS_DESC.MATCH_6]: 0,
        },
      },
    ])(
      '$description',
      ({ customLottoNumbers, winningNumbers, bonusNumber, expectedResult }) => {
        // given
        const customLotto = new Lotto(customLottoNumbers);
        lottoPurchaser.setLottos([customLotto]);

        const winningLotto = new WinningLotto();
        winningLotto.setMainLotto(winningNumbers);
        winningLotto.setBonusNumber(bonusNumber);

        // when
        lottoPurchaser.compareLottosWithWinningLotto(winningLotto);

        // then
        const result = lottoPurchaser.getLottoResult().getResult();
        expect(result).toEqual(expectedResult);
      }
    );
  });

  test('로또 수익률 계산 검증', () => {
    // given
    const LOTTO_COUNT = 10;
    const purchasePrice = LOTTO_CONFIG.LOTTO_PRICE * LOTTO_COUNT;
    const WINNING_PRICE = 50000

    jest.spyOn(lottoPurchaser.getLottoResult(), 'getResultPrice').mockReturnValue(WINNING_PRICE);

    // when
    lottoPurchaser.purchase(purchasePrice);
    lottoPurchaser.calculateEarningRate();

    const expectedEarningRate = (WINNING_PRICE / purchasePrice) * LOTTO_CONFIG.EARNING_RATE_MULTIPLIER;

    // then
    expect(lottoPurchaser.getLottoResult().getEarningRate()).toBeCloseTo(expectedEarningRate, LOTTO_CONFIG.EARNING_RATE_PRECISION);
  });
});
