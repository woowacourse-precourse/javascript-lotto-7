export const handleError = (boolean, message) => {
  const formattedMessage = `[ERROR] ${message}`;
  if (boolean) throw Error(formattedMessage);
};


export const checkValidNumber = (inputs, message) => {
  handleError(isNaN(inputs), message);
};
