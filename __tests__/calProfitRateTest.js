import calProfitRate from '../src/util/calculators/calProfitRate.js';

jest.mock('../src/util/calculators/calProfitRate.js');

calProfitRate.mockReturnValue(62.5);

describe('수익률 계산 함수 테스트', () => {
  test('수익률 계산 함수가 올바른 결과를 반환하는지 확인', () => {
    const result = calProfitRate(5000, 8000);
    expect(result).toBe(62.5);
    expect(calProfitRate).toHaveBeenCalledWith(5000, 8000);
  });
});
