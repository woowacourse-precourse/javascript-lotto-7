export const handleError = (boolean, message) => {
  const formattedMessage = `[ERROR] ${message}`;
  if (boolean) throw Error(formattedMessage);
};

export const checkEmpty = (value, message) => {
  handleError(!value, message);
};

export const checkValidNumber = (inputs, message) => {
  handleError(isNaN(inputs), message);
};
