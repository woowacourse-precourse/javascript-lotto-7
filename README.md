# javascript-lotto-precourse
# 스스로 정한 규칙
- 로또의 당첨 번호 및 보너스 번호는 서로 중복될 수 없다.
- 로또 구입 금액은 1,000원 이상이어야 한다.

# 기능 구현 목록
## 입력

- [ ] 로또 구입 금액
    - 1000원 단위로 입력 받는다

- [ ] 당첨 번호 입력
    - 쉼표를 기준으로 구분
    - 6개의 숫자를 입력
    - 1~45의 숫자가 중복된 수 없이 입력
- [ ] 보너스 번호 입력
    - 1~45의 숫자만 입력됨
## 출력
- [ ] 로또 구매 결과 출력
  - "1개를 구매했습니다.`\n` [8, 21, 23, 41, 42, 43]\n"
- [ ] 로또 당첨 통계 출력
  - "당첨 통계`\n`---`\n`3개 일치 (5,000원) - 1개\n"

## 게임 매니저

### 로또 generator
- [ ] 구입 금액에 따른 로또 객체 생성(발행)
    - 생성 시 `pickUniqueNumbersInRange` 메서드로 랜덤 변수 생성

### 로또 outcome
- [ ] 각 로또 인스턴스의 성과 측정
  - [ ] `아웃컴 객체`에서 `로또 객체`에 번호를 요청한다.
- [ ] 측정된 성과에 따른 결과 저장
  - [ ] `로또 객체`의 번호에 따라 결과를 산정하고, 아웃컴 객체에 이를 저장한다.
- [ ] (성과 / (`로또 제너레이터`가 입력 받은 구입 금액)) * 100으로 수익률  산정

## 입력 예외 처리
- [ ] 로또 구입 금액이 정수가 아닌 경우
- [ ] 1000원으로 나누어 떨어지지 않는 경우
    - [ ] 숫자 외 문자가 포함된 경우 예외 처리
    - [ ] 0을 제외한 1000으로 나누어 떨어지지 않는 경우 예외 처리

- [ ] 쉼표로 구분된 수의 개수가 6개가 아닌 경우
- [ ] 쉼표로 구분된 수 중 1~45의 숫자가 아닌 경우
  
- [ ] 보너스 번호가 1~45 범위를 벗어나는 경우
- [ ] 보너스 번호가 정수 외 다른 문자를 포함하는 경우
- [ ] 보너스 번호에 당첨 번호 속 번호가 포함된 경우

### 각 객체의 역할
- `로또 객체`: 로또 번호를 저장한다. 게임 매니저에서 번호를 요구하면 반환한다.
- 게임 매니저의 `로또 제너레이터`: 구입 금액에 맞게 로또 객체를 생성한다.
- 게임 매니저의 `게임 아웃컴`: 몇 개나 일치하는지 당첨 내역을 산정한다. 
- `입력` 유틸: 로또 구입 금액, 당첨 번호, 보너스 번호를 입력하는 기능이 존재한다.
- `출력` 유틸: 로또 구매 결과 및 당첨 통계 출력 기능이 존재한다.