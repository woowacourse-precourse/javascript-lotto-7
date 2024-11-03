import { Console } from '@woowacourse/mission-utils';

const MAX_RETRY_COUNT = 3;

const tryLogic = async (callback, parameter, tryCount) => {
  try {
    const result = await callback(parameter);
    return result;
  } catch (e) {
    if (tryCount < MAX_RETRY_COUNT) {
      Console.print(e.message);
      const result = await tryLogic(callback, parameter, tryCount + 1);
      return result;
    }

    throw new Error(e);
  }
}

export async function retryIfOccurredError(callback, parameter) {
  const result = await tryLogic(callback, parameter, 0);
  return result;
}