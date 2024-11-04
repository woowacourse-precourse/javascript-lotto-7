# javascript-lotto-precourse

---

## 프로젝트 목적

우아한 테크코스 3주차 미션

학습 목표

1. 관련 함수를 묶어 클래스를 만들고, 객체들이 협력하여 하나의 큰 기능을 수행하도록 한다.



---

## 프로젝트 구조

프로젝트 디렉터리

```termainal
├── App.js
├── Class
│   ├── BonusNumber.js
│   ├── LottoList.js
│   ├── LottoResult.js
│   ├── Margin.js
│   └── Purchase.js
├── Lotto.js
├── feature
│   ├── UI
│   │   ├── getUserInput.js
│   │   ├── purchaseOutput.js
│   │   └── resultOutPut.js
│   ├── calculate
│   │   └── getMargin.js
│   ├── match
│   │   └── getMatchCount.js
│   ├── parse
│   │   ├── parseArray.js
│   │   └── parseMap.js
│   └── validate
│       ├── checkDecimal.js
│       ├── checkEmptyInput.js
│       ├── checkPurchase.js
│       └── checkWinNumber.js
├── index.js
└── process
    ├── parse
    │   └── processParseToArray.js
    ├── processBonusNumber.js
    ├── processLottoList.js
    ├── processLottoResult.js
    ├── processPurchase.js
    └── processWinNumber.js
```

test 디렉터리

```terminal
├── ApplicationTest.js
├── Class
│   ├── BonusNumberClassTest.js
│   ├── LottoListClassTest.js
│   ├── LottoResultClassTest.js
│   └── PurchaseClassTest.js
├── LottoTest.js
├── feature
│   ├── UI
│   │   └── getUserInputTest.js
│   ├── calculate
│   │   └── getMarginTest.js
│   ├── match
│   │   └── getMatchCountTest.js
│   ├── parse
│   │   ├── parseArrayTest.js
│   │   └── parseMapTest.js
│   └── validate
│       ├── checkDecimalTest.js
│       ├── checkPurchaseTest.js
│       └── checkWinNumberTest.js
└── process
    ├── processLottoListTest.js
    ├── processPurchaseTest.js
    └── processWinNumberTest.js
```

## 구현 목록

---

### 구입 금액 입력

#### 구현 기획

```terminal
1. 1000원 단위로 입력을 받는다
    - 1000원으로 나누어 떨어지지 않을 경우 예외 처리
```

구현 목록

통합 기능  
[processPurchase](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/process/processPurchase.js)

```termainal
1. 유저의 입력을 비동기로 받는다
2. Purchase 클래스를 활용해서 유효한 입력값에 대한 인스턴스를 생성
3. 인스턴스의 필드 값을 반환

error
입력중, 유효하지 않은 입력 값으로 인해 에러가 발생 했을 경우
해당하는 에러 메시지를 출력하고
함수를 재귀한다
```

UI  
[getPurchase](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/UI/getUserInput.js)

```terminal
Console.readLineAsync를 활용해서 안내 문구를 출력
입력값을 반환
```

Class  
[Purchase](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/Class/Purchase.js)

```javascript
필드 : 유저의 입력값[private, public]
생성자 :
    사용자의 입력으로 private 인스턴스를 초기화
    유효성을 검사하여 유효한 값으로 publick 인스턴스를 초기화
메서드 :
    유효성 검사 :
        사용자의 입력값을 Number로 변환
        변환된 입력값의 유효성을 검사
        변환된 입력값을 반환
```

Feature  
[checkPurchase](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/validate/checkPurchase.js)

```javascript
validate

NaN, 1000 미만, 1000으로 나누어 떨어지지 않을 경우
해당하는 에러 메시지를 담은 에러 객체를 던짐
```

---

### 로또 구매 리스트 생성

#### 구현 기획

```terminal
1. 유효한 구매액을 매개변수로 받는다
2. 구매액으로 LottoList를 인스턴스화
3. 생성된 구매내역, 구매 갯수를 변수에 저장
4. 구매내역과 구매 갯수로 사용자게에 내역을 출력
5. 구매내역, 구매 갯수를 반환환
```

구현 목록

통합 기능  
[processLottoList](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/process/processLottoList.js)

