import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../utils/constants.js";

const outputView = {
  printErrorMessage(message) {
    Console.print(`${ERROR_MESSAGE.ERROR_MESSAGE_PREFIX} ${message}`);
    // throw new Error(`${ERROR_MESSAGE.ERROR_MESSAGE_PREFIX} ${message}`);
  },

  printLottoCount(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  },

  printLottoNumbers(numbers) {
    Console.print(`[${numbers.join(", ")}]`);
  },
};

export default outputView;
