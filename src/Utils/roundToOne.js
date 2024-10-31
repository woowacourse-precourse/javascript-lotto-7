const roundToOne = (number) => {
  return Math.round((number + Number.EPSILON) * 10) / 10;
};

export default roundToOne;
