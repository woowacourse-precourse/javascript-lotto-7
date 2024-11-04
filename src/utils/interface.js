import { Console } from "@woowacourse/mission-utils";

export const getUserInputAsync = (message) => Console.readLineAsync(message);

export const printMessage = (message) => Console.print(message);

export const inputErrorControl = async (callBackFn) => {
  try {
    await callBackFn();
  } catch (error) {
    printMessage(error.message);
    await inputErrorControl(callBackFn);
  }
};
