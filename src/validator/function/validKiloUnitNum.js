import { ERR_MESSAGE_NUMBERS } from "../../constants/errorMessages.js";

export const kiloUnitNum = (inputNumber) => {
  const kiloUnitModel = inputNumber / 1000;
  if (
    !(
      Number.isInteger(kiloUnitModel) &&
      kiloUnitModel >= 1 &&
      kiloUnitModel <= 100
    )
  ) {
    throw new Error(ERR_MESSAGE_NUMBERS.INPUT_KILO_UNIT);
  }
};
