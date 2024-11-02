import LottoDrawingMachine from '../src/services/LottoDrawingMachine.js';
import LOTTO_CONSTANTS from '../src/constants/lottoConstants.js';

describe('LottoDrawingMachine 클래스의 drawLotto 메서드 테스트', () => {
  let lottoRepository;

  beforeEach(() => {
    lottoRepository = {
      getLottoArray: () => [
        { getLotto: () => [1, 2, 3, 4, 5, 6] },
        { getLotto: () => [1, 2, 3, 4, 5, 7] },
        { getLotto: () => [1, 2, 3, 4, 5, 8] },
        { getLotto: () => [1, 2, 3, 4, 10, 11] },
        { getLotto: () => [1, 2, 3, 12, 13, 14] },
        { getLotto: () => [1, 2, 15, 16, 17, 18] },
        { getLotto: () => [1, 2, 3, 4, 10, 11] },
      ],
    };
  });

  test('drawLotto 메서드의 결과가 올바르게 설정되는지 확인', () => {
    const winningNumber = '1,2,3,4,5,6';
    const bonus = '7';
    const lottoDrawingMachine = new LottoDrawingMachine(
      winningNumber,
      bonus,
      lottoRepository
    );

    const result = lottoDrawingMachine.drawLotto();

    expect(result.getFirstPlaceCount()).toBe(1);
    expect(result.getSecondPlaceCount()).toBe(1);
    expect(result.getThirdPlaceCount()).toBe(1);
    expect(result.getFourthPlaceCount()).toBe(2);
    expect(result.getFifthPlaceCount()).toBe(1);
  });

  test('drawLotto 메서드의 당첨금이 올바르게 계산되는지 확인', () => {
    const winningNumber = '1,2,3,4,5,6';
    const bonus = '7';
    const lottoDrawingMachine = new LottoDrawingMachine(
      winningNumber,
      bonus,
      lottoRepository
    );

    const result = lottoDrawingMachine.drawLotto();

    expect(result.getFirstPlaceMoney()).toBe(LOTTO_CONSTANTS.FIRST_PLACE_MONEY);
    expect(result.getSecondPlaceMoney()).toBe(
      LOTTO_CONSTANTS.SECOND_PLACE_MONEY
    );
    expect(result.getThirdPlaceMoney()).toBe(LOTTO_CONSTANTS.THIRD_PLACE_MONEY);
    expect(result.getFourthPlaceMoney()).toBe(
      LOTTO_CONSTANTS.FOURTH_PLACE_MONEY * 2
    );
    expect(result.getFifthPlaceMoney()).toBe(LOTTO_CONSTANTS.FIFTH_PLACE_MONEY);
  });
});
