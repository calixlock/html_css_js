### html tag 구조

```html
<!-- element = 요소 -->
<a href="http://www.naver.com">content</a>
<태그 속성=값>콘텐츠</태그>
```

- tag = 태그
- attribute = 속성
- value = 값
- content = 콘텐츠 = 내용

  - 작성 시 나타난다

- html을 보기 위해서 > browser 필요 >

  - 타입형식을 브라우저가 이해하는 방식으로 정확히 전달
    - DTD : DocType Declaration

- deplicated = 사장된 태그
  - font...
- indentation = 들여쓰기

---

## `<head>`

### 1. `<meta/>`

```html
<!-- charset = 글자집합 -->
<meta charset="UTF-8" />
<!--검색관련 정보  -->
<meta name="keywords" content="카메라, 고해상도, 멀티태스킹, 보안" />
<meta name="description" content="카메라에대한 세부사항 및 정보 기입" />
<!--viewport = 브라우저를 화면크기에 맞게 전환하는 옵션 -->
<meta name="viewport" content="width=320 initial-scale=1" />
<!-- 320px 너비의 기기에서만 최적화 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- 장치의너비에 맞게 최적화 -->
```

### 2. `<link>`

```html
<!-- CSS = cascading styleSheet = 디자인-->
<link rel="styleesheet" href="./fileLocation/main.css" />
```

### 3. `<>`

```html
<!-- javascript : 동작구현 -->
<script src="./main.js"></script>
```

### 4. 브라우저 지원파일

- 지원가능
  - html
  - jpg
  - gif
  - pdf
  - mp3
  - mp4
- 지원불가
  - hwp
  - docs
  - excel
  - etc
  - zip
- 금지된 파일
  - js
  - exe
  - 악성파일 접근 가능

---

### 웹사이트 생명

1. 검색이 잘되어야 한다.
2. 빠르게 로딩되어야 한다.
   - 안될 경우 : 로딩 에니메이션이라도
3. 유지,보수,관리 편해야 한다.

---

### W3C 웹표준 검사

- https://validator.w3.org/
