import { Console } from "@woowacourse/mission-utils";
import LottoManagerIO from "../src/LottoManagerIO";

describe("로또 입출력 클래스 테스트", () => {
    beforeEach(() => {
        jest.spyOn(Console, "readLineAsync").mockImplementation(() => Promise.resolve("100j"));
      });
    
      afterEach(() => {
        jest.clearAllMocks();
      });
    
      test("로또 구매 금액에 문자를 포함하면 예외가 발생한다.", async () => {
        await expect(LottoManagerIO.inputPurchasePrice()).rejects.toThrow("[ERROR] 금액은 숫자만 입력 가능합니다.");
      });
});
