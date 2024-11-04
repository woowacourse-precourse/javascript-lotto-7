import Purchase from "../src/Purchase";


describe("Purchase 클래스 테스트", () => {
    test("구입 금액이 1,000원 미만이면 예외가 발생한다.", () => {
      expect(() => {
        new Purchase(500);
      }).toThrow("[ERROR]");
    });
  
    test("구입 금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
      expect(() => {
        new Purchase(1500);
      }).toThrow("[ERROR]");
    });
  
    test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
      expect(() => {
        new Purchase("abc");
      }).toThrow("[ERROR]");
    });
  
    test("구입 금액이 음수이면 예외가 발생한다.", () => {
      expect(() => {
        new Purchase(-1000);
      }).toThrow("[ERROR]");
    });
  
    test("유효한 구입 금액 입력 시 예외가 발생하지 않는다.", () => {
      expect(() => {
        const purchase = new Purchase(5000);
        expect(purchase.getMoney()).toBe(5000);
        expect(purchase.getTickets()).toBe(5);
      }).not.toThrow();
    });
  });