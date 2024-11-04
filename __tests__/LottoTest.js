import Lotto from "../src/Lotto";

describe("로또 테스트", () => {
  test("유효한 로또 번호로 생성", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("유효하지 않은 입력(비배열)로 생성 시 오류 발생", () => {
    expect(() => {
      new Lotto("1, 2, 3, 4, 5, 6");
    }).toThrow("[ERROR] 로또 번호는 배열이어야 합니다.");
  });

  test("유효하지 않은 입력(숫자 부족)으로 생성 시 오류 발생", () => {
    expect(() => {
      new Lotto([1, 2, 3]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("중복된 숫자가 있는 경우 오류 발생", () => {
    expect(() => {
      new Lotto([1, 2, 2, 4, 5, 6]);
    }).toThrow("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
  });

  test("유효하지 않은 숫자 범위로 생성 시 오류 발생", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR] 로또 번호는 1에서 45 사이여야 합니다.");
  });
});
