const Utils = {
  parsingNumber: (input) => {
    if (input === null) {
      return NaN;
    }

    return Number(input);
  },
};

export default Utils;
