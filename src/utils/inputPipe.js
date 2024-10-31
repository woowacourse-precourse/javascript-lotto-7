import OutputView from '../view/OutputView.js';

const inputPipe = async (inputFn, parseFn, validatorClass, getResultFn, additionalArgs = []) => {
  try {
    const input = await inputFn();
    const parsed = parseFn(input);
    const instance = new validatorClass(parsed, ...additionalArgs);

    return instance[getResultFn]();

  } catch (error) {
    OutputView.printErrorMessage(error.message);
    return await inputPipe(inputFn, parseFn, validatorClass, getResultFn, additionalArgs);
  }
}

export default inputPipe;
