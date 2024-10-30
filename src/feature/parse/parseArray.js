function parseToNumberArray(userInput) {
  const STRING_ARRAY = userInput.split(',');
  const RESULT = STRING_ARRAY.map((strNumber) => Number(strNumber));
  return RESULT;
};

export default parseToNumberArray;