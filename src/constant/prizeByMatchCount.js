import { deepFreeze } from '../utils/deepFreeze.js';

const prizeByMatchCount = deepFreeze({
  5: { matchCount: 3, money: 5000, moneyString: '5,000' },
  4: { matchCount: 4, money: 50000, moneyString: '50,000' },
  3: { matchCount: 5, money: 1_500_000, moneyString: '1,500,000' },
  2: { matchCount: 5, money: 30_000_000, moneyString: '30,000,000' },
  1: { matchCount: 6, money: 2_000_000_000, moneyString: '2,000,000,000' },
});

export { prizeByMatchCount };
