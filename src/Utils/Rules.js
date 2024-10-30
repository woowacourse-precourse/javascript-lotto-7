const Rules = {
  isDuplicatedValue(list) {
    const set = new Set(list);
    return list.length != set.size;
  },

  isNotRangedValue(numbers) {
    return numbers.some((number) => number < 1 || number > 45);
  },
};

export default Rules;
