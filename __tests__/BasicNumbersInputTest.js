import Errors from '../src/Constants/Errors.js';
import BasicNumbersInput from '../src/Views/BasicNumbersInput.js';

// - 7. 당첨 번호와 보너스 번호 입력

//   - 당첨 번호를 입력했을 때 그 중 중복이 있을 경우 확인 및 예외처리
//   - ➕ 당첨 번호로 6개를 입력하지 않은 경우 확인 및 예외처리
//   - ➕ 당첨 번호에 문자를 입력한 경우 확인 및 예외처리
//   - ➕ 당첨 번호에 아무것도 입력하지 않은 경우 확인 및 예외처리
//   - ➕ 당첨 번호가 1~45 사이의 값인지 확인 및 예외처리

describe('당첨번호 입력 Validate 테스트', () => {
  test('당첨 번호는 총 6개를 입력해야 합니다.', () => {
    expect(() => {
      BasicNumbersInput.validate('1,2,3,4,5');
    }).toThrow(`${Errors.PREFIX} ${Errors.BasicNumbers.IS_WRONG_LENGTH}`);
  });

  test('당첨 번호에는 중복을 넣을 수 없습니다.', () => {
    expect(() => {
      BasicNumbersInput.validate('1,2,3,4,5,5');
    }).toThrow(
      `${Errors.PREFIX} ${Errors.BasicNumbers.IS_DUPLICATED_VALUE_IN}`
    );
  });

  test('당첨 번호에는 문자를 입력할 수 없습니다.', () => {
    expect(() => {
      BasicNumbersInput.validate('a,1,2,3,4,5');
    }).toThrow(`${Errors.PREFIX} ${Errors.BasicEachNumber.NOT_NUMBER_INPUT}`);
  });

  test('당첨 번호 중간에 아무 것도 입력하지 않을 수 없습니다.', () => {
    expect(() => {
      BasicNumbersInput.validate('1,,2,3,4,5');
    }).toThrow(`${Errors.PREFIX} ${Errors.BasicEachNumber.NO_INPUT}`);
  });

  test('당첨 번호는 1~45 사이의 숫자가 들어와야 합니다.', () => {
    expect(() => {
      BasicNumbersInput.validate('1,2,3,4,5,60');
    }).toThrow(`${Errors.PREFIX} ${Errors.BasicEachNumber.NOT_RANGED_INPUT}`);
  });

  test('정상 번호를 입력하면, 통과가 됩니다.', () => {
    expect(BasicNumbersInput.validate('1,2,3,4,5,6')).toEqual(true);
  });
});
