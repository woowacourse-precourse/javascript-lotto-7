export const message = {
   price: "구매금액을 입력해 주세요.\n",
   correctNumber: "당첨 번호를 입력해 주세요.\n",
   bonusNumber: "보너스 번호를 입력해 주세요.\n",
   match: {
     '3': '3개 일치 (5,000원) - ',
     '4': '4개 일치 (50,000원) - ',
     '5': '5개 일치 (1,500,000원) - ',
     '5b': '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
     '6': '6개 일치 (2,000,000,000원) - '
   }
 }
 
export const errorMassage = {
   price: {
     isNotNumber: "[ERROR] 로또 가격은 숫자이어야 합니다",
     invalidNumber: "[ERROR] 로또 가격은 1000으로 나누어 떨어져야 합니다",
   },
   bonusNumber: {
     isNotNumber: "[ERROR] 보너스 번호는 숫자이어야 합니다",
     invalidRange: "[ERROR] 보너스 번호는 1과 45사이의 숫자이어야합니다",
     isNotUniqueNumber: "[ERROR] 보너스 번호는 로또번호와 겹치지 않는 숫자이어야 합니다",
   },
}