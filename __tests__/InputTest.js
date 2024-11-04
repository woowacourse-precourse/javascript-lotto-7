import Input from '../src/view/Input.js';
import { ERROR_PREFIX } from '../src/Constants.js';
import { mockQuestions } from './ApplicationTest.js';

describe('인풋 뷰 클래스 테스트', () => {
  test.each([
    [
      '구매 금액을 입력 받을 때 빈 문자열을 입력할 시 예외가 발생한다.',
      Input.readPurchaseAmount,
    ],
    [
      '당첨 번호를 입력 받을 때 빈 문자열을 입력할 시 예외가 발생한다.',
      Input.readWinningNumbers,
    ],
    [
      '보너스 번호를 입력 받을 때 빈 문자열을 입력할 시 예외가 발생한다.',
      Input.readBonusNumber,
    ],
  ])('%s', async (_, inputReader) => {
    mockQuestions(['']);

    await expect(inputReader()).rejects.toThrow(ERROR_PREFIX);
  });
  test.each([
    [
      '구매 금액을 입력할 시 숫자를 반환한다.',
      ['3000', 3000, Input.readPurchaseAmount],
    ],
    [
      '보너스 번호를 입력할 시 숫자를 반환한다.',
      ['32', 32, Input.readBonusNumber],
    ],
  ])('%s', async (_, [input, result, inputReader]) => {
    mockQuestions([input]);

    const output = await inputReader();

    expect(output).toBe(result);
  });
  test('당첨 번호를 입력할 시 숫자 배열을 반환한다.', async () => {
    const result = [1, 2, 3, 4, 5, 6];

    mockQuestions(['1,2,3,4,5,6']);

    const output = await Input.readWinningNumbers();

    result.forEach((n, i) => expect(n).toBe(output[i]));
  });
});
