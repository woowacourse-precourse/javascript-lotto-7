import ResultController from '../../src/Controller/ResultController';
import LottoService from '../../src/Service/LottoService.js';
import LottoResultView from '../../src/views/LottoResultView.js';

jest.mock('../../src/Service/LottoService');
jest.mock('../../src/views/LottoResultView');

describe('로또 결과 흐름 테스트', () => {
  let resultController;
  let mockLottoService;
  let mockResultView;

  beforeEach(() => {
    jest.clearAllMocks();
    mockLottoService = new LottoService();
    mockResultView = new LottoResultView();
    resultController = new ResultController(mockLottoService, mockResultView);
  });
  test('당첨 결과가 올바르게 계산되고 출력된다', () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const purchaseAmount = 8000;
    const mockResults = { 3: 1, 4: 0, 5: 0, BONUS: 0, 6: 0 };
    const mockEarningRate = '62.5';

    mockLottoService.calculateResults.mockReturnValue(mockResults);
    mockLottoService.calculateEarningRate.mockReturnValue(mockEarningRate);

    resultController.processResults(
      lottos,
      winningNumbers,
      bonusNumber,
      purchaseAmount
    );

    expect(mockLottoService.calculateResults).toHaveBeenCalledWith(
      lottos,
      winningNumbers,
      bonusNumber
    );
    expect(mockResultView.printResults).toHaveBeenCalledWith(mockResults);
    expect(mockLottoService.calculateEarningRate).toHaveBeenCalledWith(
      purchaseAmount,
      mockResults
    );
    expect(mockResultView.printEarningRate).toHaveBeenCalledWith(
      mockEarningRate
    );
  });
});
