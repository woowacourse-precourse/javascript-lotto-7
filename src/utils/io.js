import { MissionUtils } from "@woowacourse/mission-utils";

const {readLineAsync, print} = MissionUtils.Console;

export default Object.freeze({
  in: readLineAsync,
  out: print,
});