import Output from '../Views/Output.js';

const throwError = (message) => {
  Output.error(message);
  return false;
};

export default throwError;
