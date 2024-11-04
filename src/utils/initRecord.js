const defualtRecord = [
  {
    condition: { matchingCount: 3 },
    price: '5,000',
    priceNumber: 5000,
    count: 0,
  },
  {
    condition: { matchingCount: 4 },
    price: '50,000',
    priceNumber: 50000,
    count: 0,
  },
  {
    condition: { matchingCount: 5, isWinningBonus: false },
    price: '1,500,000',
    priceNumber: 1500000,
    count: 0,
  },
  {
    condition: { matchingCount: 5, isWinningBonus: true },
    price: '30,000,000',
    priceNumber: 30000000,
    count: 0,
  },
  {
    condition: { matchingCount: 6 },
    price: '2,000,000,000',
    priceNumber: 2000000000,
    count: 0,
  },
];

export const initRecord = () => defualtRecord;
