import { Console } from "@woowacourse/mission-utils";
import {
  ERROR_MESSAGES,
  LOTTERY_NUM_RANGE,
  PROMPTS,
  ZERO_AMOUNT_TO_COMPARE
} from "../constants.js";
import { printError } from "./printHandlers.js";

const handlePurchaseInput = async () => {
  const purchaseInput = await Console.readLineAsync(PROMPTS.PURCHASE_PROMPT);

  //유저가 입력한 천원단위의 값을 쉽게 비교 하기 위해서 뒤에 "000"의 위치인 -3과
  //유저가 산 로또의 장수를 쉽게 구하기 위해 0을 담음
  const [INPUT_SLICE_RANGE_START, INPUT_SLICE_RANGE_END] = [0, -3];

  if (purchaseInput.slice(INPUT_SLICE_RANGE_END) !== ZERO_AMOUNT_TO_COMPARE) {
    return printError(ERROR_MESSAGES.PURCHASE_STRING);
  }

  return purchaseInput.slice(INPUT_SLICE_RANGE_START, INPUT_SLICE_RANGE_END);
};

const handleLotteryNumInput = async () => {
  const COMMA = ",";
  const lotteryNumInput = await Console.readLineAsync(PROMPTS.LOTTERY_NUM_PROMPT);

  if (!lotteryNumInput.includes(COMMA)) {
    return printError(ERROR_MESSAGES.LOTTERY_NUM_INPUT_COMMA);
  }

  const lotteryNumArray = lotteryNumInput.split(COMMA).map((num) => +num);
  isValidLotteryNumInput(lotteryNumArray);

  return lotteryNumArray;
};

export const isValidLotteryNumInput = (arr) => {
  const ARR_RANGE = 6;

  switch (true) {
    case arr.length !== ARR_RANGE:
      return printError(ERROR_MESSAGES.LOTTERY_NUM_INPUT_LENGTH);

    case arr.some(
      (num) => num > LOTTERY_NUM_RANGE.END || num < LOTTERY_NUM_RANGE.START
    ):
      return printError(ERROR_MESSAGES.LOTTERY_NUM_INPUT_RANGE);

    default:
      break;
  }
};

const handleBonusLotteryNum = async (userLotteryArr) => {
  const bonusNum = await Console.readLineAsync(PROMPTS.LOTTERY_BONUS_PROMPT);

  if (userLotteryArr.includes(bonusNum)) {
    return printError(ERROR_MESSAGES.LOTTERY_BONUS_NUM);
  }

  isValidBonusNumInput(bonusNum);
  return bonusNum;
};

const isValidBonusNumInput = (bonusNum) => {
  switch (true) {
    case !bonusNum.trim():
    case isNaN(Number(bonusNum)):
      return printError(ERROR_MESSAGES.LOTTERY_NUM_INPUT_NaN);

    case bonusNum > LOTTERY_NUM_RANGE.END:
    case bonusNum < LOTTERY_NUM_RANGE.START:
      return printError(ERROR_MESSAGES.LOTTERY_NUM_INPUT_RANGE);

    default:
      break;
  }
};

export { handlePurchaseInput, handleLotteryNumInput, handleBonusLotteryNum };
