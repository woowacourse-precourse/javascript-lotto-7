

# 프로젝트 설명
간단한 로또 발매기를 구현하는 프로젝트입니다. 사용자로부터 구매 금액을 입력받아 로또를 발행하고, 당첨 번호와 비교하여 당첨 내역과 수익률을 계산합니다.

# 💡 구현할 기능 목록 (주요기능)
### 1. 로또 구입 금액을 입력받는다 ✅
* 구입 금액을 입력받고 
* 예외처리하고
* 입력받은 금액을 저장해둔다

### 2. 발행한 로또 수량 및 번호를 출력한다.
* 몇개를 구매했는지 출력한다
* 발행한 로또들을 전부 출력한다. (로또번호는 오름차순)


### 3. 당첨 번호를 입력받는다. 번호는 쉼표기준으로 구분한다.
* 문자열을 입력받고
* 입력받은 숫자의 나열을 저장해둔다.
### 4. 보너스 번호를 입력받는다.
* 보너스 번호를 입력받고
* 입력받은 금액을 저장해둔다 -> object에 저장해두면 좋을듯

### 5. 당첨 내역을 출력한다.
* 한개의 로또와 당첨숫자를 받았을때 몇개가 일치했는지 저장한다.
* 모든 로또에 대해서 3~6개 일치수가 무엇인지 구한다.
* 각 갯수에 대해서 출력한다.

### 6. 수익률은 소수점 둘째자리에서 반올림해 출력한다.
* 여태까지 번돈을 확인한다.
* 투자한돈과 번돈을 나누어 둘째자리에서 반올림한다.
* 얻은 수익률을 출력한다.

### 7. 예외 상황시 에러문구를 출력한다.
**로또구입금액 입력시**
* 금액이 1000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
* 로또 구입 금액의 입력값이 올바르지 않다면 예외 처리한다.

**로또 출력시**
* 로또 번호에 중복된 숫자이 있으면 예외가 발생한다.

**당첨금액 입력시**
* 중복되는 번호가 있다면 예외처리다.
* 올바르지 않은 입력값이라면 예외처리한다.

**보너스 금액 입력시**
* 보너스 숫자 범위가 1~45에 해당하지 않으면 예외처리한다.
* 보너스 번호가 당첨번호중 하나와 중복되면 에외처리한다.


# 📋 요구사항 체크리스트
### 과제 진행 요구 사항
- [x] 미션은 로또 저장소를 포크하고 클론하는 것으로 시작한다.
- [x] 기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
- [x] Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
- [x] AngularJS Git Commit Message Conventions을 참고해 커밋 메시지를 작성한다.
- [x] 자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.

### 기능 요구사항
간단한 로또 발매기를 구현한다.
- [x] 로또 번호의 숫자 범위는 1~45까지이다.
- [x] 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- [x] 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- [x] 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
```
1등: 6개 번호 일치 / 2,000,000,000원
2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
3등: 5개 번호 일치 / 1,500,000원
4등: 4개 번호 일치 / 50,000원
5등: 3개 번호 일치 / 5,000원
```
- [x] 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- [x] 로또 1장의 가격은 1,000원이다.
- [x] 당첨 번호와 보너스 번호를 입력받는다.
- [x] 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- [ ] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

### 입출력 요구 사항
#### 입력
- [x] 로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
- [x] 당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.
1,2,3,4,5,6
- [x] 보너스 번호를 입력 받는다.

#### 출력
- [x] 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.
- [x] 당첨 내역을 출력한다.
- [x] 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)
- [x] 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.

#### 실행 결과 예시
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

### 프로그래밍 요구사항
- [x] Node.js 20.17.0 버전에서 실행 가능해야 한다.
- [x] 프로그램 실행의 시작점은 App.js의 run()이다.
- [x] package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- [x] 프로그램 종료 시 process.exit()를 호출하지 않는다.
- [x] 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- [x] 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
- [x] 기본적으로 JavaScript Style Guide를 원칙으로 한다.

### 프로그래밍 요구사항2
- [x] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- [x] 3항 연산자를 쓰지 않는다.
- [x] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- [ ] Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
### 프로그래밍 요구사항3
- [x] 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
- [x] else를 지양한다.
- [ ] 구현한 기능에 대한 단위 테스트를 작성한다. 단, UI(System.out, System.in, Scanner) 로직은 제외한다.

### 라이브러리 요구사항
- [x] MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);와 Console.readLineAsync()와 Console.print()를 활용한다

### 클래스 요구사항
- [x] 제공된 Lotto 클래스를 사용하여 구현해야 한다.
- [x] Lotto에 numbers 이외의 필드(인스턴스 변수)를 추가할 수 없다.
- [x] numbers의 접근 제어자인 #은 변경할 수 없다.
- [x] Lotto의 패키지를 변경할 수 있다.

# 🤔 개발하면서 신경쓴 부분
### 공통피드백 체크리스트
- [x] README에서 프로젝트에 대한 설명과 주요기능이 무엇인지 소개했는가?
- [x] 기능목록에 클래스설계, 메서드 설계같은 상세한 내용은 포함하지 않도록 했나?
- [ ] 기능목록을 작성할때 예외사항도 같이 정리했나?
- [x] 기능목록을 작성할때 지속적으로 업데이트 했는가?
- [ ] 문자열이나 숫자값을 상수로 정의했는가?
- [x] 클래스는 필드, 생성자, 메서드 순으로 작성했는가?
- [x] 한 메서드가 한가지 기능만 담당하게 했는가?
- [ ] 작은 단위의 테스트부터 만들었는가?
- [x] 클래스 이외에도 다른 객체 생성 방식을 익혔는가?

### 과제 목표 체크리스트
- [ ] 관련 함수를 묶어 클래스를 만들고, 객체들이 협력하여 하나의 큰 기능을 수행하도록 했나?
- [ ] 클래스와 함수에 대한 단위 테스트를 통해 의도한 대로 정확하게 작동하는 영역을 확보했나?
- [ ] 2주 차 공통 피드백을 최대한 반영했나?

### 피어리뷰 체크리스트
- [ ] when,then에 중복되는 내용이 많을 경우 describe.it을 사용해 반복되는 부분을 처리해본다.
- [ ] forEach보다 filter와 map을 사용해 본다.
- [ ] 왜 클래스로 코드를 짰는지에 관한 부분을 명확히 한다.
