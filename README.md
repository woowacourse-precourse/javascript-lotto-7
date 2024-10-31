# javascript-lotto-precourse

### 구현할 기능 🫧

- [x] 로또 구입 금액 입력 받기
    - [x] 예외 처리
        - [x] 1000으로 나누어 떨어지지 않는 경우
        - [x] 1000보다 작은 숫자인 경우
        - [x] 음수인 경우
        - [x] 실수인 경우
        - [x] 상한 금액 설정: 최대 100000원 (100개)
        - [x] 숫자가 아닌 경우
        - [x] 아무것도 입력하지 않은 경우 (공백)
- [x] 발행한 로또 수량 출력
- [x] 수량만큼 로또 번호 발행 & 출력
    - [x] 중복되지 않는 6개의 숫자
    - [x] 오름차순 정렬
- [x] 당첨 번호 입력 받기
    - [x] 중복되지 않는 6개의 숫자
    - [x] 쉼표(,) 기준으로 구분
    - [x] 예외 처리
        - [x] 숫자가 아닌 값이 있는 경우
        - [x] 숫자가 6개가 아닌 경우
        - [x] 1~45의 범위를 벗어난 숫자가 있는 경우
        - [x] 중복되는 숫자를 입력한 경우
- [x] 보너스 번호 입력 받기
    - [x] 예외 처리
        - [x] 당첨 번호와 중복된 숫자인 경우
        - [x] 숫자가 아닌 경우
        - [x] 1~45의 범위를 벗어난 숫자인 경우
- [x] 당첨 내역 계산 및 출력
    - [x] 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 계산
- [ ] 수익률 출력
    - [ ] 수익률 = 당첨금 / 로또 구입 금액
    - [ ] 소수점 둘째 자리에서 반올림