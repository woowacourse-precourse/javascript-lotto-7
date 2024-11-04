# 💸 로또 기능 구현


[🐣 입력받고 처리하기](#구입-금액-입력)&nbsp;
[💰 발행하기](#발행하기)&nbsp;
[🎉 당첨 계산하기](#당첨)&nbsp;
[📈 수익률](#-수익률)&nbsp;
[🤑 출력하기](#-출력하기)


## 🐣 입력 받고 처리하기
### 구입 금액 입력 

1000원 단위로 나누어 떨어지지 않으면 예외 처리한다.

- `[ERROR] 구입 금액이 1000 단위로 나누어 떨어지지 않습니다.`

### 당첨 번호, 보너스 번호 입력

당첨 번호를 입력한다. 이때 쉼표로 구분한다.
- 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.

- 예외 : **당첨 번호를 6개 입력하지 않은 경우** : <br>`[ERROR] 당첨 번호를 6개 입력해야합니다.`
- 예외 : **중복되는 경우** : <br>`[ERROR] 로또 번호는 중복 없는 6개의 숫자여야 합니다.`
- 예외 : **숫자 범위를 벗어난 경우** : <br>`[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`

보너스 번호를 입력한다.
- 예외 : **보너스 번호가 1개가 아닌 경우** : <br>`[ERROR] 보너스 번호를 1개 입력해야합니다.`
- 예외 : **당첨 번호와 중복되는 경우**: <br>`[ERROR] 당첨 번호와 중복된 숫자를 입력했습니다.`
- 예외 : **숫자 범위를 벗어난 경우** : <br>`[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`

## 💰 발행하기 

나눈 숫자만큼 로또를 발행한다.
- 로또 번호의 숫자 범위 : 1-45

한 번 발행할 때 숫자의 개수는 6개 이다.


## 🎉 당첨 계산하기

1등 부터 5등까지 요구 사항에 따라 당첨자를 가린다.
- 6개 일치와 5개 일치에 보너스 볼 일치하는 경우를 잘 구분해야한다.
- 3개, 4개, 5개, 5개랑 보너스 맞춘경우, 6개로 나누고 `if-else`조건문으로 해결(특정 경우에만 조건을 수행하고 이 후 조건 무시하기 때문에 사용했습니다.)


## 📈 수익률

- $(당첨 총 금액/구입 금액) × 100 = 수익률$
- 소수점 **둘째자리**에서 반올림

<br />

## 🤑 출력하기 

- 발행한 로또 수량과 번호를 출력한다.
- 오름차순으로 정렬하여 보여준다.

- 당첨 내역을 출력한다. 
- 0개 일치, (00000원) - 0개 
- 수익률 소수점 둘째 자리에서 반올림한다. 

- 예외 사항 시 에러 문구 출력해야한다.
