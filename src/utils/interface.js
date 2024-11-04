import { Console } from "@woowacourse/mission-utils";

const getUserInputAsync = (message) => Console.readLineAsync(message);

export const printMessage = (message) => Console.print(message);

export const getInputWithErrorHandling = async ({ inputMessage, handleInputFn }) => {
  try {
    const input = await getUserInputAsync(inputMessage);
    handleInputFn(input);
  } catch (error) {
    printMessage(error.message);
    await getInputWithErrorHandling({ inputMessage, handleInputFn });
  }
};
