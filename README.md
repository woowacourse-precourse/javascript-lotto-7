# 🪐우테코 프리코스 3주차 - 로또

### 📝기능 목록
#### 입력
1. 로또 구입 금액
2. 당첨 번호
3. 보너스 번호

### 당첨 번호 파싱
1. ','를 기준으로 파싱!
2. 파싱된 결과가 6개인지 확인

### 입력 유효성 검사
#### 로또 구입 금액
- [x] 구입 금액이 숫자인지 확인
- [x] 구입 금액이 음수인지 확인
- [x] 구입 금액이 0인지 확인 (빈 값 처리)
- [x] 구입 금액이 최소 금액(1000원)보다 작은지 확인
- [x] 구입 금액이 정수가 아닌지 확인
- [x] 구입 금액이 허용 범위(Number.MAX_SAFE_INTEGER)보다 큰지 확인
- [x] 구입 금액이 1000원 단위로 나누어 떨어지는지 확인

#### 보너스 번호 입력
- [x] 보너스 번호가 1 ~ 45 사이의 정수인지 확인
- [x] 보너스 번호가 당첨 번호 리스트와 중복되지 않는지 확인



### 로또 생성기
1. 구매할 갯수 만큼 로또 객체를 만든다.



### 로또 클래스
Lotto 객체 생성: 로또 번호 배열을 받아 유효성을 검사한 후 Lotto 객체를 생성합니다.

#### 1. 유효성 검사: #validate 메서드를 통해 다음 예외 상황을 검토합니다.
   -[x] 번호 개수가 LOTTO_CONFIG.NUMBER_COUNT와 다를 경우 예외 발생.
   -[x] 번호에 중복 값이 있을 경우 예외 발생.
   -[x] 모든 번호가 숫자형 정수인지 확인하며, 숫자가 아니거나 NaN인 경우 예외 발생.
   -[x] 번호가 LOTTO_CONFIG.MIN_NUMBER보다 작거나 LOTTO_CONFIG.MAX_NUMBER보다 크면 예외 발생.
   -[x] 출력 기능: print() 메서드를 통해 로또 번호 배열을 [1, 2, 3, 4, 5, 6] 형식으로 출력합니다.   


#### 2. 당첨 등수 계산: getWinningRank(winningLotto, bonusNumber) 메서드를 통해 당첨 번호와 보너스 번호를 기준으로 당첨 등수를 계산합니다.    


#### 3. 일치 개수에 따라 RANK_CONFIG에 정의된 등수를 반환합니다
   - 6개 일치: 1등
   - 5개 일치 + 보너스 번호 일치: 2등
   - 5개 일치: 3등
   - 4개 일치: 4등
   - 3개 일치: 5등   


#### 4. 일치 번호 계산: #getMatchingCount(winningLotto) 메서드를 통해 당첨 번호(winningLotto)와 Lotto 객체의 번호 중 일치하는 번호의 개수를 반환합니다.










### 로또 결과 계산
1. 6개의 숫자로 이루어진 배열 + 보너스볼을 매개변수로 받아서 일치 결과 계산
2. 일치 된 결과를 순서대로 배열에 담는다.
3. 일치된과에 맞는 가격으로 수익률 계산하기
4. 수익률 소수점 둘째자리에서 반올림


### 출력
1. '당첨 통계' 안내 문자 출력
2. '---' 출력
3. 입력한 당첨 번호와 생성된 구매한 로또 사이의 숫자의 3~6 개 일치의 결과 출력
4. 구매한 로또 가격 대비 수익률 출력