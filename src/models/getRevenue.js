import { REVENUE_BY_RANKING } from "../constants/constants.js";

function getRevenue(ranking){
    return REVENUE_BY_RANKING[ranking]||REVENUE_BY_RANKING.default;
}
export default getRevenue