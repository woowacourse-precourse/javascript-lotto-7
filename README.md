## 로또 미션 구현 기능 목록
#### 예외상황 조건
- 사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 <span style="color:red">**해당 부분부터 입력을 다시 받는다**</span>
---

#### 1. 로또 구입 금액을 입력 받기.
- 로또 1장의 가격은 1,000원이다.
- "구입금액을 입력해 주세요." 메세지 출력 후 입력 받기.

##### 정상적인 입력
- 1000원 단위의 입력

##### 예외적인 입력
- 1000원 단위로 나누어 떨어지지 않는 입력: "[ERROR] 구입 금액은 1,000원 단위여야 합니다."
- 공백 입력: "[ERROR] 공백이 입력되었습니다." 메시지 출력 후 다시 입력 받기.
- 숫자가 아닌 입력: "[ERROR] 숫자만 입력 가능합니다."
- 0 또는 음수인 입력: "[ERROR] 구입 금액은 1,000원 이상의 양수여야 합니다."
- 소숫점 숫자 입력: "[ERROR] 구입 금액은 정수여야 합니다."
---

#### 2. 구매한 로또 개수 구하기.
- 입력받은 금액을 1,000으로 나누어 구매 가능한 로또 개수를 계산.
---

#### 3. 구매한 로또 개수 출력.
- (구매한 로또 개수)개를 구매했습니다. 형식으로 출력.
---

#### 4. 로또 번호 생성.
- 구매한 로또 개수만큼 로또 번호 생성.
- 번호 범위는 1~45
- 중복되지 않는 6개의 숫자로 구성.
---

#### 5. 로또 번호를 오름차순으로 정렬.
- 각 로또 번호를 오름차순으로 정렬.
---

#### 6. 생성된 로또 번호 출력.
- 각 로또 번호는 대괄호([]) 안에 쉼표로 구분하여 출력.
- 로또 번호는 한 줄에 하나씩 출력.
---

#### 7. 당첨번호 입력 받기.
- "당첨 번호를 입력해 주세요." 메세지 출력 후 입력 받기.
- 번호는 쉼표(,)를 기준으로 구분하여 입력

##### 정상적인 입력
- 1~45까지의 숫자
- 중복되지 않은 6개의 숫자

##### 에외적인 입력
- 공백 입력: "[ERROR] 공백이 입력되었습니다."
- 숫자의 개수가 6개가 아닌 입력: "[ERROR] 당첨 번호는 6개여야 합니다."
- 숫자가 아닌 입력: "[ERROR] 숫자만 입력 가능합니다."
- 1~45 범위를 벗어나는 숫자 입력: "[ERROR] 1~45 사이의 숫자만 입력 가능합니다."
- 중복된 숫자 입력: "[ERROR] 중복되지 않은 숫자만 입력 가능합니다."
- 소숫점 숫자 입력: "[ERROR] 정수만 입력 가능합니다."
---

#### 8. 보너스 번호 입력 받기.
- "보너스 번호를 입력해 주세요." 메세지 출력 후 입력 받기.
- 보너스 번호 1개를 입력 받는다.

##### 정상적인 입력
- 1~45까지의 숫자
- 입력받은 당첨번호 6개와 중복되지 않는 숫자

##### 예외적인 입력
- 공백 입력: "[ERROR] 공백이 입력되었습니다."
- 1~45 범위를 벗어나는 숫자 입력: "[ERROR] 1~45 사이의 숫자만 입력 가능합니다."
- 숫자의 개수가 1개가 아닌 입력: "[ERROR] 보너스 번호는 1개여야 합니다."
- 당첨 번호와 중복되는 입력: "[ERROR] 당첨 번호와 중복되지 않은 숫자여야 합니다."
- 숫자가 아닌 입력: "[ERROR] 숫자만 입력 가능합니다."
- 소숫점 숫자 입력: "[ERROR] 정수만 입력 가능합니다."
---

#### 9. 당첨번호 오름차순 정렬.
- 입력받은 당첨 번호를 오름차순으로 정렬.
---

#### 10. 사용자가 구매한 로또 번호와 당첨 번호를 비교해 몇등에 당첨 되었는지 확인.
- 구매한 로또들의 번호와 입력받은 당첨번호, 보너스 번호 비교해서 당첨을 확인
- 당첨은 1등부터 5등까지
  - 1등: 6개 번호 일치
  - 2등: 5개 번호 + 보너스 번호 일치
  - 3등: 5개 번호 일치
  - 4등: 4개 번호 일치
  - 5등: 3개 번호 일치
---

#### 11. 당첨 내역을 출력.
- 아래와 같은 형식으로 출력
- 3개 일치 (5,000원) - (당첨 개수)개
  <br>
  4개 일치 (50,000원) - (당첨 개수)개
  <br>
  5개 일치 (1,500,000원) -(당첨 개수)개
  <br>
  5개 일치, 보너스 볼 일치 (30,000,000원) -(당첨 개수)개
  <br>
  6개 일치 (2,000,000,000원) -(당첨 개수)개
---

#### 12. 수익률 계산.
- 수익률 = (당첨된 총 금액 / 총 구입 금액) × 100
- 수익률을 소수점 둘째 자리에서 반올림
---

#### 13. 수익률 출력
- 총 수익률은 (계산된 수익률)%입니다. 형태로 출력

