// DisplayOutput.js
import DisplayOutput from "../src/view/DisplayOutput.js";

describe("DisplayOutput 클래스 - changeNumberStyle 메서드", () => {
  let displayOutput;

  beforeEach(() => {
    displayOutput  = new DisplayOutput();
  });

  test("성공 케이스: 8000이 입력되면 8,000이 반환", () => {
    const changedStyleNumber = displayOutput.changeNumberStyle(8000);
    expect(changedStyleNumber).toBe('8,000');
  });

});
