import { Console } from "@woowacourse/mission-utils";
import {
  isDuplicateBouns,
  isDuplicatePrize,
  isInputEmpty,
  isInputNotZero,
  isMoreBouns,
  isMorePrize,
  isNotNumber,
  isNotNumberPrize,
  isNotUnitThousand,
  isOutOfRangeBounsInput,
  isOutOfRangeInput,
} from "./InputValueVaild.js";

export const inputAmount = async () => {
  const amount = await Console.readLineAsync(
    "구입 금액을 입력해 주세요." + "\n"
  );

  isInputEmpty(amount);
  isInputNotZero(amount);
  isNotNumber(amount);
  isNotUnitThousand(amount);

  return amount;
};

export const inputPrize = async () => {
  const prizeNumber = await Console.readLineAsync(
    "당첨 번호를 입력해 주세요." + "\n"
  );
  const prizeArray = prizeNumber.split(",");
  const prize = prizeArray.map((e) => e.trim());

  isInputEmpty(prize);
  isNotNumberPrize(prize);
  isOutOfRangeInput(prize);
  isMorePrize(prize);
  isDuplicatePrize(prize);

  return prize;
};

export const inputBouns = async (prize) => {
  const bounsNumber = await Console.readLineAsync(
    "보너스 번호를 입력해 주세요." + "\n"
  );

  const bounsArray = bounsNumber.split(" ");
  const bouns = bounsArray.map((e) => e.trim());

  isInputEmpty(bouns);
  isNotNumber(bouns);
  isOutOfRangeBounsInput(bouns);
  isMoreBouns(bouns);
  isDuplicateBouns(prize, bouns);

  return bouns;
};
