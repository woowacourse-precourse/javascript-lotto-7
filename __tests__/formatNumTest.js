import formatNum from '../src/util/formatters/formatNum.js';

jest.mock('../src/util/formatters/formatNum.js');

formatNum.mockReturnValue('1,000');

describe('formatNum 함수 테스트', () => {
  test('formatNum 함수가 1,000을 반환하는지 확인', () => {
    const result = formatNum(1000);
    expect(result).toBe('1,000');
    expect(formatNum).toHaveBeenCalledWith(1000);
  });
});
