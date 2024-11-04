## 💰 [WOOWACOURSE 3주차] 로또

### ✨관련 노션 링크

- [🎁 이번주 배운 점](https://harvest-wool-819.notion.site/3-12e1f2c49ce08186bd83f7f37f5cdf26?pvs=4)  
- [🐞 Trouble Shooting](https://harvest-wool-819.notion.site/Trouble-Shooting-12e1f2c49ce08180adfdf07dd0f4d3e8?pvs=4)
- [📄 좋은 테스트 코드 작성을 위한 고민](https://harvest-wool-819.notion.site/12e1f2c49ce081388f89e6bcebfc3816?pvs=4)
- [🛠 로또 프로그램 구조와 리팩토링](https://harvest-wool-819.notion.site/12e1f2c49ce081b286daf3221e545d60?pvs=4)
- [🚨 예외처리](https://harvest-wool-819.notion.site/12e1f2c49ce080c59b7af92388ed6c75?pvs=4)      
- [💻 이번주 백준](https://harvest-wool-819.notion.site/3-12e1f2c49ce081488efbe8c7223b1cf8?pvs=4)

<br>

## 🌟 이번주 목표

- [x] 2주차 공통 피드백을 반영한다
- [x] 좋은 테스트 코드에 대해서 생각해본다
- [x] TDD 방식으로 개발해본다
- [x] MVC 패턴을 적용시켜본다
- [x] 예외 처리에 집중해본다
- [x] 읽기 좋은 주석을 작성해본다

<br>

## 🗄 디렉터리 구조

```plaintext
JAVASCRIPT-LOTTO-PROJECT/
├── __tests__/
│   ├── ApplicationTest.js                  # 전체 애플리케이션에 대한 통합 테스트
│   └── unit/
│       ├── BonusNumberValidatorTest.js     # BonusNumberValidator에 대한 유닛 테스트
│       ├── LottoCheckerTest.js             # LottoChecker 클래스에 대한 유닛 테스트
│       ├── LottoMachineTest.js             # LottoMachine 클래스에 대한 유닛 테스트
│       ├── LottoTest.js                    # Lotto 클래스에 대한 유닛 테스트
│       ├── PrizeCalculatorTest.js          # PrizeCalculator 클래스에 대한 유닛 테스트
│       ├── ProfitAnalyzerTest.js           # ProfitAnalyzer 클래스에 대한 유닛 테스트
│       ├── PurchaseAmountValidatorTest.js  # PurchaseAmountValidator에 대한 유닛 테스트
│       └── WinningNumberValidatorTest.js   # WinningNumberValidator에 대한 유닛 테스트
│
├── docs/
│   ├── README.md                           # 프로젝트 설명 파일
│   └── SPECIFICATION.md                    # 프로그램 기능에 대한 상세 문서
│
├── node_modules/                           # 프로젝트 의존성 모듈들
│
├── src/
│   ├── constants/
│   │   ├── error.js                        # 에러 메시지 상수
│   │   ├── gameRule.js                     # 게임 규칙 상수
│   │   └── message.js                      # 일반 메시지 상수
│   │
│   ├── controller/
│   │   └── LottoGameController.js          # 로또 게임 제어를 담당하는 컨트롤러 클래스
│   │
│   ├── model/
│   │   ├── Lotto.js                        # 로또를 나타내는 클래스
│   │   ├── LottoChecker.js                 # 로또 번호 검사를 수행하는 클래스
│   │   ├── LottoMachine.js                 # 로또 번호 생성 및 관리 클래스
│   │   ├── PrizeCalculator.js              # 당첨 통계와 총 당첨 금액을 계산하는 클래스
│   │   └── ProfitAnalyzer.js               # 수익률을 계산하는 클래스
│   │
│   ├── utils/
│   │   ├── console.js                      # 콘솔 입출력 유틸리티 함수
│   │   ├── game.js                         # 게임 관련 유틸리티 함수
│   │   └── retryOnError.js                 # 에러 발생 시 재시도 유틸리티 함수
│   │
│   ├── validators/
│   │   ├── BonusNumberValidator.js         # 보너스 번호 유효성 검사 함수
│   │   ├── LottoNumberValidator.js         # 로또 번호 유효성 검사 함수
│   │   ├── PurchaseAmountValidator.js      # 구매 금액 유효성 검사 함수
│   │   └── WinningNumberValidator.js       # 당첨 번호 유효성 검사 함수
│
│   ├── view/
│   │   ├── InputView.js                    # 사용자 입력을 처리하는 뷰
│   │   └── OutputView.js                   # 결과 출력을 담당하는 뷰
│
│   ├── App.js                              # 프로그램 실행 시작점
│   └── index.js                            # 메인 진입점 파일
│
├── .gitignore                              # Git에서 제외할 파일 설정
├── .npmrc                                  # npm 설정 파일
├── package-lock.json                       # 의존성 잠금 파일
├── package.json                            # 프로젝트 설정 및 의존성 목록
└── README.md                               # 프로젝트 설명 파일 (루트)
```

<br>

## 🌊 플로우 설명

### 1. 게임 시작
- 로또 게임이 시작되면 게임은 초기화 단계와 실행 단계로 나뉘어 진행된다.

### 2. 게임 초기화
- 사용자가 로또 티켓을 구입할 금액을 입력한다.
- 입력된 금액은 유효성 검사를 거친 후 로또 기계를 통해 티켓이 생성된다.
- 구매 금액에 따라 생성된 티켓의 개수가 결정되며, 각 티켓은 고유의 번호를 가진다.
- 모든 티켓 번호가 생성된 후, 구매 확인 메시지와 함께 생성된 로또 번호 목록이 사용자에게 출력된다.

### 3. 당첨 번호 설정
- 사용자가 당첨 번호를 입력한다.
- 입력된 당첨 번호는 유효성 검사를 통해 각 번호가 올바른 형식인지 확인된 후 저장된다.
- 이후 사용자는 보너스 번호를 입력하며, 보너스 번호도 유효성 검사를 거친 후 저장된다.
- 당첨 번호와 보너스 번호는 중복되지 않도록 확인되어 최종적으로 설정된다.

### 4. 로또 결과 계산
- 로또 기계에서 생성된 모든 티켓 번호와 저장된 당첨 번호가 비교된다.
- 각 티켓에 대해 당첨 번호와 일치하는 번호의 개수를 계산하여 매칭 결과를 도출한다.
- 매칭 결과에 따라 각 등수별 당첨 개수가 집계되며, 통계 자료가 생성된다.

### 5. 수익률 계산
- 통계 자료를 통해 총 당첨 금액이 계산된다.
- 초기 구매 금액과 총 당첨 금액을 비교하여 수익률이 계산된다.

### 6. 결과 출력
- 각 등수별 당첨 개수와 금액이 사용자에게 출력된다.
- 최종적으로 구매 금액 대비 수익률이 출력되며, 게임이 종료된다.

<br>

## ✅ 기능 리스트

- [x] 사용자에게서 로또 구입 금액을 입력받는 기능
- [x] 사용자의 로또 구입 금액에 따라 로또를 발행하는 기능
	- [x] 사용자의 로또 구입 금액이 1000원 단위가 아닐 경우, 에러 처리를 한다
- [x] 구매한 로또 개수를 안내하는 기능
- [x] 랜덤으로 로또 번호를 발행하는 기능
- [x] 발행한 로또 번호를 오름차순으로 정렬하는 기능
- [x] 로또 번호의 숫자 범위가 1~45 인지 검증하는 기능
- [x] 발행한 로또 번호를 출력하는 기능
- [x] 사용자에게서 당첨 번호를 입력 받는 기능
	- [x] 입력된 당첨 번호가 유효하지 않을 경우, 에러 처리를 한다
- [x] 사용자에게서 보너스 번호를 입력 받는 기능
	- [x] 입력된 보너스 번호가 유효하지 않을 경우, 에러 처리를 한다
- [x] 발행한 로또 번호와 입력돤 당첨 번호+보너스 번호와의 일치 여부를 검사하는 기능
- [x] 일치 여부를 판단하는 기능
- [x] 당첨 내역을 출력하는 기능
- [x] 일치 여부에 따라 수익률을 계산하는 기능
- [x] 수익률을 출력하는 기능


<br>


## 💫 다음주 목표

- 3주차 공통 피드백을 반영한다
- MVC 패턴을 더 잘 사용하기 위한 방법을 생각해본다
- TDD 방식으로 개발해본다
- 프로그램을 다이어그램으로 나타내본다