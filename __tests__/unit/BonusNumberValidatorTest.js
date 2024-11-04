import validateBonusNumber from '../../src/validators/BonusNumberValidator';
import { TAGS } from '../../src/constants/message.js';

describe("validateBonusNumber() 테스트", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6]; 

  test.each([
    ["빈 문자열", ""],
    ["공백 문자열", " "],
  ])("보너스 번호가 %s일 경우, 입력값이 비어 있어 에러가 발생해야 한다", (_, input) => {
    expect(() => validateBonusNumber(input, winningNumbers)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["문자가 포함된 값 'a'", "a"],
    ["특수문자가 포함된 값 '!'", "!"],
    ["콤마 등 구분자가 있는 값 '1,2'", "1,2"],
  ])("보너스 번호에 %s이 포함될 경우, 유효하지 않은 문자로 에러가 발생해야 한다", (_, input) => {
    expect(() => validateBonusNumber(input, winningNumbers)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["음수인 경우 '-1'", "-1"],
    ["0인 경우", "0"],
    ["소수인 경우 '5.5'", "5.5"],
  ])("보너스 번호가 %s일 경우, 유효하지 않은 숫자로 에러가 발생해야 한다", (_, input) => {
    expect(() => validateBonusNumber(input, winningNumbers)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["1보다 작아 범위를 벗어난 경우 '0'", "0"],
    ["45보다 커 범위를 벗어난 경우 '46'", "46"],
  ])("보너스 번호가 %s일 경우, 1 ~ 45의 범위를 벗어나 에러가 발생해야 한다", (_, input) => {
    expect(() => validateBonusNumber(input, winningNumbers)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["이전 당첨 번호와 중복된 경우 '6'", "6"], 
  ])("보너스 번호가 %s일 경우, 중복된 숫자가 있어 에러가 발생해야 한다", (_, input) => {
    expect(() => validateBonusNumber(input, winningNumbers)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["올바른 범위의 숫자 '7'", "7"],
    ["올바른 범위의 숫자 '42'", "42"],
  ])("%s일 경우, 예외가 발생하지 않아야 한다", (_, input) => {
    expect(() => validateBonusNumber(input, winningNumbers)).not.toThrow();
  });
});
