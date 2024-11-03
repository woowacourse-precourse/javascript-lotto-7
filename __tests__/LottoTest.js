import Lotto from "../src/lotto/Lotto";
import { inValidMessages } from "../src/constant/message.js";
import { WinningLotto } from "../src/lotto/WinningLotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(inValidMessages.lottoCount);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(inValidMessages.duplicate);
  });

  test("로또 번호에 허용 범위를 벗어나는 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 40]);
    }).toThrow(inValidMessages.range);
  });
});

describe("당첨 로또 클래스 테스트", () => {
  test("보너스 번호가 이미 당첨 번호에 포함된 경우 에러를 던진다.", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 6);
    }).toThrow(inValidMessages.duplicateWithWinningNumbers);
  });
});
