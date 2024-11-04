import { MissionUtils } from "@woowacourse/mission-utils";

const { Console } = MissionUtils;

const retry = async(fn) => {
  while (true) {
    try {
      return await fn();
    } catch (e) {
      Console.print(e.message);
    }
  }
};

export default retry;
