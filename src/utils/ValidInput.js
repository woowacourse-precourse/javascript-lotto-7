import { AMOUNT_ERROR_MESSAGE, WINNER_ERROR_MESSAGE, BONUS_ERROR_MESSAGE } from "./Message.js";
class ValidInput {
  AmountCheck(amount) {
    if (amount === "") {
      throw new Error(AMOUNT_ERROR_MESSAGE.EMPTY);
    }
    if (Number.isNaN(Number(amount))) {
      throw new Error(AMOUNT_ERROR_MESSAGE.ISNAN);
    }
    if (Number(amount) % 1000 !== 0 || Number(amount) === 0) {
      throw new Error(AMOUNT_ERROR_MESSAGE.MUST_BE_1000);
    }

  }
  WinnerCheck(arr) {
    if (arr.length !== 6) {
      throw new Error(WINNER_ERROR_MESSAGE.LENGTH_SIX);
    }
    const set = new Set(arr);
    if (arr.length !== set.size) {
      throw new Error(WINNER_ERROR_MESSAGE.DUPLICATION);
    }
    arr.forEach((num) => {
      if (num === "" || num === null || num === undefined) {
        throw new Error(WINNER_ERROR_MESSAGE.EMPTY);
      }
      const Numbernum = Number(num);
      if (Numbernum < 1 || Numbernum > 45) {
        throw new Error(WINNER_ERROR_MESSAGE.OUT_OF_RANGE);
      }
      if (Number.isNaN(Numbernum)) {
        throw new Error(WINNER_ERROR_MESSAGE.ISNAN);
      }
    });
  }
  BonusCheck(winnerArr, bonus) {
    if (bonus === "" || bonus === null) {
      throw new Error(BONUS_ERROR_MESSAGE.EMPTY);
    }
    const Numberbonus = Number(bonus);
    if (winnerArr.includes(Numberbonus)) {
      throw new Error(BONUS_ERROR_MESSAGE.DUPLICATION);
    }
    if (Numberbonus < 1 || Numberbonus > 45) {
      throw new Error(BONUS_ERROR_MESSAGE.OUT_OF_RANGE);
    }
    if (Number.isNaN(Numberbonus)) {
      throw new Error(BONUS_ERROR_MESSAGE.ISNAN);
    }
  }
}

export default ValidInput;
