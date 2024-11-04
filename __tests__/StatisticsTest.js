import Statistics from "../src/Statistics";
import { Console } from "@woowacourse/mission-utils";

describe("통계 클래스 테스트", () => {
  let statistics;
  let amountArray;

  beforeEach(() => {
    statistics = new Statistics();
    amountArray = [0, 0, 0, 0, 0];
  });

  test("updateAmountArray - 5개 일치하고 보너스 볼도 일치하는 경우", () => {
    statistics.updateAmountArray(amountArray, 5, true);
    expect(amountArray).toEqual([0, 0, 0, 1, 0]);
  });

  test("updateAmountArray - 3개 일치하는 경우", () => {
    statistics.updateAmountArray(amountArray, 3, false);
    expect(amountArray).toEqual([1, 0, 0, 0, 0]);
  });

  test("updateAmountArray - 4개 일치하는 경우", () => {
    statistics.updateAmountArray(amountArray, 4, false);
    expect(amountArray).toEqual([0, 1, 0, 0, 0]);
  });

  test("updateAmountArray - 5개 일치하고 보너스 볼이 일치하지 않는 경우", () => {
    statistics.updateAmountArray(amountArray, 5, false);
    expect(amountArray).toEqual([0, 0, 1, 0, 0]);
  });

  test("updateAmountArray - 6개 일치하는 경우", () => {
    statistics.updateAmountArray(amountArray, 6, false);
    expect(amountArray).toEqual([0, 0, 0, 0, 1]);
  });

  test("displayStatistics - 통계 출력 확인", () => {
    Console.print = jest.fn();

    const count = 10;
    const sumAmount = 30005000;
    amountArray = [1, 0, 0, 1, 0];

    statistics.displayStatistics(count, sumAmount, amountArray);

    expect(Console.print).toHaveBeenNthCalledWith(1, "당첨 통계");
    expect(Console.print).toHaveBeenNthCalledWith(2, "---");
    expect(Console.print).toHaveBeenNthCalledWith(3, "3개 일치 (5,000원) - 1개");
    expect(Console.print).toHaveBeenNthCalledWith(4, "4개 일치 (50,000원) - 0개");
    expect(Console.print).toHaveBeenNthCalledWith(5, "5개 일치 (1,500,000원) - 0개");
    expect(Console.print).toHaveBeenNthCalledWith(6, "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개");
    expect(Console.print).toHaveBeenNthCalledWith(7, "6개 일치 (2,000,000,000원) - 0개");
    expect(Console.print).toHaveBeenNthCalledWith(8, "총 수익률은 300050.0%입니다.\n");
  });
});