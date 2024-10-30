import parseToNumberArray from "../../../src/feature/parse/parseArray";

describe('배열 변환 기능 테스트', () => {
  test.each([
    ['1,2,3,4,5,6', [1, 2, 3, 4, 5, 6]],
    ['11,13,15,17,19,21', [11, 13, 15, 17, 19, 21]],
    ['45,44,1,2,30,31', [45, 44, 1, 2, 30, 31]],
  ])('입력 값 %s 를 %O 으로 변환', (input, result) => {
    // given
    const userInput = input;

    // when
    const resultArray = parseToNumberArray(userInput);

    // then
    expect(resultArray).toEqual(expect.arrayContaining(result))
  });
});