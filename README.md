# Week3 - 로또

## 기능 요구 사항
1. **로또 번호 범위 및 중복 제한**
   - 로또 번호의 숫자 범위는 1~45까지이다.
   - 로또를 발행할 때는 중복되지 않는 6개의 숫자를 랜덤하게 뽑는다.

2. **당첨 번호 추첨 및 보너스 번호**
   - 당첨 번호 추첨 시, 중복되지 않는 6개의 번호와 보너스 번호 1개를 추가로 뽑는다.

3. **당첨 등급 및 금액**
   - 당첨은 1등부터 5등까지 있으며, 당첨 조건과 금액은 다음과 같다:
     - **1등**: 6개 번호 일치 / 2,000,000,000원
     - **2등**: 5개 번호 + 보너스 번호 일치 / 30,000,000원
     - **3등**: 5개 번호 일치 / 1,500,000원
     - **4등**: 4개 번호 일치 / 50,000원
     - **5등**: 3개 번호 일치 / 5,000원

4. **로또 구입**
   - 사용자가 입력한 구입 금액에 해당하는 만큼 로또를 발행한다.
   - 로또 1장의 가격은 1,000원이다. 
   - 구입 금액은 1,000원 단위로 입력되며, 1,000원으로 나누어 떨어지지 않는 경우 예외 처리를 한다.

5. **당첨 번호 및 보너스 번호 입력**
   - 게임이 끝난 후 당첨 번호와 보너스 번호를 입력받는다.

6. **결과 출력 및 수익률 계산**
   - 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역과 수익률을 출력하고, 게임을 종료한다.
   - 수익률은 소수점 둘째 자리에서 반올림하여 출력한다.

7. **에러 처리**
   - 잘못된 값이 입력될 경우 "[ERROR]"로 시작하는 메시지를 출력하고, 다시 입력받도록 한다.

&nbsp;


## 입출력 요구 사항

### 입력
1. **구입 금액 입력**
   - 사용자가 로또 구입 금액을 입력하며, 금액은 1,000원 단위여야 한다.
   - 예시: 
   ```
   14000
   ```

2. **당첨 번호 입력**
   - 쉼표(,)로 구분된 6개의 숫자를 입력받는다.
   - 예시: 
   ```
   1,2,3,4,5,6
   ```

3. **보너스 번호 입력**
   - 당첨 번호 외의 보너스 번호를 1개 입력받는다.
   - 예시: 
   ```
   7
   ```

### 출력
1. **발행한 로또 번호**
   - 사용자가 구입한 금액에 따라 발행한 로또 수량과 번호를 출력한다.
   - 로또 번호는 오름차순으로 정렬하여 보여준다.
   - 예시:
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

2. **당첨 내역 출력**
   - 사용자가 구매한 로또와 당첨 번호를 비교하여 각 등급별 당첨 개수를 출력한다.
   - 예시:
     ```
     3개 일치 (5,000원) - 1개
     4개 일치 (50,000원) - 0개
     5개 일치 (1,500,000원) - 0개
     5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
     6개 일치 (2,000,000,000원) - 0개
     ```

3. **수익률 출력**
   - 총 수익률을 계산하여 출력한다. 수익률은 소수점 둘째 자리에서 반올림하여 표시한다.
   - 예시: 
   ```
   총 수익률은 62.5%입니다.
   ```

4. **에러 메시지 출력**
   - 입력 값이 유효하지 않은 경우, "[ERROR]"로 시작하는 에러 메시지를 출력한다.
   - 예시: 
   ```
   [ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
   ```

&nbsp;


## 기능 구현 목록 체크 리스트
1. [x] **로또 번호 생성 기능**
   - 1~45 사이의 숫자 중 중복되지 않는 6개의 번호를 랜덤하게 뽑아 로또 번호를 생성한다.

2. [ ] **당첨 번호 및 보너스 번호 생성 기능**
   - 당첨 번호로 중복되지 않는 6개의 번호와 보너스 번호 1개를 뽑는다.

3. [ ] **로또 구입 기능**
   - 입력된 구입 금액에 따라 발행할 로또 수량을 계산하여 해당 개수만큼 로또를 발행한다.
   - 구입 금액이 1,000원으로 나누어 떨어지지 않는 경우 에러 메시지를 출력한다.

4. [ ] **사용자 입력 검증 기능**
   - 입력된 구입 금액, 당첨 번호, 보너스 번호가 유효한지 확인한다.
   - 1,000원 단위가 아니거나, 숫자가 범위를 벗어난 경우 에러 메시지를 출력한다.

5. [ ] **당첨 번호 비교 기능**
   - 사용자가 구입한 로또 번호와 당첨 번호를 비교하여 각 등급별 당첨 개수를 계산한다.

6. [ ] **당첨 내역 출력 기능**
   - 각 등급별 당첨 개수와 당첨 금액을 출력한다.

7. [ ] **수익률 계산 기능**
   - 당첨된 금액과 구입 금액을 비교하여 수익률을 계산하고, 소수점 둘째 자리에서 반올림하여 출력한다.

8. [ ] **에러 처리 기능**
   - 입력된 값이 유효하지 않을 경우, "[ERROR]"로 시작하는 에러 메시지를 출력한다.
   - 에러 발생 시 프로그램을 종료하거나 재입력하도록 처리한다.


&nbsp;

## 과제 진행 요구 사항 체크 리스트



&nbsp;


## 프로그래밍 요구 사항

- [ ] package.json 파일은 변경할 수 없다.
    - 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리 사용은 불가하다.

- [ ] 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.

- [ ] 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
    - 기본적으로 [JavaScript Style Guide](https://github.com/airbnb/javascript)를 원칙으로 한다.

- [ ] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.

- [ ] 3항 연산자를 쓰지 않는다.
 
- [ ] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.

- [ ] Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.

- [ ] 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.

- [ ] else를 지양한다.

- [ ] 구현한 기능에 대한 단위 테스트를 작성한다. 단, `UI(System.out, System.in, Scanner)` 로직은 제외한다.
    - 단위 테스트 작성이 익숙하지 않다면 `LottoTest`를 참고하여 학습한 후 테스트를 작성한다.

- [ ] @woowacourse/mission-utils에서 제공하는 Random 및 Console API를 사용하여 구현한다.
    - Random 값 추출은 `Random.pickUniqueNumbersInRange()`를 활용한다.
    - 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.

&nbsp;


### 프로그래밍 환경 설정

- [x] `airbnb style guide` 로 코드 컨벤션 설정.
    - [x] `ESLint` 세팅

- [x] **Node.js 버전** `20.17.0` 이상인지 확인하기.

- [x] **npm 버전** `10.8.2` 이상인지 확인하기.


&nbsp;



## 실행 요구 사항 및 제출 체크 리스트

- [ ] 프로그램 실행의 시작점은 App.js의 run().

- [ ] 프로그램 종료 시 process.exit()는 호출하지 않는다.

- [ ] 요구 사항에 명시된 출력 형식을 따르지 않으면 `0점`

- [ ] 테스트가 실패하면 점수가 `0점`이 되므로 제출하기 전에 반드시 확인한다.