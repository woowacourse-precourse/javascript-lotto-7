const validateCondition = (condition, errorMessage) => {
  if (condition) {
    throw new Error(errorMessage);
  }
};

export default validateCondition;
