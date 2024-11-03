export const LOTTO_INFO = {
    LOTTO_TICKET_PRICE : 1000,
    PRIZE : {
        PRIZE_ONE_NUMBER_MATCHES : 0,
        PRIZE_TWO_NUMBER_MATCHES : 0,
        PRIZE_THREE_NUMBER_MATCHES : 5_000,
        PRIZE_FOUR_NUMBER_MATCHES : 50_000,
        PRIZE_FIVE_NUMBER_MATCHES : 1_500_000,
        PRIZE_FIVE_NUMBER_BONUS_MATCHES : 30_000_000,
        PRIZE_SIX_NUMBER_MATCHES : 2_000_000_000,
    }


}

export const DISPLAY_MESSAGE = {
    //input messages
    REQUEST_MONEY_MESSAGE : "구입금액을 입력해 주세요\n",
    ERROR_PAID_MONEY_MESSAGE : `[ERROR] 로또 1장당 금액은 ${LOTTO_INFO.LOTTO_TICKET_PRICE}원입니다. 거스름돈 없이 해주세요`,
    REQUST_WINNING_NUMBER_MESSAGE : "지난 주 당첨 번호를 입력해 주세요.\n",
    REQEUST_BUONUS_NUMBER_MESSAGE : "\n보너스 번호를 입력해 주세요.\n",

    //output messages
    PURCHASE_LOTTO_MESSAGE: "개를 구매했습니다.",
    RESULT_MESSAGE : "\n당첨 통계\n---",
}