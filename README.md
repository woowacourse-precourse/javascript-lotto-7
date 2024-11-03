# javascript-lotto-precourse

## 기능

1. 구입 금액, 구매 개수 입력
2. 로또 번호, 보너스 번호 입력
3. 구매 개수만큼 로또번호 출력
4. 로또 당첨 목록 출력
5. 수악률 계산 후 출력

## 구현

### 로또 번호 생성 (getLottoNumbers)

- lottoNumber=[]에 pickUniqueNumbersInRange값 push
- 리턴

### 당첨 번호와 비교 (compareNumbers)

- 로또 번호와 lottoNumbers 안의 번호를 비교하며 몇개가 일치한지 count 추가
- 보너스 넘버가 있는지 확인
- 보너스 넘버가 있고 5개가 맞으면 '5(bonus)'로 배열레 추가, 나머지는 number로 count 추가
- lottoNumbers 배열 길이만큼 반복

### 결과 출력 (getResult)

- 당첨 등수 저장
- resultString에 당첨 등수에 맞는 당첨된 개수 출력

### 수익률 계산

- 당첨된 로또를 금액으로 환산
- 투자 금액과 당첨된 금액을 백분율로 계산 후 출력
