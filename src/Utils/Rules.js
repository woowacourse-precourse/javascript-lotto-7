const Rules = {
  isDuplicatedValue(list) {
    const set = new Set(list);
    return list.length != set.size;
  },

  isNotRangedValueIn(numbers) {
    return numbers.some((number) => number < 1 || number > 45);
  },

  isNoValueString(string) {
    return string === '' || string === null || string === undefined;
  },

  isNotRangedValue(number) {
    return number < 1 || number > 45;
  },
};

export default Rules;
