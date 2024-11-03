const winningParser = input => {
  const winning = input.split(',').map(num => Number(num));
  return winning;
};

export default winningParser;
