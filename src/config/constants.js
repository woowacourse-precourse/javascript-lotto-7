export const LOTTO_INFO = {
    LOTTO_TICKET_PRICE : 1000,
    PRIZE : {
        PRIZE_NO_NUMBER_MATCHES: 0,
        PRIZE_ONE_NUMBER_MATCHES : 0,
        PRIZE_TWO_NUMBER_MATCHES : 0,
        PRIZE_THREE_NUMBER_MATCHES : 5_000,
        PRIZE_FOUR_NUMBER_MATCHES : 50_000,
        PRIZE_FIVE_NUMBER_MATCHES : 1_500_000,
        PRIZE_SIX_NUMBER_MATCHES : 2_000_000_000,

    },
    
    BONUS_PRIZE: {
        PRIZE_FIVE_NUMBER_BONUS_MATCHES : 30_000_000,

    }


}

export const DISPLAY_MESSAGE = {
    //input messages
    REQUEST_MONEY_MESSAGE : "구입금액을 입력해 주세요\n",
    ERROR_PAID_MONEY_MESSAGE : `[ERROR] 로또 1장당 금액은 ${LOTTO_INFO.LOTTO_TICKET_PRICE}원입니다. 거스름돈 없이 해주세요`,
    REQUST_WINNING_NUMBER_MESSAGE : "당첨 번호를 입력해 주세요.\n",
    ERROR_WINNING_NUMBER_MESSAGE : "[ERROR]  당첨번호 양식이 올바르지 않습니다. 쉼표로 구분되는 1~45 6자리 숫자를 입력해주세요 \n 예시: 1,2,3,4,5,6",
    REQEUST_BUONUS_NUMBER_MESSAGE : "\n보너스 번호를 입력해 주세요.\n",
    ERROR_BONUS_NUMBER_MESSAGE : "[ERROR]  보너스 번호 양식이 올바르지 않습니다.  1~45사이의 한개의 숫자를 입력해주세요 \n 예시 7",

    //output messages
    PURCHASE_LOTTO_MESSAGE: "개를 구매했습니다.",
    RESULT_MESSAGE : "\n당첨 통계\n---",
}