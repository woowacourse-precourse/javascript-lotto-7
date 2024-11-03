import Lotto from "../../src/models/Lotto";

describe("Lotto 클래스 테스트", () => {
  // 기능 테스트
  describe("로또 클래스 기능 테스트", () => {
    test.each([
      {
        description: "로또 번호로 인스턴스 생성된다",
        input: [1, 2, 3, 4, 5, 6],
        expected: [1, 2, 3, 4, 5, 6],
      },
      {
        description: "정렬되지 않은 번호를 입력하면 정렬된 결과를 반환한다",
        input: [6, 3, 1, 4, 5, 2],
        expected: [1, 2, 3, 4, 5, 6],
      },
    ])("$description", ({ input, expected }) => {
      // when
      const lotto = new Lotto(input);

      // then
      expect(lotto.getNumbers()).toEqual(expected);
    });
  });

  // 에러 테스트
  describe("로또 번호 예외 처리 테스트", () => {
    test.each([
      {
        description: "발행된 로또가 6개가 아니면 예외가 발생한다",
        input: [1, 2, 3, 4, 5],
      },
      {
        description: "중복된 숫자가 있으면 예외가 발생한다",
        input: [1, 2, 3, 4, 5, 5],
      },
      {
        description: "숫자가 아닌 요소가 포함되어 있으면 예외가 발생한다",
        input: [1, 2, "a", 4, 5, 6],
      },
    ])("$description", ({ input }) => {
      // when, then
      expect(() => new Lotto(input)).toThrow("[ERROR]");
    });
  });
});
