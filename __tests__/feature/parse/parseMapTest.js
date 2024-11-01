import { addComma } from "../../../src/feature/parse/parseMap";

describe('로또 결과 문자열 변환 기능 테스트', () => {
  test('숫자 3자리 마다 , 추가', () => {
    // given
    const amountKeys = [5000, 50000, 1500000, 30000000, 2000000000];
    const expectedResult = ['5,000', '50,000', '1,500,000', '30,000,000', '2,000,000,000'];
    // when
    const result = addComma(amountKeys);

    // then
    result.forEach((amountKeys, index) => {
      expect(amountKeys).toBe(expectedResult[index])
    });
  });
})