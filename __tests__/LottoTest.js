import Lotto from "../src/Lotto";
import MoneyValidator from "../src/MoneyValidator.js";
import LottoGenerator from "../src/LottoGenerator.js";

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

  test("구매 금액이 유효하지 않을 경우 예외가 발생한다..", () => {
    expect(() => {
      new MoneyValidator(13987);
      new MoneyValidator("dd");
    }).toThrow("[ERROR]");
  });

  test("금액 입력 시, 구매한 복권들을 출력한다.", () => {
    const lottoGenerator = new LottoGenerator(3000);
    const lottos = lottoGenerator.getLottos();

    expect(lottos).toHaveLength(3),
      lottos.forEach(lotto => {
        expect(lotto).toHaveLength(6);
        lotto.forEach(number => {
          expect(number).toBeGreaterThanOrEqual(1);
          expect(number).toBeLessThanOrEqual(45);
        });
      });
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});
