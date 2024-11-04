import ScratchedLottos from "../src/lotto/class/ScratchedLottos";

describe("ScratchedLottos 클래스 테스트", () => {
  // TODO: 테스트가 통과하도록 프로덕션 코드 구현

  test.each(["a", {}, true, () => {}, NaN])(
    "구매한 모든 로또의 번호는 숫자가 아니면 에러가 발생한다.",
    (notNumber) => {
      expect(() => {
        new ScratchedLottos([[notNumber, 2, 3, 4, 5, 6]]);
      }).toThrow("[ERROR]");
    }
  );

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});
