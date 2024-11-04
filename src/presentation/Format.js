import { OUTPUT_PROMPT } from "../constant/Prompt.js";

const Format = {
  count: (count) => OUTPUT_PROMPT.PURCHASE
    .replace("{count}", count),

  myLotto: (myLotto) => OUTPUT_PROMPT.LOTTO_NUMBERS
    .replace("{numbers}", myLotto.numbers.join(", ")),

  stat: (rankInfo, rankCount) => OUTPUT_PROMPT.MATCH_STAT
    .replace("{matchCount}", rankInfo.matchCount)
    .replace("{prize}", rankInfo.prize.toLocaleString())
    .replace("{count}", rankCount),

  statSecond: (rankInfo, rankCount) => OUTPUT_PROMPT.MATCH_STAT_BONUS
    .replace("{matchCount}", rankInfo.matchCount)
    .replace("{prize}", rankInfo.prize.toLocaleString())
    .replace("{count}", rankCount),

  rate: (rate) => OUTPUT_PROMPT.PROFIT_RATE
    .replace("{rate}", rate.toFixed(1)),
};

export default Format;
