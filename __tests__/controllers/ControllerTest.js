import Controller from '../../src/controllers/Controller';
import calculationLotto from '../../src/helpers/calculationLotto';
import Lotto from '../../src/models/Lotto';

jest.mock('../../src/helpers/calculationLotto');
jest.mock('../../src/models/Lotto');

describe('Controller 테스트', () => {
  let mockOutputView, mockInputHandler, controller;

  beforeEach(() => {
    mockOutputView = {
      displayLottoCount: jest.fn(),
      displayLottos: jest.fn(),
      displayLottoResult: jest.fn(),
      displayLottoRateOfReturn: jest.fn(),
    };

    mockInputHandler = {
      getPurchasePrice: jest.fn().mockResolvedValue(5000),
      getWinningLotto: jest.fn().mockResolvedValue([1, 2, 3, 4, 5, 6]),
      getBonusNumber: jest.fn().mockResolvedValue(7),
    };

    calculationLotto.count.mockReturnValue(5);
    calculationLotto.result.mockReturnValue({
      first: { count: 1 },
      second: { count: 1 },
      third: { count: 1 },
      fourth: { count: 1 },
      fifth: { count: 1 },
    });
    calculationLotto.rateOfReturn.mockReturnValue('62.5');

    Lotto.generateMultiple.mockReturnValue([
      { numbers: [1, 2, 3, 4, 5, 6] },
      { numbers: [7, 8, 9, 10, 11, 12] },
    ]);

    controller = new Controller(mockOutputView, mockInputHandler);
  });

  test('start 메서드가 올바른 순서로 각 메서드를 호출하는지 테스트', async () => {
    await controller.start();

    expect(mockInputHandler.getPurchasePrice).toHaveBeenCalledTimes(1);
    expect(calculationLotto.count).toHaveBeenCalledWith(5000);
    expect(mockOutputView.displayLottoCount).toHaveBeenCalledWith(5);

    expect(Lotto.generateMultiple).toHaveBeenCalledWith(5);
    expect(mockOutputView.displayLottos).toHaveBeenCalledWith([
      { numbers: [1, 2, 3, 4, 5, 6] },
      { numbers: [7, 8, 9, 10, 11, 12] },
    ]);

    expect(mockInputHandler.getWinningLotto).toHaveBeenCalledTimes(1);
    expect(mockInputHandler.getBonusNumber).toHaveBeenCalledWith([
      1, 2, 3, 4, 5, 6,
    ]);
    expect(calculationLotto.result).toHaveBeenCalledWith(
      [{ numbers: [1, 2, 3, 4, 5, 6] }, { numbers: [7, 8, 9, 10, 11, 12] }],
      [1, 2, 3, 4, 5, 6],
      7
    );
    expect(mockOutputView.displayLottoResult).toHaveBeenCalledWith({
      first: { count: 1 },
      second: { count: 1 },
      third: { count: 1 },
      fourth: { count: 1 },
      fifth: { count: 1 },
    });

    expect(calculationLotto.rateOfReturn).toHaveBeenCalledWith(
      {
        first: { count: 1 },
        second: { count: 1 },
        third: { count: 1 },
        fourth: { count: 1 },
        fifth: { count: 1 },
      },
      5000
    );
    expect(mockOutputView.displayLottoRateOfReturn).toHaveBeenCalledWith(
      '62.5'
    );
  });
});
