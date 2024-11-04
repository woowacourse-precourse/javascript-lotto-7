import Winning from "../src/Model/Winning";
import Rank from "../src/Rank.js";

const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
const BONUS_NUMBER = 7;
const TICKETS = [[1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9], [1, 2, 3, 4, 5, 8], [1, 2, 3, 4, 5, 7]];
const WINNING = new Winning(WINNING_NUMBERS, BONUS_NUMBER, TICKETS);

describe("Winning 클래스 테스트", () => {
  test("구입한 로또와 당첨 번호를 비교하여 일치하는 개수를 계산한다.", () => {
    expect(WINNING.countMatches(TICKETS[0], WINNING_NUMBERS)).toBe(6);
    expect(WINNING.countMatches(TICKETS[1], WINNING_NUMBERS)).toBe(3);
    expect(WINNING.countMatches(TICKETS[2], WINNING_NUMBERS)).toBe(5);
    expect(WINNING.countMatches(TICKETS[3], WINNING_NUMBERS)).toBe(5);
  });

  test("보너스 번호가 일치하면 true, 일치하지 않으면 false를 반환한다.", () => {
    expect(WINNING.hasBonus(TICKETS[2], BONUS_NUMBER)).toBe(false);
    expect(WINNING.hasBonus(TICKETS[3], BONUS_NUMBER)).toBe(true);
  });

  test("구입한 로또의 번호가 당첨 번호와 3개가 일치하면 0을 반환한다", () => {
    expect(WINNING.findIndex(WINNING.countMatches(TICKETS[1], WINNING_NUMBERS))).toBe(0);
  });

  test("구입한 로또의 번호가 당첨 번호와 5개가 일치하고 보너스 번호는 일치 하지 않으면 2를 반환한다", () => {
    expect(WINNING.findIndex(WINNING.countMatches(TICKETS[2], WINNING_NUMBERS), false)).toBe(2);
  });

  test("구입한 로또의 번호가 당첨 번호와 5개가 일치하고 보너스 번호도 일치 하면 3을 반환한다", () => {
    expect(WINNING.findIndex(WINNING.countMatches(TICKETS[3], WINNING_NUMBERS), true)).toBe(3);
  });

  test("createRanks 함수가 Rank 객체 배열을 생성하는지 확인한다.", () => {
    const TEMP_WINNING = new Winning([], 0, []);;
    const RANKS = TEMP_WINNING.createRanks();

    const EXPECTED = [5000, 50000, 1500000, 30000000, 2000000000];
    RANKS.forEach((rank, index) => {
      expect(rank).toBeInstanceOf(Rank);
      expect(rank.count).toBe(0);
      expect(rank.prize).toBe(EXPECTED[index]);
    });
  });

  test("updateCount 함수가 count 값을 증가시키는지 확인한다.", () => {
    const TEMP_WINNING = new Winning([], 0, []);
    const RANKS = TEMP_WINNING.createRanks();

    const FIRST_RANK = 4;
    TEMP_WINNING.updateCount(RANKS, FIRST_RANK);

    expect(RANKS[FIRST_RANK].count).toBe(1);

    RANKS.forEach((rank, index) => {
      if (index !== FIRST_RANK) {
        expect(rank.count).toBe(0);
      }
    });
  });


});