import { MissionUtils } from "@woowacourse/mission-utils"
import getPurchase from "../../../src/feature/UI/getUserInput";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('입력 테스트', () => {
  test.each([
    ['4000', '4000'],
    ['999000', '999000'],
    ['8000', '8000']
  ])('입력 값에 대한 문자열 반환 { 입력 : %s, 반환 : %s }', 
    async (input, result) => {
      // given
      const userInput = [input];

      mockQuestions(userInput);
      // when
      const purchase = await getPurchase();

      // then
      expect(purchase).toBe(result);
    }
  )
})