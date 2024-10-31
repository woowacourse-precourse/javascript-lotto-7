import BonusNumber from "../../src/Class/BonusNumber";

describe('보너스 번호 클래스 기능 테스트', () => {
  test.each([
    ['1', [2, 3, 4, 5, 6, 7] , 1],
    ['20', [10, 11, 13, 25, 30, 31], 20],
    ['45', [1, 40, 41, 42, 43, 44], 45],
  ])('유저의 유효한 입력값 %s , #O 로 인스턴트 생성 : %d', 
    (input, winNumbers, result) => {
    // given
    const userInput = input;
    const lotto = winNumbers;

    // when
    const bonusNumber = new BonusNumber(userInput, lotto).getBonusNumber;

    // then
    expect(bonusNumber).toBe(result);
  });

  test.each([
    ['', [1, 2, 3, 4, 5, 6], '[ERROR] 입력값에 빈칸이 존재합니다.'],
    ['일', [1, 2, 3, 4, 5, 6],'[ERROR] 입력 번호는 숫자여야 합니다.'],
    ['0', [9, 10, 11, 12, 13, 45], '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.'],
    ['46', [9, 10, 11, 12, 13, 45], '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.'],
    ['-1', [40, 41, 42, 43, 44, 45], '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.'],
    ['-45', [40, 41, 42, 43, 44, 45], '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.'],
    ['1.000000000000000001', [22, 23, 25, 30, 31, 33], '[ERROR] 입력값에 소수가 존재 합니다.'],
    ['44.99999999999', [22, 23, 25, 30, 31, 33], '[ERROR] 입력값에 소수가 존재 합니다.'],
    ['1', [1, 10, 20, 30, 40, 45], '[ERROR] 입력하신 보너스 번호가 당첨 번호와 중복됩니다.'],
    ['30', [1, 10, 20, 30, 40, 45], '[ERROR] 입력하신 보너스 번호가 당첨 번호와 중복됩니다.'],
    ['45', [1, 10, 20, 30, 40, 45], '[ERROR] 입력하신 보너스 번호가 당첨 번호와 중복됩니다.'],
  ])('유효하지 않은 입력값 %s 과 당첨번호 %O 와의 비교에 대한 예외처리 %s', 
    (input, lotto, errorMessage) => {
      // given
      const userInput = input;
      const winNumbers = lotto;

      // then
      expect(() => new BonusNumber(userInput, winNumbers)).toThrow(new Error(errorMessage));
    }
  )
})