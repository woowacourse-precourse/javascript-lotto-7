export const validateEmptyString = (input, message) => {
  if (input.trim() === '') {
    throw new Error(message);
  }
};

export const validateNumber = (input, message) => {
  if (Number.isNaN(input)) {
    throw new Error(message);
  }
};

export const validatePositiveInteger = (input, message) => {
  if (input <= 0 || !Number.isInteger(input)) {
    throw new Error(message);
  }
};

export const validateUnit = (input, message) => {
  if (input % 1000 !== 0) {
    throw new Error(message);
  }
};

export const validateMaximum = (input, message) => {
  if (input >= 100000) {
    throw new Error(message);
  }
};

export const validateLottoCount = (input, message) => {
  if (input.length !== 6) {
    throw new Error(message);
  }
};

export const validateLottoSameNumber = (input, message) => {
  const hasSameNumber = new Set(input).size !== input.length;

  if (hasSameNumber) {
    throw new Error(message);
  }
};
