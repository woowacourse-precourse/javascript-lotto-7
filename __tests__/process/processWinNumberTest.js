import { MissionUtils } from "@woowacourse/mission-utils";
import processWinNumber from "../../src/process/processWinNumber";

const mockQuestion = (inputs) => {
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
};

describe('로또 당첨 번호 관련 통합 기능 테스트', () => {
  test.each([
    ['1,2,3,4,5,6', [1, 2, 3, 4, 5, 6]],
    ['1,10,20,30,40,45', [1, 10, 20, 30, 40, 45]],
    ['11,45,10,44,9,43', [9, 10, 11, 43, 44, 45]],
    ['45,44,43,42,41,40', [40, 41, 42, 43, 44, 45]],
  ])('유저의 유효한 입력값 %s 를 정렬된 %O 으로 반환', 
    async (input, result) => {
      // given
      const userInput = [input];

      mockQuestion(userInput);
      // when
      const lotto = await processWinNumber();

      // then
      lotto.forEach((singleNumber, index) => {
        expect(singleNumber).toEqual(result[index]);
      });
    }
  )

  test.each([
    ['1,2,3,4,5', '[ERROR] 로또 번호는 6개여야 합니다.', '1,2,3,4,5,6'], 
    ['   ,   ,  , ,,', '[ERROR] 입력값에 빈칸이 존재합니다.', '1,2,3,4,5,6'], 
    ['1,2,3,4,5,', '[ERROR] 입력값에 빈칸이 존재합니다.', '1,2,3,4,5,6'], 
    ['1.0,2,3,4,5,6', '[ERROR] 입력값에 소수가 존재 합니다.', '1,2,3,4,5,6'],
    ['1,10.999999999999,20,30,40,45', '[ERROR] 입력값에 소수가 존재 합니다.', '1,10,20,30,40,45'],
    ['11,45,10,사십사,9,43', '[ERROR] 입력 번호는 숫자여야 합니다.', '11,45,10,44,9,43'],
    ['45,44,43,42,41,46', '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.', '45,44,43,42,41,40'],
    ['1,2,3,4,-1,5', '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.', '1,2,3,4,5,45'],
    ['1,2,0,4,5,6', '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.', '1,2,3,4,5,6'],
    ['1,1,2,3,4,5', '[ERROR] 중복된 숫자가 존재합니다.', '1,2,3,4,5,6'],
    ['1,2,3,4,5,5', '[ERROR] 중복된 숫자가 존재합니다.', '1,2,3,4,5,6'],
  ])('유저의 유효하지 않은 입력값 %s 에 대한 예외 처리 : %s', 
    async (inValidInput, errorMessage, validInput) => {
      // given
      const userInput = [inValidInput, validInput];
      const logSpy = getLogSpy();

      mockQuestion(userInput);

      // when
      await processWinNumber();


      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
    }
  )
});