export const handleError = (message) => {
  const formattedMessage = `[ERROR] ${message}`;
  throw Error(formattedMessage);
};

export const checkValidNumber = (inputs, message) => {
  if (isNaN(inputs)) handleError(message);

  return inputs;
};
