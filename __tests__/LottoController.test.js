import LottoController from "../src/controllers/LottoController.js";
import Validator from "../src/utils/Validator.js";
import errorMessages from "../src/constants/errorMessages.js";
import Lotto from "../src/models/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("../src/utils/Validator.js");
jest.mock("@woowacourse/mission-utils");

describe("LottoController 테스트", () => {
  const purchasedLottoMock = {
    getTickets: jest.fn().mockReturnValue([[1, 2, 3, 4, 5, 6]]),
    getPurchaseAmount: jest.fn().mockReturnValue(1000),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("중복 번호 유효성 검사", () => {
    const winningNumbers = "1,2,3,4,5,5";
    const bonusNum = 6;

    Validator.validateNumsLength.mockImplementation(() => {});
    Validator.validateNumsInRange.mockImplementation(() => {});
    Validator.validateNumsDuplicate.mockImplementation(() => {
      throw new Error(errorMessages.INVALID_DUPLICATE_NUMBER);
    });

    expect(() => {
      new LottoController(winningNumbers, bonusNum, purchasedLottoMock);
    }).toThrow(errorMessages.INVALID_DUPLICATE_NUMBER);

    expect(Validator.validateNumsDuplicate).toHaveBeenCalled();
  });

  test("정상적인 LottoController 인스턴스 생성", () => {
    const winningNumbers = "1,2,3,4,5,6";
    const bonusNum = 7;

    Validator.validateNumsLength.mockImplementation(() => {});
    Validator.validateNumsInRange.mockImplementation(() => {});
    Validator.validateNumsDuplicate.mockImplementation(() => {});
    Validator.checkBonusNotInWinning.mockImplementation(() => {});

    const lottoController = new LottoController(
      winningNumbers,
      bonusNum,
      purchasedLottoMock
    );

    expect(lottoController).toBeInstanceOf(LottoController);
    expect(lottoController.winningNumbers).toBeInstanceOf(Lotto);
    expect(lottoController.bonusNum).toBe(bonusNum);
    expect(lottoController.purchasedLotto).toBe(purchasedLottoMock);
  });

  test("보너스 번호 유효성 검사", () => {
    const winningNumbers = "1,2,3,4,5,6";
    const bonusNum = 5;

    Validator.validateNumsLength.mockImplementation(() => {});
    Validator.validateNumsInRange.mockImplementation(() => {});
    Validator.validateNumsDuplicate.mockImplementation(() => {});

    Validator.checkBonusNotInWinning.mockImplementation(() => {
      throw new Error(errorMessages.INVALID_DUPLICATE_NUMBER);
    });

    expect(() => {
      new LottoController(winningNumbers, bonusNum, purchasedLottoMock);
    }).toThrow(errorMessages.INVALID_DUPLICATE_NUMBER);

    expect(Validator.checkBonusNotInWinning).toHaveBeenCalled();
  });
});
