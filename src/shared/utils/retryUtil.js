import { MissionUtils } from '@woowacourse/mission-utils';

const MAX_RETRY_COUNT = 5;

const retryWithCount = async (callback, retryCount = 0) => {
  try {
    return await callback();
  } catch (error) {
    if (retryCount === MAX_RETRY_COUNT) throw error;
    MissionUtils.Console.print(error.message);
    return retryWithCount(callback, retryCount + 1);
  }
};

export const retryUtil = async (callback) => {
  try {
    return await callback();
  } catch (error) {
    MissionUtils.Console.print(error.message);
    return retryWithCount(callback);
  }
};
