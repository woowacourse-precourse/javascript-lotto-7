# javascript-lotto-precourse

<a href="https://club-project-one.vercel.app/" target="_blank">
</a>

<br/>
<br/>

# 0. Getting Started (시작하기)

```bash
$ npm run test
$ npm run start
```

[fork된 Repository 링크](https://github.com/mun-kyeong/javascript-lotto-7)

[미션 PR](https://github.com/woowacourse-precourse/javascript-lotto-7/pull/171)

<br/>
<br/>

# 1. Overview (개요)

- 이름: javascript-lotto-7
- 프로젝트 설명: 우아한테크코스 - 프리코스 3주차 기능 목록 소개 README
- 작성자 : [mun-kyeong](https://github.com/mun-kyeong)

<br/>
<br>

# 2. Key Features (주요 기능)

### [ 입력받기 ]

- **1. [INPUT] 로또 구입 금액 입력받기**

  - **1-A) [VALIDATION]** 입력값 유효성 검사 (공백)
  - **1-B) [VALIDATION]** 구입 금액에 대한 유효성 검사 (숫자)
  - **1-C) [VALIDATION]** 로또 1장 가격 단위 검사

    ### [ 로또 생성 ]

    - **1.1. [FEAT] 금액을 바탕으로 구입한 로또 개수 판단**
    - **1.2. [OUTPUT] 로또 개수 출력**
    - **1.3. [FEAT] 랜덤 숫자 6개 생성**
      - **1.3-A). [VALIDATION]** 숫자 중복 검사
    - **1.4. [FEAT] 생성된 6개 숫자 오름차순 정렬**
    - **1.5. [OUTPUT] 생성된 로또 출력**

  <br/>

- **2. [INPUT] 당첨번호 입력받기**

  - **2-A) [VALIDATION]** 입력값 유효성 검사 (공백)
  - **2-B) [FEAT]** `,` 기준으로 문자열 분리
  - **2-C) [VALIDATION]** 각 당첨번호에 대한 유효성 검사 (로또 숫자)

- **3. [INPUT] 보너스 번호 입력받기**
  - **3-A) [VALIDATION]** 입력값 유효성 검사 (공백)
  - **3-B) [VALIDATION]** 보너스 번호에 대한 유효성 검사 (로또 숫자)

### [ 로또 당첨 판단 ]

- **1. [FEAT] 생성된 로또와 당첨번호 일치 개수 판단**
- **2. [FEAT] 생성된 로또와 보너스볼 일치 판단**
- **3. [FEAT] 당첨번호 개수와 보너스볼 일치 정보 병합**
- **4. [FEAT] 당첨 여부 판단**
- **5. [FEAT] 수익률 계산**

### [ 결과 출력]

- **1. [OUTPUT] 당첨통계 출력**
- **2. [OUTPUT] 로또 결과 출력**
- **3. [OUTPUT] 수익률 출력**

<br/>
<br>

# 3. 예외처리 목록

**아래 조건을 만족하지 않을 경우 `[ERROR]` 처리**

- **1-A, 2-A, 3-A) 입력값 유효성 검사 (공백)**
  - 입력값이 빈 값으로 들어왔는지 검사
- **1-B, 2-C, 3-B) 입력값에 대한 유효성 검사 (숫자)**
  - 입력값이 숫자인지 검사 (문자열 X)
  - 입력값이 양수인지 검사 (0 또는 음수 X)
  - 입력값이 정수인지 검사 (소수 X)
  - 1-B) 입력값이 1,000,000 이하의 숫자인지 검사
- **1-C) 로또 1장 가격 단위 검사**
  - 입력값이 1,000으로 나누어떨어지는 숫자인 검사
- **1.3-A, 2-C, 3-B)숫자 중복 검사**
  - 1.3-A, 2-C) 6개의 랜덤 숫자중 1~45 사이의 중복되는 수가 있는지 검사
  - 3-B) 당첨 값과 중복되는 보너스 번호가 존재하는지 검사
