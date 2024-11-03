import OutputView from '../views/OutputView.js';

export default async function asyncFunctionErrorHandler(asyncFn, context) {
  try {
    return await asyncFn.call(context);
  } catch (error) {
    OutputView.printMessage(error.message);
    return asyncFunctionErrorHandler(asyncFn, context);
  }
}
