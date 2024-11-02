import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test.each([
    [[1, 2, 3, 4, 5, 6, 7]],
    [[1, 2, 3, 4, 5, 5]],
    [[1, 2, 3, 4, 5, -5]],
    [[1, 2, 3, 4, 5, 0]],
    [[1, 2, 3, 4, 5, 46]],
    [[1, 2, 3, 4, 5, 7.1]],
  ])("areAnagrams(%s, %s) returns %s", (list) => {
    expect(() => {
      new Lotto(list);
    }).toThrow("[ERROR]");
  });
  // test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
  //   expect(() => {
  //     new Lotto([1, 2, 3, 4, 5, 6, 7]);
  //   }).toThrow("[ERROR]");
  // });

  // test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
  //   expect(() => {
  //     new Lotto([1, 2, 3, 4, 5, 5]);
  //   }).toThrow("[ERROR]");
  // });

  // test("로또 번호가 1보다 작거나 45보다 크면 예외가 발생한다.", () => {
  //   expect(() => {
  //     new Lotto([1, 2, 3, 4, 5, -5]);
  //   }).toThrow("[ERROR]");
  // });

  // test("로또 번호가 1보다 작거나 45보다 크면 예외가 발생한다.", () => {
  //   expect(() => {
  //     new Lotto([1, 2, 3, 4, 5, 0]);
  //   }).toThrow("[ERROR]");
  // });

  // test("로또 번호가 1보다 작거나 45보다 크면 예외가 발생한다.", () => {
  //   expect(() => {
  //     new Lotto([1, 2, 3, 4, 5, 46]);
  //   }).toThrow("[ERROR]");
  // });

  // test("로또 번호가 양수가 아니면 예외가 발생한다.", () => {
  //   expect(() => {
  //     new Lotto([1, 2, 3, 4, 5, 44.1]);
  //   }).toThrow("[ERROR]");
  // });

  //"a" is undefined?????
  // test("로또가 번호가 아니면 예외가 발생한다.", () => {
  //   expect(() => {
  //     new Lotto([1, 2, 3, 4, 5, a]);
  //   }).toThrow("[ERROR]");
  // });
});
