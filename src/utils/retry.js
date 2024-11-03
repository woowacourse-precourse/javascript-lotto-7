import { Console } from '@woowacourse/mission-utils';

async function retry(fn) {
  while (true) {
    try {
      return await fn();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default retry;
