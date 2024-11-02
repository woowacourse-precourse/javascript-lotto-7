const RANKS = Object.freeze({
  FIFTH: {
    match: 3,
    bonus: false,
    prize: 5000,
    message: "3개 일치 (5,000원) - ",
  },
  FOURTH: {
    match: 4,
    bonus: false,
    prize: 50000,
    message: "4개 일치 (50,000원) - ",
  },
  THIRD: {
    match: 5,
    bonus: false,
    prize: 1500000,
    message: "5개 일치 (1,500,000원) - ",
  },
  SECOND: {
    match: 5,
    bonus: true,
    prize: 30000000,
    message: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  },
  FIRST: {
    match: 6,
    bonus: false,
    prize: 2000000000,
    message: "6개 일치 (2,000,000,000원) - ",
  },
});

export default RANKS;
