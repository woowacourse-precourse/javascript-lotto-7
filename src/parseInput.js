import {
  ERROR_MESSAGE_MONEY_INPUT,
  ERROR_MESSAGE_JACKPOT_INPUT,
  ERROR_MESSAGE_BONUS_INPUT,
} from "./ErrorMessage.js";
export class ParseInput {
  #money;
  #jackpot;
  #bonus;
  constructor() {
    this.#money = 0;
    this.#jackpot = [];
    this.#bonus = 0;
  }
  parseMoney(inputString) {
    const value = parseInt(inputString);
    const floatvalue = parseFloat(inputString);
    if (isNaN(inputString)) throw new Error(ERROR_MESSAGE_MONEY_INPUT.nan);
    else if (value <= 0) throw new Error(ERROR_MESSAGE_MONEY_INPUT.nonPositive);
    if (!Number.isInteger(floatvalue))
      throw new Error(ERROR_MESSAGE_MONEY_INPUT.nonInteger);
    this.#money = value;
    return this.#money;
  }
  parseJackpot(inputString) {
    if (inputString === "") throw new Error(ERROR_MESSAGE_JACKPOT_INPUT.empty);
    const returnArray = inputString.split(",");
    if (returnArray.length !== 6)
      throw new Error(ERROR_MESSAGE_JACKPOT_INPUT.invalidLength);
    else if (returnArray.some((value) => isNaN(value)))
      throw new Error(ERROR_MESSAGE_JACKPOT_INPUT.nan);
    else if (
      returnArray
        .map((value) => parseInt(value))
        .some((value) => value > 45 || value < 1)
    )
      throw new Error(ERROR_MESSAGE_JACKPOT_INPUT.outOfBound);
    const floatArray = inputString.split(",").map((value) => parseFloat(value));
    if (floatArray.some((value) => !Number.isInteger(value)))
      throw new Error(ERROR_MESSAGE_JACKPOT_INPUT.nonInteger);
    this.#jackpot = returnArray
      .map((value) => parseInt(value))
      .reduce((prev, curr) => {
        if (prev.includes(curr))
          throw new Error(ERROR_MESSAGE_JACKPOT_INPUT.duplicated);
        prev.push(curr);
        return prev;
      }, []);
    return this.#jackpot;
  }
  parseBonus(inputString) {
    const value = parseInt(inputString);
    const floatvalue = parseFloat(inputString);
    if (isNaN(inputString)) throw new Error(ERROR_MESSAGE_BONUS_INPUT.nan);
    else if (value <= 0) throw new Error(ERROR_MESSAGE_BONUS_INPUT.nonPositive);
    if (!Number.isInteger(floatvalue))
      throw new Error(ERROR_MESSAGE_BONUS_INPUT.nonInteger);
    this.#bonus = value;
    return this.#bonus;
  }
}
