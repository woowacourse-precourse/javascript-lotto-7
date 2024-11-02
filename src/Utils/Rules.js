const Rules = {
  isNotRangedValueInNumbers(numbers) {
    return numbers.some((number) => number < 1 || number > 45);
  },

  isNotNumberInNumbers(numbers) {
    return numbers.some((number) => isNaN(number));
  },

  isDuplicatedValue(list) {
    const set = new Set(list);
    return list.length != set.size;
  },

  isNoValueString(string) {
    return string === '' || string === null || string === undefined;
  },

  isNotRangedValue(number) {
    return number < 1 || number > 45;
  },

  isWrongLength(list, length) {
    return list.length !== length;
  },

  isNotNumber(value) {
    return isNaN(value);
  },

  isIncludedValue(value, list) {
    return list.includes(value);
  },

  isLessThanMin(value, minValue) {
    return value < minValue;
  },

  isMoreThanMax(value, maxValue) {
    return value > maxValue;
  },

  isRestWhenDivided(value, unit) {
    return value % unit !== 0;
  },
};

export default Rules;
