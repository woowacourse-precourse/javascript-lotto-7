import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test.each([
    [[NaN, 1, 2, 3, 4, 5], '[ERROR] 입력 번호는 숫자여야 합니다.'],
    [[0, 1, 2, 3, 4, 5], '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.'],
    [[46, 45, 44, 43, 42, 41], '[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.'],
    [[1.1, 2, 3, 4, 5, 6], '[ERROR] 번호는 양의 정수여야 합니다.'],
    [[1, 2, 3, 4, 5, 44.9], '[ERROR] 번호는 양의 정수여야 합니다.'],
  ])('로또 번호 %O 의 예외 처리 %s', 
    (input, errorMessage) => {
      // given
      const userInput = input;

      // then
      expect(() => {new Lotto(userInput)}).toThrow(new Error(errorMessage));
  })
});

describe('Lotto 클래스 기능 테스트', () => {
  test.each([
    [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]],
    [[36, 11, 45, 44, 33, 22], [11, 22, 33, 36, 44, 45]],
    [[45, 44, 43, 42, 41, 40], [40, 41, 42, 43, 44, 45]]
  ])('변환된 입력값 %O 를 정렬된 %O 로 변환', 
    (input, result) => {
      // given
      const userInput = input;

      // when
      const lotto = new Lotto(userInput);
      const lottoNumbers = lotto.getWinNumber;

      // then
      lottoNumbers.forEach((singleNumber, index) => {
        expect(singleNumber).toEqual(result[index])
      });
  })
});