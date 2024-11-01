import OutputPrint from '../Views/OutputPrint.js';

const throwError = (message) => {
  OutputPrint.error(message);
  OutputPrint.blankLine();
  return false;
};

export default throwError;
