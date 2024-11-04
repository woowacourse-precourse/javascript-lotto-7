import Lotto from "../../src/model/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호가 입력되지 않으면 예외가 발생한다.", () => {
    expect(() => new Lotto()).toThrow("[ERROR] 당첨번호를 입력해야 합니다.");
  });

  test("로또 번호가 양의 정수가 아니면 예외가 발생한다.", () => {
    expect(() => new Lotto("1,2,3,4,5,-6")).toThrow(
      "[ERROR] 당첨 번호는 양의 정수로 입력해야 합니다."
    );
    expect(() => new Lotto("1,2,3,4,5,abc")).toThrow(
      "[ERROR] 당첨 번호는 양의 정수로 입력해야 합니다."
    );
  });

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => new Lotto("1,2,3,4,5")).toThrow(
      "[ERROR] 당첨 번호는 6개의 숫자로 입력해야 합니다."
    );
    expect(() => new Lotto("1,2,3,4,5,6,7")).toThrow(
      "[ERROR] 당첨 번호는 6개의 숫자로 입력해야 합니다."
    );
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => new Lotto("1,2,3,4,5,5")).toThrow(
      "[ERROR] 당첨 번호는 중복된 숫자가 없도록 입력해야 합니다."
    );
  });

  test("1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => new Lotto("1,2,3,4,5,46")).toThrow(
      "[ERROR] 1 이상 45 이하의 숫자여야 합니다."
    );
  });

  test("올바른 로또 번호 입력에 대해서 통과한다.", () => {
    expect(() => new Lotto("1,2,3,4,5,6")).not.toThrow();
  });
});
