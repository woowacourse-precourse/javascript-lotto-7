const deepFreeze = (obj) => {
  if (obj === null || typeof obj !== "object") return obj;

  Object.freeze(obj);

  if (Array.isArray(obj)) {
    obj.forEach(deepFreeze);
  } else {
    Object.values(obj).forEach(deepFreeze);
  }

  return obj;
};

export default deepFreeze;
