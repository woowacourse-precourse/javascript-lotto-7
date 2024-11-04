import VALUES from './values.js';

const { division } = VALUES;

const MESSAGES = {
  empty: '[ERROR] 아무 것도 입력하지 않았습니다.',
  notNumber: '[ERROR] 숫자가 아닌 값을 입력했습니다.',
  notInteger: '[ERROR] 정수를 입력하지 않았습니다.',
  duplications: '[ERROR] 중복되는 숫자가 있습니다.',
  range: '[ERROR] 1~45 이외의 숫자를 입력했습니다.',
  payment: `구입금액을 입력해 주세요.${division}`,
  winningNumbers: `${division}당첨 번호를 입력해 주세요.${division}`,
  bonusNumber: `${division}보너스 번호를 입력해 주세요.${division}`,
};

export default MESSAGES;
