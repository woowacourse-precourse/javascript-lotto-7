const Validates = {
  isNumber(value) {
    return /^[0-9]+$/.test(value);
  },
  isRangeOk(value) {
    return value >= 1 && value <= 45;
  },
};

export default Validates;
