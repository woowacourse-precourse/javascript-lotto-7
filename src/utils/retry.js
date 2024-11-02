import { outputMethod } from './ioMethod.js';

const retry = async (inputMethod, validationMethod) => {
  let input;
  try {
    input = await inputMethod();
    validationMethod(input);
  } catch (error) {
    outputMethod(error.message);
    input = retry(inputMethod, validationMethod);
  }

  return input;
};

export default retry;
