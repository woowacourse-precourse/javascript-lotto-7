const Utils = {
  parsingToNumber: (input) => {
    if (input === null) {
      return NaN;
    }

    return Number(input);
  },
};

export default Utils;
