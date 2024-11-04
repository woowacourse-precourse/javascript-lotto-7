class Vaild {
    validate(amount) {
        // 금액이 숫자인지 확인
        if (isNaN(amount)) {
            throw new Error("[ERROR] 금액은 숫자여야 합니다.");
        }
        // 금액이 1000원 단위인지 확인
        if (amount % 1000 !== 0) {
            throw new Error("[ERROR] 금액은 1000원 단위여야 합니다.");
        }
    }
}

export default Vaild;