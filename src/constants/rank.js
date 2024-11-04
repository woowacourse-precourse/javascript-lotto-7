export const MATCHCOUNT_6 = "matchCount_6";  // 6개 맞췄을 때
export const MATCHCOUNT_5_WITHBONUS = "matchCount_5_withBonus";  // 5개 + 보너스 맞췄을 때
export const MATCHCOUNT_5_WITHOUTBONUS = "matchCount_5_withoutBonus";  // 5개 맞췄지만 보너스는 못 맞췄을 때
export const MATCHCOUNT_4 = "matchcount_4";  // 4개 맞췄을 때
export const MATCHCOUNT_3 = "matchcount_3";  // 3개 맞췄을 때
export const UNRANK = "unrank"

export const MATCHCOUNT = {
    6: MATCHCOUNT_6,
    4: MATCHCOUNT_4,
    3: MATCHCOUNT_3,
    2: UNRANK,
    1: UNRANK,
    0: UNRANK
}

export const MATCHCOUNT_BONUS_CONDITION = {
    withBonus: MATCHCOUNT_5_WITHBONUS,
    withoutBonus: MATCHCOUNT_5_WITHOUTBONUS
};