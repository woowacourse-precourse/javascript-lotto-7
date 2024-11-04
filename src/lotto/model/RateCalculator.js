const formattingDecimalPlace = (number, decimalPlace) => {
  const squaredNumber = 10 ** decimalPlace;
  return Math.round(number * squaredNumber) / squaredNumber;
}

const calculateRateOfReturn = (prizeAmount, purchaseAmount) =>
  formattingDecimalPlace(prizeAmount / purchaseAmount * 100, 2);

const RateCalculator = { calculateRateOfReturn };
export default RateCalculator;

