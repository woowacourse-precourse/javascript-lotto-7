class Convert {
  static toNumber(input) {
    return +input;
  }

  static toPercent(value, total) {
    if (total === 0) return 0;

    return (value / total) * 100;
  }

  static toRoundNumber(number, digits = 0) {
    const power = Math.pow(10, digits);
    const shiftedNumber = number * power;
    const isRound = shiftedNumber - Math.trunc(shiftedNumber) >= 0.5;

    if (isRound) return (Math.trunc(shiftedNumber) + 1) / power;

    return (Math.trunc(shiftedNumber) / power).toFixed(digits);
  }
}

export default Convert;
