import { Console } from "@woowacourse/mission-utils";
import getRandomNumbers from "../utils/random.js";

const lottoIssue = (count) => {
  for (let i = 0; i < count; i++) {
    Console.print(getRandomNumbers());
  }
};

export default lottoIssue;
