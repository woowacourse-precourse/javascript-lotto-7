function deepFreeze(object) {
  Object.freeze(object);

  Object.keys(object).forEach((key) => {
    if (typeof object[key] === 'object' && !Object.isFrozen(object[key])) deepFreeze(object[key]);
  });

  return object;
}

export default deepFreeze;
