function parseToArray(userInput) {
  const STRING_ARRAY = userInput.split(',');
  return STRING_ARRAY;
}

function parseToNumberArray(stringArray) {
  const RESULT = stringArray.map((strNumber) => Number(strNumber));
  return RESULT;
};

export { parseToArray, parseToNumberArray };