import commaizeNumber from '../../src/utils/commaizeNumber';

describe('utils/commaizeNumber', () => {
  it.each([
    [1000, '1,000'],
    [10000, '10,000'],
    [1000.5, '1,000.5'],
    ['1000', '1,000'],
    [10347000, '10,347,000'],
  ])('should parse input %s to commaized string %o', (input, expected) => {
    // when
    const result = commaizeNumber(input);
    // then
    expect(result).toEqual(expected);
  });
});
