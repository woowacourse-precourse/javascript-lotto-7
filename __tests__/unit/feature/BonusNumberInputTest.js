import { Console } from '@woowacourse/mission-utils';
import LottoController from '../../../src/components/LottoController.js';

describe('보너스 번호 입력 테스트', () => {
  test('보너스 번호 1을 입력받아 저장한다.', async () => {
    const mockBonusNumber = 1;
    Console.readLineAsync = jest.fn().mockResolvedValue(mockBonusNumber);
    const logSpy = jest.spyOn(Console, 'readLineAsync');

    const lottoController = new LottoController();
    lottoController.setBonusNumber(mockBonusNumber);

    await lottoController.promptBonusNumber();

    expect(logSpy).toHaveBeenCalledWith('보너스 번호를 입력해 주세요.\n');
    expect(lottoController.getBonusNumber()).toBe(mockBonusNumber);
  });

  test('보너스 번호 45를 입력받아 저장한다.', async () => {
    const mockBonusNumber = 45;
    Console.readLineAsync = jest.fn().mockResolvedValue(mockBonusNumber);
    const logSpy = jest.spyOn(Console, 'readLineAsync');

    const lottoController = new LottoController();
    lottoController.setBonusNumber(mockBonusNumber);

    await lottoController.promptBonusNumber();

    expect(logSpy).toHaveBeenCalledWith('보너스 번호를 입력해 주세요.\n');
    expect(lottoController.getBonusNumber()).toBe(mockBonusNumber);
  });
});
