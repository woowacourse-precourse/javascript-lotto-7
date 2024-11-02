import { outputMethod } from './ioMethod.js';

const retry = async (inputMethod, validationMethod) => {
  let input;
  try {
    input = await inputMethod();
    validate(input, validationMethod);
  } catch (error) {
    outputMethod(error.message);
    input = retry(inputMethod, validationMethod);
  }

  return input;
};

const validate = (input, validationCondition) => {
  validationCondition.forEach((condition) => {
    condition(input);
  });
};

export default retry;
