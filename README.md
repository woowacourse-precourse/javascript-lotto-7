# javascript-lotto-precourse
# 기능 구현 목록
-  입력값: 로또 금액, 당첨 번호, 보너스 번호
-  로또 구입 금액 입력받기
   -  숫자만 입력
   -  1000원 이상 입력
   -  공백 제거
-  받은 금액에서 1000으로 나눠서 로또 구입 장수 출력
-  랜덤한 숫자 6개를 뽑는다(구입 장 수 만큼 반복)
-  랜덤 범위 1-45까지
-  중복 값이 나오면 다시 랜덤숫자를 뽑는다
-  배열에 담는다
-  쉼표를 기준으로 구분, 오름차순 정렬로 출력
-  당첨 번호, 보너스 번호 입력받기
   -  당첨 번호가 6개인지
   -  당첨 번호가 쉼표로 구분되어 있는지
   -  보너스 번호는 1개인지
   -  1~45 범위의 숫자인지
   -  공백 제거
-  몇개가 어떻게 일치하는지 확인(일치하는 갯수에 따라 등수를 나눔)
   -  1등: 6개 번호 일치 / 2,000,000,000원
   -  2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
   -  3등: 5개 번호 일치 / 1,500,000원
   -  4등: 4개 번호 일치 / 50,000원
   -  5등: 3개 번호 일치 / 5,000원
-  수익률 => ((당첨금액 - 구매비용) / 구매비용) \* 100
   -  소수점 둘째 자리 반올림
