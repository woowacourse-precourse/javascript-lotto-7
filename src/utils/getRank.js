const getRank = (winning, bonus) => {
  if (winning === 6) return 1;
  if (winning === 5 && bonus === 1) return 2;
  if (winning === 5 && bonus === 0) return 3;
  if (winning === 4) return 4;
  if (winning === 3) return 5;
  return 0;
};

export default getRank;
