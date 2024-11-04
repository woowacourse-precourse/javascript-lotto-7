import parse from "../../src/application/utils/parse.js";

describe("parse 유틸 테스트", () => {
  test("쉼표로 구분된 문자열을 숫자 배열로 변환한다", () => {
    // given
    const input = "1,2,3,4,5,6";

    // when
    const result = parse(input);

    // then
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("공백이 포함된 입력도 처리한다", () => {
    // given
    const input = "1,  2,3,   4,5,  6";

    // when
    const result = parse(input);

    // then
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
