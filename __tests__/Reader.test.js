import { MissionUtils } from '@woowacourse/mission-utils';
import {
  readAndValidateBonusNumber,
  readAndValidateMoney,
  readAndValidateWinningNumber,
} from '../src/utils/reader';
import { ERROR_MESSAGE } from '../src/constant/index.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('입력 테스트', () => {
  test.each([
    ['', ERROR_MESSAGE.EMPTY],
    [' ', ERROR_MESSAGE.NOT_A_NUMBER],
    ['3000j', ERROR_MESSAGE.NOT_A_NUMBER],
    ['3000+1000', ERROR_MESSAGE.NOT_A_NUMBER],
    ['100', ERROR_MESSAGE.NOT_DIVIDED_NUMBER],
    ['3500', ERROR_MESSAGE.NOT_DIVIDED_NUMBER],
  ])('구입 금액 입력 실패 테스트', async (input, message) => {
    mockQuestions([input]);

    await expect(readAndValidateMoney()).rejects.toThrow(message);
  });

  test.each([
    ['', ERROR_MESSAGE.LOTTO_NUM_LENGTH],
    [' ', ERROR_MESSAGE.LOTTO_NUM_LENGTH],
    ['1,2,3,4,5', ERROR_MESSAGE.LOTTO_NUM_LENGTH],
    ['1,2,3,4,5,5', ERROR_MESSAGE.LOTTO_NUM_DUPLICATION],
    ['0,2,3,4,43,45', ERROR_MESSAGE.LOTTO_NUM_RANGE],
    ['1a,2,3,4,32,33', ERROR_MESSAGE.LOTTO_NUM_TYPE],
  ])('당첨 번호 입력 실패 테스트', async (input, message) => {
    mockQuestions([input]);

    await expect(readAndValidateWinningNumber()).rejects.toThrow(message);
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], '', ERROR_MESSAGE.EMPTY],
    [[1, 2, 3, 4, 5, 6], '45j', ERROR_MESSAGE.NOT_A_NUMBER],
    [[1, 2, 3, 4, 5, 6], '300', ERROR_MESSAGE.LOTTO_NUM_RANGE],
    [[1, 2, 3, 4, 5, 6], '0', ERROR_MESSAGE.LOTTO_NUM_RANGE],
    [[1, 22, 25, 34, 35, 40], '40', ERROR_MESSAGE.BONUS_NUM_DUPLICATION],
  ])('보너스 번호 입력 실패 테스트', async (winningNumber, bonusNumber, message) => {
    mockQuestions([bonusNumber]);

    await expect(readAndValidateBonusNumber(winningNumber)).rejects.toThrow(message);
  });
});