- **2-C, 3-B) 로또번호에 대한 유효성 검사 (로또 숫자)**
  - 숫자가 6개인지 검사
  - 각 숫자가 1~45 사이의 숫자인지 검사

<br/>
<br/>

# 4. 피드백 요구사항

[중간회고](https://mun-kyeong.github.io/) 작성

<details>
<summary>Q1. 메서드가 한 기능을 하는지 확인하는 기준</summary>

- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현
- 함수(또는 메서드)의 이름이 한가지의 역할만 나타내는지 확인
- 메서드의 역할이 메서드의 이름에서 벗어나지 않도록 구현
</details>

<details>
<summary>Q2. Test 작성 이유를 본인의 경험 토대로 정리</summary>

### 기능의 정확성 검증

- 2주차 PR을 진행하며 요구사항을 만족시켰다고 생각한 부분을 놓친 점을 지적받았다.

  - 랜덤 숫자를 1-10 범위에서 진행 (요구사항은 0-9)
  - 자동차 이름의 길이가 6 초과인 경우 에러 발생 (요구사항은 자동차의 이름 길이가 5이하가 되도록 - 6일때 예외처리가 빠짐)

  사실 위의 경우 기능을 작성하며 test를 진행했다면 충분히 발견할 수 있었던 부분이라 생각된다. 기능이 의도한대로 제대로 돌아가는지를 확인하기 위해 Test가 필요한 것 같다.

### 구현한 기능의 문제를 빠르게 발견

- 2주차 테스트의 경우 입력값 유효성 처리에 대한 test를 진행했었다. **입력값이 0이 들어왔을 경우** `isNotZero` 함수가 Error를 throw하는 순서가 맞았지만 `isNotPositeve` 함수가 먼저 호출되는 문제를 발견했다.<br/><br/> 문제는 `isNotPositeve` 함수가 먼저 호출되었고, 아래의 조건으로 인해 발생했었다.
  ```javascript
  return tryNumber < 1;
  ```
  `tryNumber < 1` 코드에 Error가 걸려 `isNotZero` 함수로 넘어가지 못하고 `isNotPositeve` 함수에서 Error가 throw 되었던 것이다. <br/><br/> test를 통해 예상했던 대로 Error가 출력되는지를 확인할 수 있었고 문제가 있었던 부분을 수정할 수 있었다.

</details>

<br/>
<br/>

# 5. 입출력 요구사항

<details>
<summary>입출력 요구사항</summary>

### 입력

1. **로또 구입 금액** 입력받기 <br/> 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리

```
  14000
```

2. **당첨 번호** 입력 받기 <br/> 번호는 쉼표(,)를 기준으로 구분

```
  1,2,3,4,5,6
```

3.  **보너스 번호** 입력 받기

```
  7
```

### 출력

1.  **발행한 로또 수량 및 번호** 출력 <br/>로또 번호는 오름차순으로 정렬

```
  8개를 구매했습니다.
  [8, 21, 23, 41, 42, 43]
  [3, 5, 11, 16, 32, 38]
  [7, 11, 16, 35, 36, 44]
  [1, 8, 11, 31, 41, 42]
  [13, 14, 16, 38, 42, 45]
  [7, 11, 30, 40, 42, 43]
  [2, 13, 22, 32, 38, 45]
  [1, 3, 5, 14, 22, 45]
```

2. **당첨 내역** 출력

```
  3개 일치 (5,000원) - 1개
  4개 일치 (50,000원) - 0개
  5개 일치 (1,500,000원) - 0개
  5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
  6개 일치 (2,000,000,000원) - 0개
```

3. **수익률은 소수점 둘째 자리에서 반올림**해서 출력

```
  총 수익률은 62.5%입니다.
```

4. **예외 상황 시 에러 문구를 출력** <br/>에러 문구는 "[ERROR]"로 시작

```
  [ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
```

</details>
<details>
<summary>실행결과 예시</summary>

<br/>

```
  구입금액을 입력해 주세요.
  8000

  8개를 구매했습니다.
  [8, 21, 23, 41, 42, 43]
  [3, 5, 11, 16, 32, 38]
  [7, 11, 16, 35, 36, 44]
  [1, 8, 11, 31, 41, 42]
  [13, 14, 16, 38, 42, 45]
  [7, 11, 30, 40, 42, 43]
  [2, 13, 22, 32, 38, 45]
  [1, 3, 5, 14, 22, 45]

  당첨 번호를 입력해 주세요.
  1,2,3,4,5,6

  보너스 번호를 입력해 주세요.
  7

  당첨 통계
  ---
  3개 일치 (5,000원) - 1개
  4개 일치 (50,000원) - 0개
  5개 일치 (1,500,000원) - 0개
  5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
  6개 일치 (2,000,000,000원) - 0개
  총 수익률은 62.5%입니다.
```

  </details>
  <br/>
  <br/>

# 6. Project Structure (프로젝트 구조)

<details>
<summary>폴더구조</summary>

```plaintext
javascript-calculator-7/
├── __tests__/
│   ├── ApplicationTest.js/
│   ├── InputValidatorTest.js/
│   ├── LottoTest.js/
│   ├── UserLottoInfoTest.js/
├── src/
│   ├── constants/
│   │   └── errorMessages.js    # 에러 메시지 저장
│   │   └── helperMessages.js   # 사용자에게 행동을 요구하는 메시지 저장
│   │   └── lotto.js            # lotto에 사용되는 매직넘버 값 저장
│   ├── features/
│   │   ├── lotto/
│   │   │   └── Lotto.js            # Lotto class
│   │   │   └── UserLottoInfo.js    # 사용자와 관련된 Lotto Class
│   │   ├── validator/
│   │   │   └── lottoVaildator.js   # lotto 게임에 사용되는 유효성 검사 함수들
│   │   │   └── Validator.js        # 유효성 검사 class
│   |   └── parserWinningNumber.js  # 유효성 검사 class
│   ├── utils/
│   |   └── console.js              # 랜덤 숫자 출력하기
│   |   └── errorHandler.js         # 에러 핸들링 함수
│   |   └── generateRandomNumber.js # 랜덤 숫자 출력하기
│   |   └── inputHandler.js         # 입력 핸들링 함수
│   |   └── outputHandler.js        # 출력 핸들링 함수
│   ├── App.js/
│   └── index.js/
└── package.json                # 프로젝트 설정 파일
└── README.md                   # 프로젝트 소개 및 기능 정의 파일

```

</details>

<br/>
<br/>

# 7. 커밋 컨벤션

## 기본 구조

```md
<type>(<scope>): <subject>

<body>

<footer>
```

<details>
<summary>type 종류</summary>

## type 종류

```
feat (feature) - 기능
fix (bug fix)  - 수정
docs (documentation) - 문서작업
style (formatting, missing semi colons, …) - 스타일 (서식 누락)
refactor - 리팩토링
test (when adding missing tests)- 테스트
chore (maintain) - 잡일(기타..)
```

</details>

<details>
<summary>커밋 형식 설명</summary>

## 커밋 형식 설명

- `type` : 커밋 타입
- `scope` : 커밋이 변경된 위치 작성
  - 함수 변경되면 함수이름, 메서드 추가 및 클래스 이름이 될 수도 있음
- `subject` : 명령형, 현재형 언어 사용. 커밋 주제
- `body` : 변경된 부분 설명 및 이전 행동과 대조
- `footer` : 주요 변경사항은 참고 사항이랑 footer에 언급필요

</details>

<details>
<summary>커밋 예시</summary>

## 커밋 예시

```md
[FEAT] (vaildator) : 자동차 이름 유효성 검사

- 각 자동차의 이름이 5글자 이하인지
- 빈 문자열(자동차 이름)이 존재하는지
  (여기서는 "," 기준으로 분리되어 들어온 문자열 list들이므로
  빈 문자열은 "a,a,,b" 이런식으로 ","가 2번 이상 연속된 경우 예외처리)
- 동일한 자동차 이름이 존재하는지

문자열을 분리한 후 각각의 이름에 대한 유효성 검사를 진행합니다.
```

</details>
<br/>
