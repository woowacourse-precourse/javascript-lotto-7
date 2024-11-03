import InputView from "../src/view/InputView"; // InputView 파일 경로에 맞게 수정
import { Console } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe("InputView 클래스 테스트", () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  test("getPayment()는 유효한 금액을 반환해야 한다.", async () => {
    Console.readLineAsync.mockResolvedValue("1000"); 

    const payment = await InputView.getPayment();
    expect(payment).toBe("1000"); 
  });

  test("getPayment()는 숫자가 아닌 값을 입력하면 오류를 발생시킨다.", async () => {
    Console.readLineAsync.mockResolvedValue("abc"); 

    await expect(InputView.getPayment()).rejects.toThrow(
      "[ERROR] 숫자를 입력해야 합니다."
    );
  });

  test("getWinningNumbers()는 유효한 당첨 번호 배열을 반환해야 한다.", async () => {
    Console.readLineAsync.mockResolvedValue("1, 2, 3, 4, 5, 6");

    const winningNumbers = await InputView.getWinningNumbers();
    expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]); 
  });

  test("getWinningNumbers()는 숫자가 아닌 값을 입력하면 오류를 발생시킨다.", async () => {
    Console.readLineAsync.mockResolvedValue("1, 2, abc");

    await expect(InputView.getWinningNumbers()).rejects.toThrow(
      "[ERROR] 숫자를 입력해야 합니다."
    );
  });

  test("getWinningNumbers()는 1이상 45이하의 숫자가 아닌 경우 오류를 발생시킨다.", async () => {
    Console.readLineAsync.mockResolvedValue("0, 46"); 

    await expect(InputView.getWinningNumbers()).rejects.toThrow(
      "[ERROR] 로또 번호는 1이상 45이하를 입력해야 합니다."
    );
  });

  test("getBonusNumber()는 유효한 보너스 번호를 반환해야 한다.", async () => {
    Console.readLineAsync.mockResolvedValue("7"); 

    const bonusNumber = await InputView.getBonusNumber();
    expect(bonusNumber).toBe(7); 
  });

  test("getBonusNumber()는 숫자가 아닌 값을 입력하면 오류를 발생시킨다.", async () => {
    Console.readLineAsync.mockResolvedValue("abc"); 

    await expect(InputView.getBonusNumber()).rejects.toThrow(
      "[ERROR] 숫자를 입력해야 합니다."
    );
  });

  test("getBonusNumber()는 1이상 45이하의 숫자가 아닌 경우 오류를 발생시킨다.", async () => {
    Console.readLineAsync.mockResolvedValue("0");

    await expect(InputView.getBonusNumber()).rejects.toThrow(
      "[ERROR] 로또 번호는 1이상 45이하를 입력해야 합니다."
    );
  });
});
