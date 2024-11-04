import LottoValidator from "../src/validators/LottoValidator";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidator.validateLottoNumbers([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] : 로또 번호는 6개여야 합니다.");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidator.validateLottoNumbers([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] : 번호들은 중복될 수 없습니다.");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test("로또 번호가 1~45가 아닌 자연수가 있으면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidator.validateLottoNumbers([1, 2, 3, 4, 14, 60]);
    }).toThrow("[ERROR] : 로또 번호는 1부터 45 사이의 숫자이어야 합니다.");
    expect(() => {
      LottoValidator.validateLottoNumbers([-1, 2, 3, 4, 14, 60]);
    }).toThrow("[ERROR] : 로또 번호는 1부터 45 사이의 숫자이어야 합니다.");
  });

  test("로또 번호가 숫자가 아닌 값이 있다면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidator.validateLottoNumbers([1, 2, 3, 4, 5, "hi"]);
    }).toThrow("[ERROR] : 로또 번호는 숫자가 입력되어야 합니다.");
    expect(() => {
      LottoValidator.validateLottoNumbers([1, 2, 3, undefined, 4, 5]);
    }).toThrow("[ERROR] : 로또 번호는 숫자가 입력되어야 합니다.");
  });
  
  test("로또 번호가 정수가 아닌 값이 있다면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidator.validateLottoNumbers([1, 2, 3, 4, 5, 6.6]);
    }).toThrow("[ERROR] : 로또 번호는 정수이어야 합니다.");
  })

  test("로또 번호가 빈 값이 있다면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidator.validateLottoNumbers([1, 2, 3, null, 4, 5]);
    }).toThrow("[ERROR] : 로또 번호는 1부터 45 사이의 숫자이어야 합니다.");
    expect(() => {
      LottoValidator.validateLottoNumbers([1, 2, 3, "", 4, 5]);
    }).toThrow("[ERROR] : 로또 번호는 1부터 45 사이의 숫자이어야 합니다.");
    expect(() => {
      LottoValidator.validateLottoNumbers([1, 2, 3, " ", 4, 5]);
    }).toThrow("[ERROR] : 로또 번호는 1부터 45 사이의 숫자이어야 합니다.")
  })
});
