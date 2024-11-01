import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  describe("로또 생성 테스트", () => {
    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow("[ERROR]");
    });

    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow("[ERROR]");
    });
  });

  describe("getLottoNumbers() 메서드 테스트", () => {
    test("로또를 정상적으로 생성하면 로또 번호를 반환한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(lotto.getLottoNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test("로또 번호는 오름차순으로 반환한다.", () => {
      const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
      expect(lotto.getLottoNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
