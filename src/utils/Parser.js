const parseNumbers = (input) => {
  return input.split(',').map((num) => Number(num.trim()));
};

export { parseNumbers };
