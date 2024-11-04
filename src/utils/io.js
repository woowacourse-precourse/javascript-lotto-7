import { MissionUtils } from '@woowacourse/mission-utils';

const { Console } = MissionUtils;

export default {
  in: (query) => Console.readLineAsync(query),
  out: (message) => Console.print(message),
};
