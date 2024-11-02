const deepFreeze = (obj) => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  });

  return Object.freeze(obj);
};

export default deepFreeze;
