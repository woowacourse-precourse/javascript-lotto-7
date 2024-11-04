import deepFreeze from './utils/deepFreeze.js';

export const ERROR_PREFIX = '[ERROR]';

export const SERVICE_CONSTANTS = Object.freeze({
  numberMinBoundary: 1,
  numberMaxBoundsary: 45,
  defaultArrayLength: 6,
  standardUnitAmount: 1000,
});

export const RANK_INFO = deepFreeze({
  1: { correctNumber: 6, correctBonus: false, price: 2000000000 },
  2: { correctNumber: 5, correctBonus: true, price: 30000000 },
  3: { correctNumber: 5, correctBonus: false, price: 1500000 },
  4: { correctNumber: 4, correctBonus: false, price: 50000 },
  5: { correctNumber: 3, correctBonus: false, price: 5000 },
});
