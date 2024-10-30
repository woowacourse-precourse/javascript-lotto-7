export const intersection = (arrayA, arrayB) =>
  arrayA.filter((itemA) => arrayB.includes(itemA));
export const getIsNumeric = (value) => Number.isNaN(Number(value));

export const getIsThousandUnit = (value) => Number.isInteger(value / 1000);

export const getIsPositive = (value) => Number(value) > 0;
