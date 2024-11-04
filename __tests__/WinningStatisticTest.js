import calculateWinningStatistics from "../src/CalculateWinningStatistic.js";
describe("calculateWinningStatistics 함수 테스트", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  test("모든 번호 일치 (1등)", () => {
    const ticketList = [[1, 2, 3, 4, 5, 6]];
    const winningCounts = calculateWinningStatistics(
      ticketList,
      winningNumbers,
      bonusNumber
    );
    expect(winningCounts).toEqual([1, 0, 0, 0, 0]);
  });

  test("5개 번호 + 보너스 번호 일치 (2등)", () => {
    const ticketList = [[1, 2, 3, 4, 5, 7]];
    const winningCounts = calculateWinningStatistics(
      ticketList,
      winningNumbers,
      bonusNumber
    );
    expect(winningCounts).toEqual([0, 1, 0, 0, 0]);
  });

  test("5개 번호 일치 (3등)", () => {
    const ticketList = [[1, 2, 3, 4, 5, 8]];
    const winningCounts = calculateWinningStatistics(
      ticketList,
      winningNumbers,
      bonusNumber
    );
    expect(winningCounts).toEqual([0, 0, 1, 0, 0]);
  });

  test("4개 번호 일치 (4등)", () => {
    const ticketList = [[1, 2, 3, 4, 8, 9]];
    const winningCounts = calculateWinningStatistics(
      ticketList,
      winningNumbers,
      bonusNumber
    );
    expect(winningCounts).toEqual([0, 0, 0, 1, 0]);
  });

  test("3개 번호 일치 (5등)", () => {
    const ticketList = [[1, 2, 3, 9, 10, 11]];
    const winningCounts = calculateWinningStatistics(
      ticketList,
      winningNumbers,
      bonusNumber
    );
    expect(winningCounts).toEqual([0, 0, 0, 0, 1]);
  });

  test("일치하는 번호 없음", () => {
    const ticketList = [[8, 9, 10, 11, 12, 13]];
    const winningCounts = calculateWinningStatistics(
      ticketList,
      winningNumbers,
      bonusNumber
    );
    expect(winningCounts).toEqual([0, 0, 0, 0, 0]);
  });
});
