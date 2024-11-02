# 로또 발매기
## 기능 목록
### 입력
- 로또 구입 금액 입력
    - 입력값은 0이 아닌 양수
    - 1000원으로 나누어 떨어지지 않으면 예외 처리
- 당첨 번호 입력
- 보너스 번호 입력

### 구매 수량 계산 기능

### 로또 발행 기능
- 구매 수량 만큼 로또 발행

### 입력한 당첨 번호 중복 검사 기능

### 로또 번호와 당첨 번호 비교 기능

### 수익률 계산 기능

### 출력
- 발행한 로또 수량 및 번호 출력(번호 오름차순)
- 당첨 내역 출력
- 수익률 출력(둘째 자리 반올림)
- 예외 상황 시 에러 문구 출력

## 플로우
1. 로또 구입 금액을 입력 받는다.
2. 발행한 로또 수량 계산 후 출력한다.
    2-1. 구입 금액이 1000원 단위로 나누어 떨어지지 않는 경우 에러 -> 종료
3. 발행한 번호를 출력한다.
4. 당첨 번호를 입력 받는다.
    4-1. 중복되는 번호가 있는 경우 에러 -> 종료
5. 보너스 번호를 입력 받는다.
    5-1. 입력한 당첨번호와 중복되는 번호가 있는 경우 에러 -> 종료
6. 당첨 내역 및 수익률을 계산 후 출력한다.


## 예외 처리
- 입력 금액이 숫자가 아닌 경우
- 입력 금액이 0미만인 경우
- 입력 금액이 1000원으로 나누어 떨어지지 않는 경우
- 입력한 당첨 번호에 중복되는 번호가 있는 경우
