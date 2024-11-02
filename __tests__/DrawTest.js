import Draw from "../src/model/Draw.js";

describe("추첨 클래스 테스트 - 당첨 번호 테스트", () => {
  test("당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Draw([1, 2, 3, 4, 5, 6, 7], [7]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Draw([1, 2, 3, 4, 5, 5], [6]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호의 개수가 6개보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new Draw([1, 2, 3, 4, 5], [6]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 1이상 45이하가 아닌 숫자가 포홤돼있으면 예외가 발생한다.", () => {
    expect(() => {
      new Draw([1, 2, 3, 4, 45, 46], [42]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호는 양의 정수를 제외한 문자자가 존재하면 예외가 발생한다.", () => {
    expect(() => {
      new Draw([1, 2, 3, 4, 45, "d"], [5]);
    }).toThrow("[ERROR]");
  });
});

describe("추첨 클래스 테스트 - 보너스 번호 테스트", () => {
  test("보너스 번호는 양의 정수를 제외한 문자가 존재하면 예외가 발생한다.", () => {
    expect(() => {
      new Draw([1, 2, 3, 4, 5, 6], ["d"]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1이상 45이하가 아닌 숫자가 포홤돼있으면 예외가 발생한다.", () => {
    expect(() => {
      new Draw([1, 2, 3, 4, 5, 6], [48]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨번호에 포함돼있는 숫자면 예외가 발생한다.", () => {
    expect(() => {
      new Draw([1, 2, 3, 4, 5, 6], [6]);
    }).toThrow("[ERROR]");
  });
});
