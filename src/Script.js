import { PRIZE_INFO } from "./constant.js";

const Script = {
    PLEASE_INPUT_BUYINGCOST: "구입금액을 입력해 주세요.\n",

    showLottoInfo({ buyingAmount, lottoList }) {
        const buyingAmountScript = `\n${buyingAmount}개를 구매했습니다.\n`;
        const lottoListScript = lottoList
            .map((lotto) => "[" + lotto.join(", ") + "]")
            .join("\n");
        return buyingAmountScript + lottoListScript;
    },

    PLEASE_INPUT_WIN_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",

    PLEASE_INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",

    RANK_SCIRPT: {
        1: "6개 일치 ",
        2: "5개 일치, 보너스 볼 일치 ",
        3: "5개 일치 ",
        4: "4개 일치 ",
        5: "3개 일치 ",
    },

    showTotalProfit(profitcalculator) {
        const { lottoRankResult } = profitcalculator;
        const totalProfit = profitcalculator.calculateProfit();

        const rankScript = this.makeRankScript(lottoRankResult);

        return (
            "\n당첨통계\n---\n" +
            rankScript.join("\n") +
            `\n총 수익률은 ${totalProfit}%입니다.`
        );
    },

    makeRankScript(lottoRankResult) {
        return Object.entries(this.RANK_SCIRPT).map(([rank, script]) => {
            return (
                script +
                `(${PRIZE_INFO[rank].toLocaleString()}원)` +
                " - " +
                `${lottoRankResult[rank]}개`
            );
        });
    },
};

export default Script;
