// src/modules/PurchaseModule.js
class PurchaseModule {
    constructor() {
        this.purchaseAmount = 0;
    }

    setAmount(amount) {
        if (amount < 0) {
            console.log("[ERROR] 금액은 음수가 될 수 없습니다.");
            return;
        }
        this.purchaseAmount = amount;
    }

    getAmount() {
        return this.purchaseAmount;
    }

    validateAmount(amount) {
        if (isNaN(amount) || amount < 1000 || amount % 1000 !== 0) {
            throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
        }
        return amount;
    }
    
    // 로또 티켓 수를 계산하는 메서드 추가
    calculateTicketCount(totalAmount) {
        return totalAmount / 1000; // 예를 들어, 1,000원당 1장
    }
}
export default PurchaseModule;