```javascript
구매액으로 LottoList 클래스를 인스턴스화
인스턴스화된 필드값을 변수로 선언
UI 담당 기능으로 유저에게 구매한 로또 리스트를 출력

Error
예외 처리에 해당하는 문구를 출력
함수를 재귀
```

Class  
[LottoList](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/Class/LottoList.js)

```javascript
필드 : 구매액, 로또 구매 리스트
생성자 : 
    구매액을 1000으로 나눈 값으로 인스턴스 초기화
    buyLottos()로 생성된 로또 리스트로 인스턴스 초기화
메서드 :
    정렬 : 생성된 단일 배열을 오름차순으로 정렬
    생성 :
        Random.pickUniqueNumbersInRange를 활용하여 로또 배열을 생성
        생성된 배열을 정렬
        정렬된 배열을 반환
    리스트 생성 :
        구매 횟수만큼 로또 배열을 생성한다
        생성된 배열을 list에 담는다
        구매 횟수와 동일한 길이를 가진 배열을 반환한다
```

UI  
[purchaseOutPut](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/UI/purchaseOutput.js)

```javascript
1. 구매 횟수를 활용해서 초기 문자열을 생성
2. 반복문을 활용하여 단일 배열을 문자열로 변환
3. 변환된 문자열을 초기 문자열에 더함
4. 최종 문자열을 유저에게 출력
```

---

### 당첨 번호 입력

#### 구현 기획

```terminal
6개의 숫자를 입력 받는다
쉼표(,)로 구분한다
중복 숫자가 있는지 확인한다
1 ~ 45 사이인지 확인한다
숫자가 양의 정수 인지 확인한다(음수, decimal, NaN)
```

구현 목록

Process  
[processWinNumber](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/process/processWinNumber.js)

```javascript
유저의 입력값을 비동기로 받는다
입력값을 숫자 형태의 배열로 변환한다
Lotto 클래스로 당첨 번호를 인스턴스화 하고, 접근자를 활용해서 필드 값을 변수에 저장
당첨 번호를 반환
```

UI  
[getWinNumber](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/UI/getUserInput.js)

```javascript
1. 유저에게 입력값에 대한 조건을 안내할 문구를 출력
2. 유저의 입력값을 반환
```

Feature

Process  
[processParseToArray](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/process/parse/processParseToArray.js)  

Validate  
[checkDicimal](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/validate/checkDecimal.js)  
[checkEmptyInput](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/validate/checkEmptyInput.js)

Parse  
[parseToNumberArray](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/parse/parseArray.js)

```javascript
validate

입력 값에 대한 1차 유효성 검사 (decimal, empty)

parse

문자열을 문자 배열로 변환
문자 배열을 숫자 배열로 변환

변환된 최종 배열을 반환
```

Class  
[Lotto](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/Lotto.js)  
[checkWinNumbers, checkDuplicate](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/validate/checkWinNumber.js)  

```javascript
필드 : 당첨 번호 배열
생성자 : 
    변환된 배열의 2차 유효성 검사
    오름 차순으로 변환된 배열로 인스턴스 초기화
메서드 :
    유효성 검사 : 배열 내 요소 중복 여부, NaN, 1 ~ 45 사이, 소수점 존재 여부 확인
    정렬 : 배열을 오름차순으로 정렬하여 반환
접근자 :
    private 필드 값을 반환
```

Feature

- Validate

[checkWinNumbers, checkDuplicate](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/validate/checkWinNumber.js)  

```javascript
NaN, 1 ~ 45 사이의 값, decimal을 확인
유효하지 않은 값에 대한 에러 던짐
```

---

### 보너스 번호 입력

#### 구현 기획

1개의 숫자를 입력 받는다
숫자가 양의 정수 인지 확인한다(음수, deciaml, NaN, 1 ~ 45 사이, 당첨 번호와 중복 여부)

#### 구현 목록

Process

[processBonusNumber](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/process/processBonusNumber.js)

```javascript
사용자로 부터 보너스 번호를 입력 받는다
입력값을 활용해서 BonusNumber 클래스를 인스턴스 화 하고, 접근자를 활용해 필드값을 변수에 저장
보너스 번호를 반환

Error
에러에 대한 메시지를 사용자에게 출력
함수를 재귀
```

UI  
[getBonusNumber](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/UI/getUserInput.js)

```javascript
보너스 번호 입력에 대한 안내 문구를 사용자에게 출력
입력값을 반환
```

