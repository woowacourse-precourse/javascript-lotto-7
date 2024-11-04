import { Console } from "@woowacourse/mission-utils";

export async function requestValidInput(message, validator, transformer = (input) => input) {
  while (true) {
    try {
      const rawInput = await readInput(message);
      const tranformedInput = transformer(rawInput);
      if (validator) validator(tranformedInput);  
      return tranformedInput  
    } catch (error) {
      Console.print(error.message);       
    }
  }
};

async function readInput(message) {
  return Console.readLineAsync(message);
};