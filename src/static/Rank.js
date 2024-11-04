const Rank= Object.freeze({
    prizeNumber: ['3', '4', '5', '5+', '6'],
    resultText: {
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '5+': 'fiveBonus',
      '6': 'six'
    },
    winningCondition: {
      FIRST: 6,
      SECOND: 5,
      THIRD: 5,
      FOURTH: 4,
      FIFTH: 3,
      MIN_WIN: 3
    }
  });

export default Rank;