# javascript-lotto-precourse

## ✨ 이번 주차 핵심 전략!! ✨

### DDD (Domain 주도 설계)

#### 도메인 주도 설계란?

- 도메인 전문가와 개발자가 같은 언어로 소통하며 비즈니스 도메인을 코드로 표현하는 설계 방법.  

<br />

#### VO (Value Object)

- 복잡한 도메인 모델에서 숫자, 금액처럼 값 자체가 의미있고, 한번 만들어지면 값이 바뀌지 않는 객체를 표현 하기 위해 만들어진 개념.  
- **Lotto**와 **LottoNumber**, **Cost** 등의 도메인에서 값에 대한 유효성 검사를 진행하며 사용되었다!!  
- 주어진 **Lotto Class**를 VO로 판단하여 이를 **당첨 번호**, **내 로또 번호**에서 상속하여 사용하였음.

<br />

#### Aggregate Root

- 여러 연관된 객체들의 일관성과 불변성을 책임지는 "진입점" 같은 객체
- **MyLottoList**객체는 **내 로또 번호/당첨 통계**를 담고 있어 이에 대한 진입점이 된다.

<br />

#### Domain Naming

- **Opportunity** (기회)라는 네이밍을 통해 다음 개념들을 자연스럽게 표현
  - 기회 비용 (구매 금액)
  - 기회 횟수 (로또 개수)
  - 기회의 결과 (당첨금)
  - 기회 수익률 (결과/비용)

<br /><br />

## ✅ 기능 목록

### Presentaion Layer

- [x] 입력 프롬프트를 띄우고 로또 구입 금액을 입력 받는 기능

- [x] 입력 프롬프트를 띄우고 당첨 번호를 입력 받는 기능

- [x] 입력 프롬프트를 띄우고 보너스 번호를 입력 받는 기능


### Application Layer

- [x] **Presentation Layer**의 입력값을 처리하는 기능 

  * [x] 입력된 Raw Input의 유효성을 검증하는 기능 (validation)
    + 입력값은 공백이 될 수 없다.
    + 입력값은 숫자 이외의 값이 될 수 없다.
    + 입력값은 소수가 될 수 없다.
    + 입력값은 음수가 될 수 없다.
    + 이를 만족하지 못한 경우, "[ERROR]"로 시작하는 에러 메세지를 던진다.
  
  * [x] 에러가 발생할 경우 입력값을 다시 받는 기능 (utils)

  * [x] 쉼표(,)를 기준으로 로또 번호를 분리하는 기능 (utils)

- [x] 처리한 입력값을 **Domain Layer**에 전달하는 기능

### Domain Layer

- [x] **Cost Domain**

  * [x] 로또 구입 금액에 대한 유효성을 검증하는 기능 (validation)
    +  1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
    +  이를 만족하지 못한 경우, '[ERROR]'로 시작하는 에러 메세지를 던진다. 
  
  * [x] 로또 구입 금액에 1,000 을 나누어 구매한 로또 갯수를 계산하는 기능

- [x] **My Lotto Domain**

  * [x] 구매한 로또 갯수만큼 무작위 로또를 발행하는 기능

- [x] **Winning Lotto Domain** 

  * [x] 당첨 번호에 대한 유효성을 확인하는 기능 (validation)
    - 각각의 당첨 번호는 1 ~ 45 사이의 숫자이다.
    - 당첨번호는 총 6개이다.
    - 당첨번호는 중복될 수 없다.
    - 이를 만족하지 못한 경우, '[ERROR]'로 시작하는 에러 메세지를 던진다.

  * [x] 보너스 번호에 대한 유효성을 확인하는 기능 (validation)
    - 보너스 번호는 1 ~ 45 사이의 숫자이다.
    - 보너스 번호는 당첨번호와 중복될 수 없다.
    - 이를 만족하지 못한 경우, '[ERROR]'로 시작하는 에러 메세지를 던진다.

- [x] **Matcher Domain**

  * [x] 내 로또와 당첨 번호를 대조하여 몇 개가 겹치는지 확인하는 기능

  * [x] 내 로또와 보너스 번호를 대조하여 보너스 번호가 포함되어 있는지 확인하는 기능

- [x] **Stats Domain**

  * [x] 내 로또들이 각각 몇 등인지 통게를 내는 기능

- [x] **Outcome Domain**

  * [x] 총 수익금을 계산하는 기능

- [x] **Opportunity Domain**

  * [x] 구입 금액에 총 수익금을 나누어 수익률을 계산하는 기능

### Application Layer

- [x] 구입한 로또 갯수를 **Preseantion Layer**에 전달하는 기능
 
