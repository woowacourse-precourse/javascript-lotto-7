# JavaScript

## Class

\# 
private 필드

클래스 외부에서 직접 접근이 불가능하다

접근을 

## 구조 분해 할당

```javascript

function somthing() {
  let a = 1;
  let b = 2;

  return { a, b };
};

let { a, b } = somthing();

let { a: resultA, b: resultB } = somthing();

// a = 1;
// b = 2;
// resultA = 1;
// resultB = 2;

```

## Error

에러 객체를 생성할때 내가 원하는 것을 담아서 보낼 수 있다
함수를 재귀하는 과정에서 시도해보았고 실제로 작동을 한다


## Array.toSorted()

요소의 순서를 결정하는 함수입니다. 생략하면 배열 요소가 문자열로 변환된 다음 각 문자의 유니코드 코드 포인트 값에 따라 정렬됩니다. 

## Regular expression

/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g

\B(?<!\.\d*)

\b
문자열의 현재 위치가 던어 경계임을 주장

\B
현재 위치가 단어 경계가 아님을 주장

해석

단어경계가 아니다
어디가?
. 뒤의 
\d 숫자들
* 전부가 

(?=(\d{3})+(?!\d))

\d{3}
숫자 3자리

