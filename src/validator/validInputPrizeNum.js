import Lotto from "../Lotto.js";

export const validInputPrizeNum = (inputPrizeNumbers) => {
  try {
    const inputView = new Lotto(inputPrizeNumbers);
    const validInputPrizeNumbers = inputView.isDuplicate(inputPrizeNumbers);
    return validInputPrizeNumbers;
  } catch (error) {
    console.error(`${error.message}`);
    return false;
  }
};
