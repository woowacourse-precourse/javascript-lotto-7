import { Console } from '@woowacourse/mission-utils';
import { InputHandler } from '../src/io/index.js';
import { MESSAGES } from '../src/constants/index.js';

describe('입력 핸들러 테스트', () => {
  let inputHandler;

  beforeEach(() => {
    jest.spyOn(Console, 'readLineAsync');
    inputHandler = new InputHandler();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('금액 입력 처리', () => {
    test('올바른 금액을 입력하면 숫자로 변환하여 반환한다', async () => {
      Console.readLineAsync.mockResolvedValueOnce('1000');

      const result = await inputHandler.processMoneyInput(MESSAGES.moneyInput);

      expect(result).toBe(1000);
    });

    test('잘못된 금액 입력 후 올바른 금액 입력 시 정상 처리된다', async () => {
      Console.readLineAsync
        .mockResolvedValueOnce('abc') // 문자 입력
        .mockResolvedValueOnce('1500') // 1,000원 단위가 아닌 입력
        .mockResolvedValueOnce('1234567890123456') // 범위 밖
        .mockResolvedValueOnce('3000'); // 올바른 입력

      const result = await inputHandler.processMoneyInput(MESSAGES.moneyInput);

      expect(result).toBe(3000);
      expect(Console.readLineAsync).toHaveBeenCalledTimes(4);
    });
  });

  describe('당첨 번호 입력 처리', () => {
    test('올바른 당첨 번호를 입력하면 숫자 배열로 변환하여 반환한다', async () => {
      Console.readLineAsync.mockResolvedValueOnce('1,2,3,4,5,6');

      const result = await inputHandler.processMainInput(MESSAGES.mainNumbers);

      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('잘못된 당첨 번호 입력 후 올바른 입력 시 정상 처리된다', async () => {
      Console.readLineAsync
        .mockResolvedValueOnce('1,2,3,4,5,a') // 문자 입력
        .mockResolvedValueOnce('1,2,3,4,5,46') // 범위 밖
        .mockResolvedValueOnce('1,2,3,4,5') // 숫자 부족
        .mockResolvedValueOnce('1,2,3,4,5,6,7') // 숫자 과다
        .mockResolvedValueOnce('1,2,3,4,5,5') // 중복 숫자
        .mockResolvedValueOnce('1,2,3,4,5,6'); // 올바른 입력

      const result = await inputHandler.processMainInput(MESSAGES.mainNumbers);

      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
      expect(Console.readLineAsync).toHaveBeenCalledTimes(6);
    });
  });

  describe('보너스 번호 입력 처리', () => {
    beforeEach(() => {
      inputHandler.store.setMainNumbers([1, 2, 3, 4, 5, 6]);
    });

    test('올바른 보너스 번호를 입력하면 숫자로 변환하여 반환한다', async () => {
      Console.readLineAsync.mockResolvedValueOnce('7');

      const result = await inputHandler.processBonusInput(MESSAGES.bonusNumber);

      expect(result).toBe(7);
    });

    test('잘못된 보너스 번호 입력 후 올바른 입력 시 정상 처리된다', async () => {
      Console.readLineAsync
        .mockResolvedValueOnce('a') // 문자
        .mockResolvedValueOnce('1') // 중복된 번호
        .mockResolvedValueOnce('46') // 범위 밖
        .mockResolvedValueOnce('7'); // 올바른 입력

      const result = await inputHandler.processBonusInput(MESSAGES.bonusNumber);

      expect(result).toBe(7);
      expect(Console.readLineAsync).toHaveBeenCalledTimes(4);
    });
  });
});
