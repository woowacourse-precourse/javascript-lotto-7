const parseNumbers = (input) => {
  if (typeof input !== 'string') {
    return;
  }
  return input.split(',').map((num) => Number(num.trim()));
};

export { parseNumbers };
