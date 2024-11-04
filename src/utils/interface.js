import { Console } from "@woowacourse/mission-utils";
import { isInputEmpty } from "./validation.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

const getUserInputAsync = (message) => Console.readLineAsync(message);

export const printMessage = (message) => Console.print(message);

export const getInputWithErrorHandling = async ({ inputMessage, handleInputFn }) => {
  try {
    const input = await getUserInputAsync(inputMessage);
    if (isInputEmpty(input)) throw new Error(ERROR_MESSAGE.INPUT_EMPTY);
    handleInputFn(input);
  } catch (error) {
    printMessage(error.message);
    await getInputWithErrorHandling({ inputMessage, handleInputFn });
  }
};