- [x] 생성된 무작위 로또 번호를 **Preseantion Layer**에 전달하는 기능

- [x] 당첨 통계를 **Preseantion Layer**에 전달하는 기능

- [x] 수익률을 **Preseantion Layer**에 전달하는 기능

### Presentation Layer

- [x] 구입한 로또 갯수를 주어진 형식에 맞춰 출력하는 기능

- [x] 생성된 무작위 로또 번호를 주어진 형식에 맞춰 출력하는 기능

- [x] 당첨 통계를 주어진 형식에 맞춰 출력하는 기능

- [x] 수익률을 주어진 형식에 맞춰 출력하는 기능


<br /><br />


## 🗄️ UML DIAGRAM

<div style="text-align: center; margin: auto;">


``` mermaid
classDiagram
    direction LR
    
    %% Presentation Layer
    namespace UI {
        class ConsoleInput {
            +readCost()
            +readWinningLotto()
            +readBonusNumber()
        }
        
        class ConsoleOutput {
            +displayNewLine()
            +displayCount()
            +displayMyLottoList()
            +displayStats()
            +displayRate()
        }
    }
    
    %% Application Layer
    namespace Application {
        class App {
            -LottoService
            +run()
        }
        
        class LottoService {
            -purchaseCommand
            -winningLottoCommand
            -resultCommand
            +play()
        }
        
        class PurchaseCommand {
            -inputPort
            -outputPort
            +execute()
        }
        
        class WinningLottoCommand {
            -inputPort
            +execute()
        }
        
        class ResultCommand {
            -outputPort
            +execute()
        }
    }
    
    %% Domain Layer
    namespace Domain {
        class Lotto {
            -numbers
            +getNumbers()
        }
        
        class LottoNumber {
            -number
            +getNumber()
        }
        
        class WinningLotto {
            -numbers
            -bonusNumber
            +addBonusNumber()
        }
        
        class MyLottoList {
            -myLottoList
            -stats
            +matchMyLottoList()
            +compileStats()
        }
        
        class Opportunity {
            -cost
            -outcome
            -rate
            +calculateOutcome()
            +calculateRate()
        }
    }

    App --> LottoService
    LottoService --> PurchaseCommand
    LottoService --> WinningLottoCommand
    LottoService --> ResultCommand
    ResultCommand --> ConsoleOutput
    PurchaseCommand --> MyLottoList
    PurchaseCommand --> Opportunity
    PurchaseCommand --> ConsoleInput
    PurchaseCommand --> ConsoleOutput
    WinningLottoCommand --> WinningLotto
    WinningLottoCommand --> ConsoleInput
    WinningLotto --|> Lotto
    MyLottoList --> "many" Lotto
    Lotto --> "6" LottoNumber

```

</div>

<br /><br />


##  🗂️ 파일 트리


```
📂 Lotto
├─ 📂 src
│  ├─ index.js
│  ├─ App.js
│  ├─ 📂 application
│  │  ├─ 📂 command
│  |  |  ├─ PurchaseCommand.js
│  |  |  ├─ ResultCommand.js
│  │  │  └─ WinningLottoCommand.js
│  │  ├─ 📂 utils
│  |  |  ├─ parse.js
│  |  |  ├─ retry.js
│  │  │  └─ Validator.js
│  │  └─ LottoService.js
│  ├─ 📂 constant
│  │  ├─ 📂 utils
│  │  │  └─ deepFreeze.js
│  │  ├─ Error.js
│  │  ├─ LottoConfig.js
│  │  ├─ Prompt.js
│  │  └─ Rank.js
│  ├─ 📂 domain
│  │  ├─ 📂 utils
│  │  │  ├─ generateLotto.js
│  │  │  └─ isMatched.js
│  │  ├─ 📂 MyLotto
│  │  │  ├─ Matcher.js
│  │  │  ├─ MyLotto.js
│  │  │  ├─ MyLottoList.js
│  │  │  └─ Stats.js
│  │  ├─ 📂 Opportunity
│  │  │  ├─ Cost.js
│  │  │  ├─ Opportunity.js
│  │  │  └─ Outcome.js
│  │  ├─ 📂 WinningLotto
│  │  │  ├─ BonusNumber.js
│  │  │  └─ WinningLotto.js
│  ├─ 📂 port
│  │  ├─ InputPort.js
│  │  └─ OutputPort.js
│  └─ 📂 presentation
│     ├─ Format.js
|     ├─ ConsoleInput.js 
│     └─ ConsoleOutput.js
├─ 📂 __tests__
└─ README.MD
```

