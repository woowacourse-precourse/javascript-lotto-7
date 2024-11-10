우아한테크코스 프리코스 3주차(2024.10.29.~2024.11.04.)

## 🎰 로또 발매기
로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행합니다. </br>
당첨 번호와 보너스 번호를 입력받고 이 당첨번호와 사용자가 구매한 로또 번호를 비교하여 당첨 내역 및 수익률을 출력합니다. </br>
사용자가 잘못된 값을 입력할 경우 "[Error]"메세지와 Error를 발생시키고 해당 지점부터 다시 입력을 받습니다. </br>

## 기능 목록
1. 로또 구입 금액 입력받기
2. 구매한 로또 수량, 발행된 로또 번호 출력하기
3. 당첨번호 입력받기
4. 보너스 번호 입력받기
5. 당첨 내역 및 수익률 출력하기

## 예외 처리
1. 로또 구입 금액 입력받기
    1) 숫자가 아닌 경우 <span style="background-color:#F5F5F5">ex. 입력 예외: "abc"</span>
    2) 양수가 아닌 경우 <span style="background-color:#F5F5F5">ex. 입력 예외: "-1000"</span>
    3) 1,000원 단위로 나눠 떨어지지 않는 경우 <span style="background-color:#F5F5F5">ex. 입력 예외: "11100"</span>
    4) 금액 범위에서 벗어나는 경우
2. 당첨번호 입력받기
    1) 쉼표(,)가 없는 경우 <span style="background-color:#F5F5F5">ex. 입력 예외: "1 2 3 4 5 6"</span>
    2) 숫자가 아닌 문자가 포함된 경우 <span style="background-color:#F5F5F5">ex. 입력 예외: "1,2,3,4,abc,dfg"</span>
    3) 당첨 번호가 숫자 범위 1 ~ 45를 초과한 경우 <span style="background-color:#F5F5F5">ex. 입력예외: "1,2,3,4,500,6"</span>
    4) 당첨 번호가 6개가 아닌 경우 <span style="background-color:#F5F5F5">ex. 입력예외: "1,2,3", "1,2,3,4,5,6,7"</span>
3. 보너스 번호 입력받기
    1) 숫자가 아닌 경우 <span style="background-color:#F5F5F5">ex. 입력 예외: "a"</span>
    2) 보너스 번호가 숫자 범위 1 ~ 45를 초과한 경우 <span style="background-color:#F5F5F5">ex. 입력예외: "100"</span>
    3) 보너스 번호가 당첨번호의 숫자 중 같은 숫자가 있는 경우 <span style="background-color:#F5F5F5">ex. 입력예외: "1,3,5,7,9"(당첨번호), "9"(보너스 번호)</span>
