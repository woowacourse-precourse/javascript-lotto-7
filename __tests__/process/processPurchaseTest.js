import { MissionUtils } from "@woowacourse/mission-utils"
import processPurchase from "../../src/process/processPurchase";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });

};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
}

describe('구입 금액 입력 통합 기능 테스트', () => {
  test.each([
    ['1000', 1000],
    ['999000', 999000],
    ['123415000', 123415000],
  ])('유효한 입력값( %s )에 대한 반환값( %d )',
    async (input, result) => {
    // given
    const userInput = [input]

    mockQuestions(userInput);

    // when
    const purchase = await processPurchase();

    // then
    await expect(purchase).toBe(result);
  });

  test.each([
    ['천원', '[ERROR] 입력하신 값이 숫자가 아닙니다.', '1000'],
    ['999', '[ERROR] 구매액이 너무 작습니다.', '1000'],
    ['999999', '[ERROR] 구매액은 1,000원으로 나누어 떨어져야 합니다.', '1000000'],
  ])('유효하지 않은 입력값 ( %s )에 대한 에러 메시지 ( %s ) 출력 후 유효한 값 ( %s ) 입력시 재귀 종료', 
    async (InValidInput, errorMessage, validInput) => {
    // given
    const logSpy = getLogSpy();

    const userInput = [InValidInput, validInput];

    mockQuestions(userInput);

    // when
    await processPurchase();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
  });
});