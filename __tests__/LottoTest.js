import { ERROR_MESSAGE } from "../src/constants/message.js";
import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  describe("생성자 테스트 - 정상", () => {});
  describe("생성자 테스트 - 예외", () => {
    test.each`
      #    | input                             | errorMessage
      ${1} | ${[1, 2, 3, 4, 5]}                | ${ERROR_MESSAGE.LOTTO_NUMBER_INPUT.NOT_SIX_NUMBERS}
      ${2} | ${[1, 2, 3, 4, 5, 5]}             | ${ERROR_MESSAGE.LOTTO_NUMBER_INPUT.NOT_SIX_NUMBERS}
      ${3} | ${["a", "b", "c", "d", "e", "f"]} | ${ERROR_MESSAGE.LOTTO_NUMBER_INPUT.NOT_A_NUMBER}
      ${4} | ${[1, 2, 3, 4, 5, "a"]}           | ${ERROR_MESSAGE.LOTTO_NUMBER_INPUT.NOT_A_NUMBER}
      ${5} | ${[1, 2, 3, 4, 5, 46]}            | ${ERROR_MESSAGE.LOTTO_NUMBER_INPUT.OUT_OF_RANGE_1_to_45}
      ${6} | ${[-1, 1, 2, 3, 4, 5]}            | ${ERROR_MESSAGE.LOTTO_NUMBER_INPUT.OUT_OF_RANGE_1_to_45}
    `(
      `case $#) input 이 $input 일 때 , "$errorMessage" 라는 에러 메세지가 등장합니다.`,
      ({ input, errorMessage }) => {
        expect(() => {
          new Lotto(new Set(input));
        }).toThrow(errorMessage);
      },
    );
  });
});
