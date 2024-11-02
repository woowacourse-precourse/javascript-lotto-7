export const LOTTO = Object.freeze({
  ticketPrice: 1000,
  minNumber: 1,
  maxNumber: 45,
  numberCount: 6,
  isInvalidRange: (number) =>
    Number(number) < LOTTO.minNumber || Number(number) > LOTTO.maxNumber,
});
