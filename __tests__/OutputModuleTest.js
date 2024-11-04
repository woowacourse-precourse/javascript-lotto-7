import OutputModules from '../src/views/OutputModules';
import { getLogSpy } from './ApplicationTest';

describe('OutputModule Test', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = getLogSpy();
  });

  test('printMessage : 전달 받은 메세지를 출력한다.', () => {
    const messages = 'hello';

    OutputModules.printMessage(messages);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(messages));
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], '[1, 2, 3, 4, 5, 6]'],
    [[19, 21, 26, 35, 40, 42], '[19, 21, 26, 35, 40, 42]'],
  ])('printBankStatus : 전달받은 숫자 배열을 텍스트로 변환하여 출력한다.', (value, result) => {
    const mockLottos = [{ getNumbers: () => value }];

    OutputModules.printLottos(mockLottos);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
  });

  test.each([
    [2, 2, '5개 일치, 보너스 볼 일치 (30,000,000원) - 2개'],
    [3, 0, '5개 일치 (1,500,000원) - 0개'],
  ])('printRankStatus', (rank, result, log) => {
    OutputModules.printRankStatus(rank, result);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});
