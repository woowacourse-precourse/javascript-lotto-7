const roundToOne = (number) => {
  return (Math.round((number + Number.EPSILON) * 10) / 10).toFixed(1);
};

export default roundToOne;
