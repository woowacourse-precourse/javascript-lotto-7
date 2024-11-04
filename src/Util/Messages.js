export const INPUT_MONEY = "구입금액을 입력하세요.\n";
export function PRINT_LOTTEIRES(num){
    return `\n${num}개를 구매했습니다.`;
}
export const INPUT_WINNUMBERS = "당첨 번호를 입력하세요\n";
export const INPUT_BONUS = "보너스 번호를 입력하세요\n";
export const PRINT_RESULT = "당첨 통계\n---\n";
export function PRINT_EACH_RESULT(match,prize,bonus,num){
    if(bonus){
        return `${match}개 일치 , 보너스 볼 일치 (${prize}원) - ${num}개`
    }
    return `${match}개 일치 , (${prize}원) - ${num}개`;
}