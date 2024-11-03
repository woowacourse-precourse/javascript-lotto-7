import LottoNumberGenerateService from '../../src/Service/LottoNumberGenerateService';
import { mockRandoms } from '../ApplicationTest';

describe('LottoNumberGenerateService 테스트', () => {
  test('1~45 사이의 중복되지 않는 6개의 숫자를 뽑는다.', () => {
    const mockValues = [[8, 21, 23, 41, 42, 43]];

    mockRandoms(mockValues);

    const lottoNumberGenerateService = new LottoNumberGenerateService();
    const lottoNumbers =
      lottoNumberGenerateService.generateUniqueLottoNumbers();

    expect(lottoNumbers).toHaveLength(6);

    lottoNumbers.forEach(number => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    });
  });
});
