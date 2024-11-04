import { MissionUtils } from "@woowacourse/mission-utils"
import { getPurchase, getWinNumber } from "../../../src/feature/UI/getUserInput.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('입력 테스트 : 구매액', () => {
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
});

describe('입력 테스트 : 당첨 번호', () => {
  test.each([
    ['1,2,3,4,5,6', '1,2,3,4,5,6'],
    ['45,44,43,42,41,40', '45,44,43,42,41,40'],
    ['22,24,26,41,43,45', '22,24,26,41,43,45'],
  ])('입력 값에 대한 문자열 반환 { 입력 : %s, 반환 : %s', 
    async (input, result) => {
      // given
      const userInput = [input];

      mockQuestions(userInput);

      // when
      const winNumber = await getWinNumber();

      // then
      expect(winNumber).toBe(result);
    }
  );
});