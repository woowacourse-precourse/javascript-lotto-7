import Errors from '../src/Constants/Errors.js';
import BonusNumberInput from '../src/Views/BonusNumberInput.js';

// - 8. 당첨 번호와 보너스 번호 입력

//   - 보너스 번호를 입력했을 때 당첨 번호와 중복인지 확인 및 예외처리
//   - ➕ 보너스 번호를 입력하지 않을 경우 확인 및 예외처리
//   - ➕ 보너스 번호로 문자를 입력한 않은 경우 확인 및 예외처리
//   - ➕ 보너스 번호로 1~45 사이의 숫자를 입력하지 않은 경우 확인 및 예외처리

describe('보너스 번호 입력 Validate 테스트', () => {
  const basicNumbers = [1, 2, 3, 4, 5, 6];
  test('보너스 번호를 입력하지 않으면 다시 입력을 받아야 합니다.', () => {
    expect(() => {
      BonusNumberInput.validate('', basicNumbers);
    }).toThrow(`${Errors.PREFIX} ${Errors.BonusNumber.NO_INPUT}`);
  });

  test('보너스 번호로 숫자를 입력하지 않으면 다시 입력을 받아야 합니다.', () => {
    expect(() => {
      BonusNumberInput.validate('MinSungJe', basicNumbers);
    }).toThrow(`${Errors.PREFIX} ${Errors.BonusNumber.NOT_NUMBER_INPUT}`);
  });

  test('보너스 번호로 1보다 작은 수를 입력하면 다시 입력을 받아야 합니다.', () => {
    expect(() => {
      BonusNumberInput.validate('0', basicNumbers);
    }).toThrow(`${Errors.PREFIX} ${Errors.BonusNumber.NOT_RANGED_INPUT}`);
  });

  test('보너스 번호로 45보다 큰 수를 입력하면 다시 입력을 받아야 합니다.', () => {
    expect(() => {
      BonusNumberInput.validate('800', basicNumbers);
    }).toThrow(`${Errors.PREFIX} ${Errors.BonusNumber.NOT_RANGED_INPUT}`);
  });

  test('보너스 번호가 당첨 번호와 중복되면 다시 입력을 받아야 합니다.', () => {
    expect(() => {
      BonusNumberInput.validate('1', basicNumbers);
    }).toThrow(
      `${Errors.PREFIX} ${Errors.BonusNumber.IS_DUPLICATED_WITH_BASIC_NUMBERS}`
    );
  });

  test('정상적으로 보너스 번호를 입력하면, 통과가 됩니다.', () => {
    expect(BonusNumberInput.validate('7', basicNumbers)).toEqual(true);
  });
});
