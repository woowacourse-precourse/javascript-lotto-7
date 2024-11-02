# javascript-lotto-precourse

## 💻 과제 설명
> 로또 구매를 통해 당첨 금액 및 수익률을 확인하는 게임.

## 📂 파일 구조

## 📝 진행 순서도
- [ ] 로또 구입 금액 입력
    - **[ 입력 ]** 로또를 구입할 금액을 입력 받는다.
        - **[ 검증 ]** 입력된 값이 유효한 값인지 검증한다.
    - **[ 기능 ]** 구입 가능한 로또의 개수를 판별한다.
- [ ] 로또 번호 발급
    - **[ 출력 ]** 구입한 로또의 개수만큼 로또 번호를 발급해준다.
        - **[ 기능 ]** 1~45 사이의 로또 번호 6자리를 랜덤으로 생성해 구입한 로또의 개수만큼 반환한다.
- [ ] 당첨 번호 & 보너스 번호 설정
    - **[ 입력 ]** 당첨 번호를 입력 받는다.
        - **[ 검증 ]** 입력된 값이 유효한 값인지 검증한다.
    - **[ 입력 ]** 보너스 번호를 입력 받는다.
        - **[ 검증 ]** 입력된 값이 유효한 값인지 검증한다.
- [ ] 당첨 여부 확인 & 수익률 계산
    - **[ 기능 ]** 유저가 구매한 로또 번호와 당첨 번호를 비교한다.
    - **[ 기능 ]** 당첨 내역 결과를 파악한다.
    - **[ 기능 ]** 당첨 금액을 계산한다.
    - **[ 기능 ]** 로또 구입 금액과 당첨 금액을 토대로 수익률을 계산한다.
- [ ] 결과 출력
    - **[ 출력 ]** 정보와 함께 당첨 내역을 출력한다.
    - **[ 출력 ]** 총 수익률을 출력한다.

## 📑 구현할 기능 목록
### 입력
- [ ] 로또를 구입할 금액을 입력 받는다.
    - [ ] 빈 값이 입력되어선 안된다.
    - [ ] 0원이 입력되어선 안된다.
    - [ ] 숫자 외의 값이 입력되어선 안된다.
    - [ ] 숫자 사이의 공백이 있어선 안된다.
    - [ ] 1,000원 단위로 나누어 떨어지지 않으면 안된다.
    - [ ] 음수 값이 입력되면 안된다.
    - [ ] 로또 구입 금액은 100,000,000원을 초과해선 안된다.
- [ ] 당첨 번호를 입력 받는다.
    - [ ] 당첨 번호는 숫자와 콤마 외의 값이 입력되어선 안된다.
    - [ ] 당첨 번호 개수는 6개 보다 모자라거나 초과해선 안된다.
    - [ ] 당첨 번호에 1~45 외의 숫자가 포함되어선 안된다.
    - [ ] 동일한 당첨 번호가 입력되어선 안된다.
- [ ] 보너스 번호를 입력 받는다.
    - [ ] 숫자 외의 값이 입력되어선 안된다.
    - [ ] 보너스 번호는 로또 당첨 번호과 중복 되어선 안된다.
    - [ ] 숫자 사이의 공백이 있어선 안된다.
    - [ ] 당첨 번호에 1~45 외의 숫자가 포함되어선 안된다.

### 출력
- [ ] 구입한 로또의 개수만큼 로또 번호를 발급해준다.
    - 로또 번호를 오름차순으로 정렬해준다.
- [ ] 당첨 내역을 출력한다.
- [ ] 총 수익률을 출력한다.
    - 수익률은 소수점 둘째 자리에서 반올림한다.

### 기능
- [ ] 구입 가능한 로또의 개수를 판별한다.
- [ ] 1~45 사이의 로또 번호 6자리를 랜덤으로 생성해 구입한 로또의 개수만큼 반환한다.
- [ ] 유저가 구매한 로또 번호와 당첨 번호를 비교한다.
- [ ] 당첨 내역 결과를 파악한다.
- [ ] 당첨 금액을 계산한다.
- [ ] 로또 구입 금액과 당첨 금액을 토대로 수익률을 계산한다.

## ⚠️ 예외 케이스
### ▶️ 로또 구입 금액 입력 기능
- **[ 예외 - 빈 값 ]**
  - 빈 값이 입력되어선 안된다.
  - ex. `""`
- **[ 예외 - 숫자 0 ]**
  - 0원이 입력되어선 안된다.
  - ex. `0`
- **[ 예외 - 숫자 외의 값 ]**
  - 숫자 외의 값이 입력되어선 안된다.
  - ex. `ㅁㄴㅇ`, `@@`
- **[ 예외 - 공백 ]**
  - 숫자 사이의 공백이 있어선 안된다.
  - ex.`10 000`
- **[ 예외 - 유효한 단위 ]**
  - 1,000원 단위로 나누어 떨어지지 않으면 안된다.
  - ex.`17364256`
- **[ 예외 - 음수 ]**
  - 음수 값이 입력되면 안된다.
  - ex. `-10000`
- **[ 예외 - 최대 금액 ]**
  - 로또 구입 금액은 100,000,000원을 초과해선 안된다.
  - ex. `200,000,000`

### ▶️ 로또 당첨 번호 입력 기능
- **[ 예외 - 유효한 입력값 ]**
  - 당첨 번호는 숫자와 콤마 외의 값이 입력되어선 안된다.
  - ex. `1;2;3;4;5;6`, `1;2 2;3;4;5;6`
- **[ 예외 - 당첨 번호 개수 ]**
  - 당첨 번호 개수는 6개 보다 모자라거나 초과해선 안된다.
  - ex. `1,2,3,4,5`, `1,2,3,4,5,6,7`
- **[ 예외 - 유효한 로또 번호 범위 ]**
  - 당첨 번호에 1~45 외의 숫자가 포함되어선 안된다.
  - ex. `0,-1,-2,3,4,5,46`
- **[ 예외 - 동일한 값 ]**
  - 동일한 당첨 번호가 입력되어선 안된다.
  - ex. `1,1,2,3,4,5`

### ▶️ 로또 보너스 번호 입력 기능
- **[ 예외 - 숫자 외의 값 ]**
  - 숫자 외의 값이 입력되어선 안된다.
  - ex. `ㅁㄴㅇ`, `@@`
- **[ 예외 - 로또 번호 중복 ]**
  - 보너스 번호는 로또 당첨 번호과 중복 되어선 안된다.
  - ex. `1,2,3,4,5,6`일 때, 보너스 번호 `6`
- **[ 예외 - 공백 ]**
  - 숫자 사이의 공백이 있어선 안된다.
  - ex.`10 000`
- **[ 예외 - 유효한 로또 번호 범위 ]**
  - 당첨 번호에 1~45 외의 숫자가 포함되어선 안된다.
  - ex. `0,-1,-2,3,4,5,6`

## 🤙 커밋 컨벤션

| Type     | Description |
|----------|-------------|
| feat     | 기능 추가       |
| fix      | 버그 수정       |
| docs     | 문서 관련       |
| style    | 코드 포맷 변경    |
| refactor | 코드 리팩토링     |
| test     | 테스트 관련 코드   |
| chore    | 그 외 자잘한 수정  |
