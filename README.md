# javascript-lotto-precourse

## 요구사항

### 구매 금액 입력

- [ ] "구입금액을 입력해 주세요.\n"을 출력하고 값을 입력받는다.
- [ ] 입력한 값에 대한 유효성 검사를 실시한다.
  - [ ] 값은 1,000 이상의 숫자여야 한다.
  - [ ] 값은 1,000으로 나누어져야 한다.
- [ ] 빈 줄을 출력한다.

### 로또 생성

- [ ] "(구매한 수량)개를 구매했습니다.\n"를 출력한다.
- [ ] 서로 다른 6개의 랜덤 숫자로 이루어진 배열을 생성한다.
- [ ] 6개의 숫자를 오름차순으로 정렬한다.
- [ ] 구매한 수량만큼 생성한다.
- [ ] 생성된 숫자 배열들을 한줄에 하나씩 출력한다.
- [ ] 빈 줄을 출력한다.

### 당첨번호 입력

- [ ] "당첨 번호를 입력해 주세요.\n"와 함께 값을 입력받는다.
- [ ] ","를 기준으로 문자열을 배열로 나눈다.
- [ ] 입력된 숫자에 대한 유효성 검사를 실시한다.
  - [ ] 1에서 45사이의 정수여야 한다.
  - [ ] 중복되지 않은 숫자가 입력되어야 한다.
  - [ ] 6개의 숫자가 입력되어야 한다.
- [ ] 빈 줄을 출력한다.

### 보너스 번호 입력

- [ ] "보너스 번호를 입력해주세요.\n"와 함께 값을 입력받는다.
- [ ] 입력된 숫자에 대한 유효성 검사를 실시한다.
  - [ ] 1에서 45사이의 정수여야 한다.
  - [ ] 당첨번호와 중복되지 않아야 한다.
- [ ] 빈 줄을 출력한다.

### 로또 추첨

- [ ] 발행한 로또와 입력된 당첨 번호를 추첨한다.
- [ ] 6개 일치 시 1등 2,000,000,000원
- [ ] 5개+보너스 일치 시 2등 30,000,000원
- [ ] 5개 일치 시 3등 1,500,000원
- [ ] 4개 일치 시 4등 50,000원
- [ ] 3개 일치 시 5등 5,000원
- [ ] 각 로또에 대해 실시

### 결과 출력

- [ ] "당첨 통계"와 "---"를 출력한다.
- [ ] 당첨 결과를 출력한다.
- [ ] 총 수익률을 출력한다.

## 테스트

### 유효성 검사 테스트

#### 구매 금액

- [ ] [1000,2000,3000] 결과 : true
- [ ] [-1000,0,1500,1000.3] 결과 : false

#### 당첨번호

- [ ] [1,10,15,25,35,45] 결과 : true
- [ ] [1,2,3,4,5,5] 결과 : false
- [ ] [0,1,2,3,4,5] 결과 : false
- [ ] [1,2,3,4,5,46] 결과 : false

#### 보너스번호

- [ ] 당첨번호 : [1,2,3,4,5,6] 보너스번호 : [7] 결과 : true
- [ ] 당첨번호 : [1,2,3,4,5,6] 보너스번호 : [6] 결과 : false
- [ ] 당첨번호 : [1,2,3,4,5,6] 보너스번호 : [46] 결과 : false
