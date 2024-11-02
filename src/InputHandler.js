import { Console } from "@woowacourse/mission-utils";

class InputHandler {
    // input 관련 클래스

    //  1. 로또 구입 금액 입력받기
    //  1,000원 단위이므로 1000으로 나눈 몫 구하기 (구한 몫 만큼 로또 게임을 진행하게 됨)
    async getLottoTryCount() {
        const money = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        console.log(`입력한 금액: ${money}원`);

        this.validateMoney(money);

        const lottoCount = Math.floor(money / 1000);
        console.log(`구매할 로또 개수: ${lottoCount}개`);
        return lottoCount;
    }

    validateMoney(money) {
        const validatedMoney = Number(money);

        if (isNaN(validatedMoney) || validatedMoney < 1000 || validatedMoney % 1000 !== 0) {
            throw new Error("[ERROR] 로또는 1,000원 단위로만 구매가 가능합니다.");
        }
    }

    //  2. 당첨 번호 입력 받기
    //  입력 시 쉼표를 기준으로 값을 분리하고, 공백도 제거
    //  중복 제거
    //  숫자 범위가 1부터 45 사이인지 확인 (0이하 or 46이상이면 ERROR)
    //  3. 보너스 번호 입력받기
    //  숫자 범위가 1부터 45 사이인지 확인 (0이하 or 46이상이면 ERROR)
}

export default InputHandler;
