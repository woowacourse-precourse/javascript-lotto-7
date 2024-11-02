import { scan } from '../utils/scanner.js';

export const splitLotto = async () => {
  const lottoString = await scan('\n당첨 번호를 입력해 주세요.');
  return lottoString.split(',').map(Number);
};
