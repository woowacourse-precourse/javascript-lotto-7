import CalculatingMachine from '../src/services/CalculatingMachine.js';
import LottoResult from '../src/models/LottoResult.js';
import LOTTO_CONSTANTS from '../src/constants/lottoConstants.js';

describe('CalculatingMachine 클래스의 calculate 메서드 테스트', () => {
  test('수익률이 0%인 경우', () => {
    const drawResult = new LottoResult();
    const purchaseAmount = 10000;
    const calculatingMachine = new CalculatingMachine(
      purchaseAmount,
      drawResult
    );

    const result = calculatingMachine.calculate();

    expect(result).toBe('0.0');
  });

  test('수익률이 1000% 이상인 경우', () => {
    const drawResult = new LottoResult();
    drawResult.winFirstPlace();

    const purchaseAmount = 10000;
    const calculatingMachine = new CalculatingMachine(
      purchaseAmount,
      drawResult
    );

    const result = calculatingMachine.calculate();

    expect(result).toBe('20,000,000.0');
  });

  test('수익률에 소수점 포함되는 경우', () => {
    const drawResult = new LottoResult();
    drawResult.winFirstPlace();
    drawResult.winThirdPlace();

    const purchaseAmount = 3000;
    const calculatingMachine = new CalculatingMachine(
      purchaseAmount,
      drawResult
    );

    const result = calculatingMachine.calculate();

    expect(result).toBe('66,716,666.7');
  });

  test('수익률에 소수점이 포함되지 않는 경우', () => {
    const drawResult = new LottoResult();
    drawResult.winSecondPlace();

    const purchaseAmount = LOTTO_CONSTANTS.SECOND_PLACE_MONEY;
    const calculatingMachine = new CalculatingMachine(
      purchaseAmount,
      drawResult
    );

    const result = calculatingMachine.calculate();

    expect(result).toBe('100.0');
  });

  test('수익률이 반올림되는 경우', () => {
    const drawResult = new LottoResult();
    drawResult.winFirstPlace();
    drawResult.winFourthPlace();

    const purchaseAmount = 7500;
    const calculatingMachine = new CalculatingMachine(
      purchaseAmount,
      drawResult
    );

    const result = calculatingMachine.calculate();

    expect(result).toBe('26,667,333.3');
  });
});
