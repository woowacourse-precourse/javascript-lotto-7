import { ParseInput } from "../src/ParseInput";
import {
  ERROR_MESSAGE_MONEY_INPUT,
  ERROR_MESSAGE_JACKPOT_INPUT,
  ERROR_MESSAGE_BONUS_INPUT,
} from "../src/ErrorMessage.js";

describe("ParseInput test", () => {
  const p1 = new ParseInput();
  test("parseMoney() test", () => {
    expect(p1.parseMoney("1000")).toBe(1000);
    expect(() => p1.parseMoney("-1")).toThrow(
      ERROR_MESSAGE_MONEY_INPUT.nonPositive
    );
    expect(() => p1.parseMoney("0")).toThrow(
      ERROR_MESSAGE_MONEY_INPUT.nonPositive
    );
    expect(() => p1.parseMoney("가")).toThrow(ERROR_MESSAGE_MONEY_INPUT.nan);
    expect(() => p1.parseMoney("1000j")).toThrow(ERROR_MESSAGE_MONEY_INPUT.nan);
    expect(() => p1.parseMoney("11.4")).toThrow(
      ERROR_MESSAGE_MONEY_INPUT.nonInteger
    );
  });
  test("parseJackpot() test", () => {
    expect(p1.parseJackpot("1,11,13,24,36,45")).toStrictEqual([
      1, 11, 13, 24, 36, 45,
    ]);
    expect(() => p1.parseJackpot("1,11,13,24,36,44,45")).toThrow(
      ERROR_MESSAGE_JACKPOT_INPUT.invalidLength
    );
    expect(() => p1.parseJackpot("가,1,13,24,36,44")).toThrow(
      ERROR_MESSAGE_JACKPOT_INPUT.nan
    );
    expect(() => p1.parseJackpot("1,13,24,24,36,44")).toThrow(
      ERROR_MESSAGE_JACKPOT_INPUT.duplicated
    );
    expect(() => p1.parseJackpot("11.4,13,17,24,36,43")).toThrow(
      ERROR_MESSAGE_JACKPOT_INPUT.nonInteger
    );
    expect(() => p1.parseJackpot("1,11,-13,24,36,44")).toThrow(
      ERROR_MESSAGE_JACKPOT_INPUT.outOfBound
    );
    expect(() => p1.parseJackpot("1,11,-13.5,24,36,44")).toThrow(
      ERROR_MESSAGE_JACKPOT_INPUT.outOfBound
    );
    expect(() => p1.parseJackpot("11,13,17,24,36,47")).toThrow(
      ERROR_MESSAGE_JACKPOT_INPUT.outOfBound
    );
    expect(() => p1.parseJackpot("0,11,13,24,36,44")).toThrow(
      ERROR_MESSAGE_JACKPOT_INPUT.outOfBound
    );
    expect(() => p1.parseJackpot("1,11,13,24,36,46")).toThrow(
      ERROR_MESSAGE_JACKPOT_INPUT.outOfBound
    );
  });
  test("parseBonus() test", () => {
    expect(p1.parseBonus("7")).toBe(7);
    expect(p1.parseBonus("1")).toBe(1);
    expect(p1.parseBonus("45")).toBe(45);
    expect(() => p1.parseBonus("-1")).toThrow(
      ERROR_MESSAGE_BONUS_INPUT.nonPositive
    );
    expect(() => p1.parseBonus("0")).toThrow(
      ERROR_MESSAGE_BONUS_INPUT.nonPositive
    );
    expect(() => p1.parseBonus("가")).toThrow(ERROR_MESSAGE_BONUS_INPUT.nan);
    expect(() => p1.parseBonus("13.5")).toThrow(
      ERROR_MESSAGE_BONUS_INPUT.nonInteger
    );
    expect(() => p1.parseBonus("-13.5")).toThrow(
      ERROR_MESSAGE_BONUS_INPUT.nonPositive
    );
  });
});
