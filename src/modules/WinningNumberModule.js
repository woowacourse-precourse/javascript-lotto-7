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
