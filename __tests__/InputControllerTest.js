import InputController from '../src/controllers/InputController.js';
import InputView from '../src/views/InputView.js';
import { Console } from '@woowacourse/mission-utils';

jest.mock('../src/views/InputView.js');

describe('InputController 단위 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getValidPurchaseAmount', () => {
    test('1000의 배수가 아닌 금액 입력 시 [ERROR] 메세지가 호출되고 다시 입력값을 받는다', async () => {
      const printSpy = jest.spyOn(Console, 'print');
      InputView.inputPurchaseAmount
        .mockResolvedValueOnce('1500')
        .mockResolvedValueOnce('2000');

      await InputController.getValidPurchaseAmount();

      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

      printSpy.mockRestore();
    });

    test('10억을 초과해 입력할 경우 [ERROR] 메세지가 호출되고 다시 입력값을 받는다', async () => {
      const printSpy = jest.spyOn(Console, 'print');
      InputView.inputPurchaseAmount
        .mockResolvedValueOnce('1000000001')
        .mockResolvedValueOnce('1000');

      await InputController.getValidPurchaseAmount();

      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

      printSpy.mockRestore();
    });

    test('입력값이 비어있을 경우 [ERROR] 메세지가 호출되고 다시 입력값을 받는다', async () => {
      const printSpy = jest.spyOn(Console, 'print');
      InputView.inputPurchaseAmount
        .mockResolvedValueOnce('')
        .mockResolvedValueOnce('1000');

      await InputController.getValidPurchaseAmount();

      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

      printSpy.mockRestore();
    });
  });

  describe('getValidWinningNumbers', () => {
    test('숫자열 요소가 6개가 아닌 경우 [ERROR] 메세지가 호출되고 다시 입력값을 받는다', async () => {
      const printSpy = jest.spyOn(Console, 'print');
      InputView.inputWinningNumbers
        .mockResolvedValueOnce('1,2,3,4,5')
        .mockResolvedValueOnce('1,2,3,4,5,6');

      await InputController.getValidWinningNumbers();

      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

      printSpy.mockRestore();
    });
    test('1~45까지의 자연수를 입력하지 않은 경우 [ERROR] 메세지가 호출되고 다시 입력값을 받는다', async () => {
      const printSpy = jest.spyOn(Console, 'print');
      InputView.inputWinningNumbers
        .mockResolvedValueOnce('0,46,45,44,43,42')
        .mockResolvedValueOnce('1,2,3,4,5,6');

      await InputController.getValidWinningNumbers();

      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

      printSpy.mockRestore();
    });
    test('입력한 숫자열에 중복이 있을 경우 [ERROR] 메세지가 호출되고 다시 입력값을 받는다', async () => {
      const printSpy = jest.spyOn(Console, 'print');
      InputView.inputWinningNumbers
        .mockResolvedValueOnce('1,2,3,4,5,5')
        .mockResolvedValueOnce('1,2,3,4,5,6');

      await InputController.getValidWinningNumbers();

      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

      printSpy.mockRestore();
    });
    test('구분자로 ,이 아닌 다른 것을 쓴 경우 [ERROR] 메세지가 호출되고 다시 입력값을 받는다', async () => {
      const printSpy = jest.spyOn(Console, 'print');
      InputView.inputWinningNumbers
        .mockResolvedValueOnce('1;2;3;4;5;6')
        .mockResolvedValueOnce('1,2,3,4,5,6');

      await InputController.getValidWinningNumbers();

      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

      printSpy.mockRestore();
    });
  });

  describe('getValidBonusNumber', () => {
    test('1~45까지의 자연수를 입력하지 않은 경우 [ERROR] 메세지가 호출되고 다시 입력값을 받는다', async () => {
      const printSpy = jest.spyOn(Console, 'print');
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      InputView.inputBonusNumber
        .mockResolvedValueOnce('0')
        .mockResolvedValueOnce('7');

      await InputController.getValidBonusNumber(winningNumbers);

      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

      printSpy.mockRestore();
    });

    test('당첨 번호와 중복된 숫자를 입력했을 경우 [ERROR] 메세지가 호출되고 다시 입력값을 받는다', async () => {
      const printSpy = jest.spyOn(Console, 'print');
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      InputView.inputBonusNumber
        .mockResolvedValueOnce('1')
        .mockResolvedValueOnce('7');

      await InputController.getValidBonusNumber(winningNumbers);

      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

      printSpy.mockRestore();
    });

    test('숫자를 여러개 입력했을 경우 [ERROR] 메세지가 호출되고 다시 입력값을 받는다', async () => {
      const printSpy = jest.spyOn(Console, 'print');
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      InputView.inputBonusNumber
        .mockResolvedValueOnce('7,8,9')
        .mockResolvedValueOnce('7');

      await InputController.getValidBonusNumber(winningNumbers);

      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));

      printSpy.mockRestore();
    });
  });
});
