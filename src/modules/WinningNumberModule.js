class WinningNumberModule {
    // 당첨 번호를 설정하는 메서드 (숫자 배열로 변환 및 유효성 검사)
    setWinningNumbers(numbers) {
        // numbers가 빈 배열인 경우
        if (!Array.isArray(numbers) || numbers.length === 0) {
            throw new Error("[ERROR] 당첨 번호를 입력해야 합니다.");
        }

        // 유효성 검사를 위해 직접 validateWinningNumbers 호출
        return this.validateWinningNumbers(numbers);
    }

    // 당첨 번호 유효성 검사 메서드
    validateWinningNumbers(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 당첨 번호는 정확히 6개 입력해야 합니다.");
        }

        const uniqueNumbers = new Set(numbers);
        if (uniqueNumbers.size !== 6) {
            throw new Error("[ERROR] 당첨 번호는 중복되지 않아야 합니다.");
        }

        numbers.forEach((num) => {
            if (num < 1 || num > 45) {
                throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
            }
        });

        return numbers;
    }
}

export default WinningNumberModule;
