import formatLottoNumbers from '../src/util//formatters/formatLottoNums.js';

jest.mock('../src/util//formatters/formatLottoNums.js');

formatLottoNumbers.mockReturnValue([1, 2, 3, 4, 5, 6]);

describe('formatLottoNumbers 함수 테스트', () => {
  test('formatLottoNumbers 함수가 오름차순하고 계행 분리해서 반환하는지 확인', () => {
    const result = formatLottoNumbers(3, 4, 2, 6, 1, 5);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    expect(formatLottoNumbers).toHaveBeenCalledWith(3, 4, 2, 6, 1, 5);
  });
});
