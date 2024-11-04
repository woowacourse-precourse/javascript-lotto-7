const ERRORMESSAGE = Object.freeze({
  PURCHASEAMOUNT: {
    ISNOTNUMBER: '[ERROR] 숫자만 입력해야 합니다.\n',
    ISNOTPOSITIVENUMBER: '[ERROR] 양수만 입력해야 합니다.\n',
    ISNOTGOODNUMBER: '[ERROR] 구입금액이 1000으로 나누어 떨어지지 않습니다.\n',
  },
  WINNINGNUMBER: {
    ISWRONGLENGTH: '[ERROR] 당첨 번호는 6개입니다.\n',
    HASSPACE: '[ERROR] 당첨 번호에는 띄어쓰기가 들어가면 안됩니다.\n',
    ISEMPTY: '[ERROR] 당첨 번호에는 빈칸이 있으면 안됩니다.\n',
    ISNOTINRANGE: '[ERROR] 당첨 번호는 1~45안에 있어야 합니다.\n',
    ISNOTINTEGER: '[ERROR] 당첨 번호는 양의 정수여야 합니다.\n',
    ISNOTDUPLICATE: '[ERROR] 당첨 번호는 중복되면 안 됩니다.\n',
  },
  BONUSNUMBER: {
    ISNOTNUMBER: '[ERROR] 숫자만 입력해야 합니다.\n',
    ISNOTPOSITIVENUMBER: '[ERROR] 양수만 입력해야 합니다.\n',
    ISNOTINRANGE: '[ERROR] 보너스 번호는 1~45안에 있어야 합니다.\n',
    ISNOTDUPLICATE: '[ERROR] 보너스 번호는 당첨 번호와 중복되면 안 됩니다.\n',
    ISNOTNUMBER: '[ERROR] 보너스 번호는 숫자여야 합니다.\n',
  },
});

export default ERRORMESSAGE;