Class  
[BonusNumber](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/Class/BonusNumber.js)  

[checkEmpty](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/validate/checkEmptyInput.js)  
[checkDecimal](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/validate/checkDecimal.js)  
[checkNumber, checkDulicate](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/validate/checkWinNumber.js)

```javascript
필드 : 보너스 번호, 당첨 번호
생성자 : 
    당첨 번호를 초기화
    사용자 입력값, 당첨 번호로 입력값의 유효성을 검사
    사용자 입력값을 숫자로 변환하여 보너스 번호를 초기화
메서드 : 
    유효성 : 
        빈값, 소수, NaN, 1 ~ 45 사이를 확인
    중복 여부 :
        입력값이 당첨 번호 내의 값고 중복되는지 확인
접근자 : 
    당첨 번호를 반환
```

---

### 로또 당첨 결과 출력

#### 구현 기획

```javascript
구매 내역, 당첨 번호, 보너스 번호, 구매액을 기반으로 문자열을 생성
```

구현 목록

Class  
[LottoResult](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/Class/LottoResult.js)  

[getFilteredMatchList](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/match/getMatchCount.js)

```javascript
필드 : 구매 내역, 당첨 내역
생성자 :
    구매 내역을 3개 이상 당첨된 내역만 남도록 필터링하여 인스턴스를 초기화
    당첨 내역을 초기화
메서드 : 
    당첨 결과 내역 생성 : 구매 내역의 당첨 결과를 종합할 Map 자료구조를 생성
    당첨 결과 key 생성 : 당첨 갯수, 보너스 번호 일치 여부에 따른 key를 생성
    당첨 결과 증가 : 생성된 key로 이전 당첨 결과를 가져온 후 증가
    당첨 결과 통합 기능 : 
        당첨 결과 내역을 저장할 자료 구조를 생성
        구매 내역을 반복문을 통해 순회
            당첨 갯수, 보너스 번호 일치 여부를 확인
            key를 생성
            key의 존재 여부를 분기
                존재 시 당첨 결과를 증가
        최종 결과를 반환
접근자 : 당첨 내역을 반환
```

Feature

당첨 갯수 3개 이상인 내역 반환

[getWinNumberMatchCount,  
getBonusNumberMatch,  
winNumberMatcher,  
getFilteredMatchList](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/match/getMatchCount.js)

```javascript
1. 당첨 갯수 반환
2. 보너스 번호 일치 여부 반환
3. 구매 내역을 변환
    구매 내역을 [당첨 갯수, 보너스 번호 일치 여부] 형태로 변환
    변환된 배열을 반환
4. 3개 이상 당첨된 내역을 추려서 반환
```

Parse  

[addComma, getWinningResultText](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/parse/parseMap.js)

```javascript
당첨액을 ,로 구분하는 기능
    정규식으로 3자리 마다 ,가 추가된 문자열을 생성

유저에게 출력할 문자열을 생성
    당첨 내역을 활용
        key, value 값을 배열로 저장
    초기 문구를 설정
    반복문을 통해 문자열을 생성 후 초기 문구에 더함
        형태 : '{key} {변환된 당첨 금액} - {당첨 갯수}개'
    최종 문자열을 반환
```

당첨 총액, 수익률 계산

[getMarginSum, getMarginRate](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/calculate/getMargin.js)

```javascript
1. 당첨 총액 계산
    당첨 내역을 활용
    reduce를 활용해서 당첨 내역 x 당첨 금액의 총합을 계산
    계산된 값을 반환

2. 수익률 계산
    당첨 총액의 비율을 계산
    계산된 값의 소수점 2자리에서 반올림
    최종 계산된 값을 반환
```

Class
[Margin](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/Class/Margin.js)

[getMarginSum, getMarginRate](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/calculate/getMargin.js)

```javascript
필드 : 당첨 총액, 수익률, 구매액
생성자 : 
    구매액의 인스턴스를 초기화
    당첨 총액을 모듈화한 함수의 반환 값으로 초기화
    수익률을 모듈화한 함수의 반환 값으로 초기화
접근자 : 
    수익률을 반환
```

UI

[resultOutPut](https://github.com/thumbthing/javascript-lotto-7/blob/thumbthing/src/feature/UI/resultOutPut.js)

```javascript
생성된 유저 출력 문자열, 수익률을
유저에게 출력
```

