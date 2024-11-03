import Lotto from "../src/features/lotto/Lotto";
import { printOneLine } from "../src/utils/console";
import { getLogSpy } from "../src/utils/testUtils";

describe("로또 클래스 테스트", () => {
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

  //TODO : 오름차순 정렬 테스트 추가
});

describe("로또 클래스 출력 테스트", () => {
  test("로또 numbers가 형식에 맞추어 잘 출력되는지 확인한다.", () => {
    const logSpy = getLogSpy();

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const PRINT_MESSAGE = "[1, 2, 3, 4, 5, 6]";
    printOneLine(lotto.printNumbers());

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(PRINT_MESSAGE));
  });

  //TODO : 오름차순 정렬 테스트 추가
});
