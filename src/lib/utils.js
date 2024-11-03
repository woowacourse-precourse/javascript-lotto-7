import { MissionUtils } from '@woowacourse/mission-utils';

export const intersection = (arrayA, arrayB) =>
  arrayA.filter((itemA) => arrayB.includes(itemA));

export const getIsNumeric = (value) => !Number.isNaN(Number(value));

export const getIsThousandUnit = (value) => Number.isInteger(value / 1000);

export const getIsPositive = (value) => Number(value) > 0;

export const getIsArrayLengthMatch = (array, length) => array.length === length;

export const getIsAllItemsNumeric = (array) =>
  array.every((item) => getIsNumeric(item));

export const getIsBetweenNumbers = (value, min, max) =>
  value >= min && value <= max;

export const getIsAllItemsBetweenNumbers = (array, min, max) =>
  array.every((item) => getIsBetweenNumbers(item, min, max));

export const getIsAllItemsUnique = (array) =>
  array.length === new Set(array).size;

export const retryWhileCatchedError = async (callbackFunction) => {
  try {
    return await callbackFunction();
  } catch (error) {
    MissionUtils.Console.print(error.message);

    const retried = await retryWhileCatchedError(callbackFunction);
    return retried;
  }
};

export const calculateRate = (part, total) => (part / total) * 100;
