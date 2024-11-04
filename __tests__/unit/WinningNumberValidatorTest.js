import validateWinningNumber from '../../src/validators/WinningNumberValidator';
import { TAGS } from '../../src/constants/message.js';

describe("validateWinningNumber() 테스트", () => {

  test.each([
    ["빈 문자열", ""],
    ["공백 문자열", " "],
  ])("당첨 번호가 %s일 경우, 입력값이 비어 있어 에러가 발생해야 한다", (_, input) => {
    expect(() => validateWinningNumber(input)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["콤마가 없는 단일 숫자", "123456"],
    ["콤마가 없는 여러 숫자", "1 2 3 4 5 6"],
  ])("당첨 번호가 %s일 경우, 구분자가 없어 에러가 발생해야 한다", (_, input) => {
    expect(() => validateWinningNumber(input)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["구분자로 콤마 외의 문자가 포함된 입력 '1/2/3/4/5/6'", "1/2/3/4/5/6"],
    ["구분자로 콤마와 특수 문자가 섞인 입력 '1,2,3;4,5,6'", "1,2,3;4,5,6"],
  ])("당첨 번호가 %s일 경우, 유효하지 않은 구분자로 인해 에러가 발생해야 한다", (_, input) => {
    expect(() => validateWinningNumber(input)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["0", "0,2,3,4,5,6"],
    ["범위를 벗어난 숫자 '46'", "1,2,3,4,5,46"],
    ["음수가 포함된 입력 '-3'", "-3,2,3,4,5,6"],
    ["소수점이 포함된 입력 '3.5'", "3.5,2,3,4,5,6"],
  ])("당첨 번호에 %s이 포함될 경우, 범위 오류로 에러가 발생해야 한다", (_, input) => {
    expect(() => validateWinningNumber(input)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["중복된 숫자가 있는 입력 '1,1,2,3,4,5'", "1,1,2,3,4,5"],
    ["같은 숫자가 반복되는 입력 '7,7,7,7,7,7'", "7,7,7,7,7,7"],
  ])("당첨 번호가 %s일 경우, 중복된 숫자가 있어 에러가 발생해야 한다", (_, input) => {
    expect(() => validateWinningNumber(input)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["숫자 개수가 부족한 입력 '1,2,3,4,5'", "1,2,3,4,5"],
    ["숫자 개수가 초과된 입력 '1,2,3,4,5,6,7'", "1,2,3,4,5,6,7"],
  ])("당첨 번호에 %s일 경우, 숫자 개수가 잘못되어 에러가 발생해야 한다", (_, input) => {
    expect(() => validateWinningNumber(input)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["올바른 형식의 입력 '1,2,3,4,5,6'", "1,2,3,4,5,6"],
    ["범위 내의 숫자 입력 '10,20,30,40,41,45'", "10,20,30,40,41,45"],
  ])("%s일 경우, 예외가 발생하지 않아야 한다", (_, input) => {
    expect(() => validateWinningNumber(input)).not.toThrow();
  });
});
