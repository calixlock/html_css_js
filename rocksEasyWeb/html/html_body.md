` ※ 웹표준은 html. css. javascript가 분리되어야 한다`

- 파일명 : 영어로 작성 / 공백x / \_를 활용한다

---

### 태그 `<tag>` 작성 규칙

- 소문자로 작성.
- 하나 이상의 공백 무시.
- 특수문자 주의 = 엔터티코드로 작성

  - 참고 = http://www.entitycode.com

  ```html
  - & : &amp; - ← : &larr;
  ```

---

### body의 sectioning

- 과거
  - w3c role attribute에 맞게 div에 role을 적용
- 현재
  - html 내용 전달
    ```html
    <tag> contents </tag>
    ```
  - symantic 시멘틱 태그
    - html5에서는 role을 부여할 필요 없어짐

---

### list

- 동급의 중요도를 가지는 요소들이 나열 될 때

---

### 참고사이트

- div - role
  - https://www.w3.org/WAI/PF/HTML/wiki/RoleAttribute
