# javascript-lotto-precourse

## Game Flow

1. 구매 금액 입력
2. 구매 금액에 해당하는 로또 번호 발급
3. 당첨 번호 입력
4. 보너스 번호 입력
5. 당첨 통계 및 수익률 확인

## 주요 기능

### 로또 구매

- 1,000원당 1장의 로또 발급
- 각 로또는 1~45 범위의 중복되지 않는 6개의 숫자로 구성
- 발급된 로또 번호는 오름차순으로 정렬

### 당첨 확인

- 당첨 번호 6개와 보너스 번호 1개 입력
- 각 로또 번호와 당첨 번호를 비교하여 일치하는 개수에 따라 등수 결정

### 당첨 통계

- 당첨 내역 및 수익률 출력
- 등수별 당첨 내역 집계
  - 1등: 6개 번호 일치 (2,000,000,000원)
  - 2등: 5개 번호 + 보너스 번호 일치 (30,000,000원)
  - 3등: 5개 번호 일치 (1,500,000원)
  - 4등: 4개 번호 일치 (50,000원)
  - 5등: 3개 번호 일치 (5,000원)
- 총 수익률 계산 (소수점 둘째 자리 반올림)

### 로또 구매 시 유효성 검증

- [] 빈 값으로 입력할 경우
- [] 구매 금액이 1,000원 단위가 아닐 경우
- [] 구매 금액이 숫자가 아닐 경우
- [] 구매 금액이 0원 이하일 경우

### 로또 구매 유효성 검증 통과 못할 경우 에러메세지

- 구매 금액을 입력해주세요.
- 구매 금액은 1,000원 단위로 입력해야 합니다.
- 구매 금액은 숫자로 입력해야 합니다.
- 구매 금액은 0원 이하일 수 없습니다.

### 보너스 번호 입력 시 유효성 검증

- [] 빈 값으로 입력할 경우
- [] 보너스 번호가 1~45 범위의 숫자가 아닐 경우
- [] 보너스 번호가 숫자가 아닐 경우
- [] 당첨 번호와 보너스 번호가 중복될 경우
- [] 보너스 번호가 0 이하일 경우
- [] 보너스 번호가 자연수가 아닐 경우 (예시, 1.3 1.5 등)
- [] 보너스 번호가 0일 경우

### 보너스 번호 입력 시 유효성 검증 통과 못할 경우 에러메세지

- 보너스 번호를 입력해주세요.
- 보너스 번호는 1~45 범위의 숫자로 입력해야 합니다.
- 보너스 번호는 숫자로 입력해야 합니다.
- 당첨 번호와 보너스 번호는 중복되지 않아야 합니다.
- 보너스 번호는 0원 이하일 수 없습니다.
- 보너스 번호는 자연수여야 합니다. (잘못된 예시, 1.3 1.5 등)
- 보너스 번호는 0일 수 없습니다.
