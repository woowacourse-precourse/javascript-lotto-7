# javascript-lotto-precourse

# 로또 게임

## ✅ 기능 목록

### 로또 구매 기능

- [x] 로또 구매 금액 입력 받기
  - [x] 입력 받은 금액에 따라 로또 발행 수량 계산 (1,000원 단위)
  - [x] 구매한 로또 수량 출력하기
  - [x] 발행된 로또 번호 출력하기 (오름차순 정렬)
- [x] 로또 번호 자동 생성
  - [x] 1~45 사이의 무작위 숫자 6개 선택
  - [x] 중복되지 않는 번호로 생성

### 당첨 번호 입력 기능

- [x] 당첨 번호 6개 입력 받기
  - [x] 쉼표(,)로 구분된 숫자 입력받기
  - [x] 입력된 번호 검증하기
- [x] 보너스 번호 1개 입력 받기
  - [x] 당첨 번호와 중복되지 않는 숫자 검증하기

### 당첨 확인 및 통계 출력 기능

- [x] 구매한 로또와 당첨 번호 비교하기
- [x] 당첨 등수 별 개수 출력하기
  - [x] 1등: 6개 번호 일치
  - [x] 2등: 5개 번호 + 보너스 번호 일치
  - [x] 3등: 5개 번호 일치
  - [x] 4등: 4개 번호 일치
  - [x] 5등: 3개 번호 일치
- [x] 수익률 계산하여 출력하기 (소수점 둘째 자리에서 반올림)
  - [x] 수익률 계산 기능

## 🚨 예외 처리 목록

### 로또 구매 금액 예외

- [x] 금액이 숫자가 아닌 경우
- [x] 금액이 1,000원으로 나누어떨어지지 않는 경우
- [x] 금액이 0 이하인 경우

### 당첨 번호 입력 예외

- [x] 숫자가 아닌 값이 포함된 경우
- [x] 6개의 숫자가 입력되지 않은 경우
- [x] 중복된 숫자가 있는 경우
- [x] 1~45 범위를 벗어난 숫자가 있는 경우
- [x] 쉼표(,) 구분이 잘못된 경우

### 보너스 번호 입력 예외

- [ ] 숫자가 아닌 경우
- [x] 1~45 범위를 벗어난 경우
- [ ] 당첨 번호와 중복된 경우
