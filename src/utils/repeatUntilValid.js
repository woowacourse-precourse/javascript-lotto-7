const repeatUntilValid = async (action, errorHandler) => {
  while (true) {
    try {
      return await action();
    } catch ({ message }) {
      errorHandler(message);
    }
  }
};

export default repeatUntilValid;
