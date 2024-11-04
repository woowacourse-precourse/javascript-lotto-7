import { parseToArray, parseToNumberArray } from "../../feature/parse/parseArray.js";
import checkDecimal from "../../feature/validate/checkDecimal.js";
import { checkEmptyArguments } from "../../feature/validate/checkEmptyInput.js";

function processParseToArray(userInput) {
  checkDecimal(userInput);
  const PARSED_TO_ARRAY = parseToArray(userInput);
  checkEmptyArguments(PARSED_TO_ARRAY);
  const WIN_NUMBER = parseToNumberArray(PARSED_TO_ARRAY);
  return WIN_NUMBER;
};

export default processParseToArray;