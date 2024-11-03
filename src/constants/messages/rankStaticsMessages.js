import deepFreeze from '../../utils/deepFreeze.js';

const RANK_STATICS_MESSAGES = deepFreeze([
  { rank: 5, message: '3개 일치 (5,000원)' },
  { rank: 4, message: '4개 일치 (50,000원)' },
  { rank: 3, message: '5개 일치 (1,500,000원)' },
  { rank: 2, message: '5개 일치, 보너스 볼 일치 (30,000,000원)' },
  { rank: 1, message: '6개 일치 (2,000,000,000원)' },
]);

export default RANK_STATICS_MESSAGES;
