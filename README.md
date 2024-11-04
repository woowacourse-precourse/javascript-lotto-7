# 🎰 로또 발매기

**간단한 로또 발매기를 구현**

## 📣 진행 방식

1. 구입 금액만큼 로또를 발행한다.
2. 당첨 번호 6개와 보너스 번호 1개를 정한다.
3. 발행한 로또와 당첨 번호, 보너스 번호를 비교하여 당첨 내역을 계산한다.
4. 구입 금액과 당첨 금액으로 수익률을 계산한다.

| 등수 |       일치 개수        | 수령 금액 |
| :--: | :--------------------: | :-------: |
| 1등  |        6개 일치        |   20억    |
| 2등  | 5개 + 보너스 번호 일치 |  3천만원  |
| 3등  |        5개 일치        |  150만원  |
| 4등  |        4개 일치        |   5만원   |
| 5등  |        3개 일치        |   5천원   |

## 🎯 주요 기능

### 📥 입력

- 로또 구입 금액
- 당첨 번호
- 보너스 번호

### 📤 출력

- 발행한 로또 수량
- 발행한 로또 번호
- 당첨 내역
- 수익률

### 🔍 검증

#### 1. 로또 구입 금액

- 자연수가 맞는지 검증한다.
- 1,000원 단위로 나누어 떨어지는지 검증한다.

#### 2. 당첨 번호

- 쉼표(,)를 기준으로 구분하여 총 6개인지 검증한다.
- 자연수가 맞는지 검증한다.
- 각 번호가 1부터 45까지의 범위 안에 있는지 검증한다.
- 중복된 숫자가 없는지 검증한다.

#### 3. 보너스 번호

- 자연수가 맞는지 검증한다.
- 해당 번호가 1부터 45까지의 범위 안에 있는지 검증한다.
- 입력 받은 당첨 번호와 중복되는 숫자가 없는지 검증한다.

```
잘못된 값을 입력 했을 경우 [ERROR] 로 시작하는 메시지 출력 후, 해당 지점부터 재입력 받는다.
```

### 🧮 계산

**로또 1장의 가격: 1,000원**

- [x] 발행할 로또 개수 - 구입 금액 ÷ 로또 1장의 값
- [x] 당첨 번호와 생성된 로또 번호를 비교하여 일치하는 개수 계산
- [x] 총 수령액 - (각 등수의 개수 \* 각 등수의 수령 금액)의 총합
- [x] 수익률 - 총 수령액 ÷ 구입 금액 \* 100

## 추가 고려 사항

### 입력 값

- 띄어쓰기는 허용하지 않는다.
- 입력 값이 비어있으면 안된다.
