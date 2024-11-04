import { Console } from '@woowacourse/mission-utils';

export const retryOnError = async (callback, retries = 3) => {
  try {
    return await callback();
  } catch (error) {
    Console.print(error.message);

    if (retries > 0) {
      return retryOnError(callback, retries - 1);
    }
    throw error;
  }
};
