### manifest.json

```json
  "manifest_version": 3,
  "name": "Word Frequency",
  "description": "Knowing words is a strength",
  "version": "1.0",
  "permissions": ["activeTab", "scripting"],
  "background": {
    "service_worker": "./background.js"
  },
  "action": {
    "default_title": "default Title",
    "default_popup": "./popup/popup.html",
    "default_icon": "./images/icon.png"
  }
```

#### - manifest_version

```json
  "manifest_version": 3,
```

- manifest 파일의 버전을 나타냅니다.
- 현재 최신 버전은 Manifest V3입니다.
  - `cf` Manifest V2는 더 이상 지원되지 않습니다.

#### - name

```json
  "name": "Word Frequency",
```

- 확장 프로그램의 이름입니다.
- Chrome 웹 스토어와 확장 프로그램 관리 페이지에 표시됩니다.

#### - description

```json
  "description": "Knowing words is a strength",
```

- 확장 프로그램의 간단한 설명입니다.
- Chrome 웹 스토어에 표시되며, 사용자가 확장 프로그램의 기능을 이해하는 데 도움을 줍니다.

#### - version

```json
  "version": "1.0",
```

- 확장 프로그램의 버전입니다.
- 버전 넘버링은 업데이트할 때 중요합니다.

#### - permissions

```json
"permissions": ["activeTab", "scripting"]
```

- 확장 프로그램이 요청하는 권한 목록
- `activeTab`
  - 현재 활성화된 탭에 일시적으로 접근할 수 있는 권한을 줍니다.
- `scripting`
  - 특정 스크립트를 웹 페이지에 주입할 수 있는 권한을 줍니다.

#### - background

```json
"background": {
  "service_worker": "./background.js"
}
```

- 백그라운드 스크립트를 정의합니다.
- `service_worker` 필드
  - 서비스 워커는 확장의 백그라운드 작업을 처리합니다.
  - `xxx.js` 파일을 지정 가능합니다.

#### - action

```json
"action": {
  "default_title": "default Title",
  "default_popup": "./popup/popup.html",
  "default_icon": "./images/icon.png"
}
```

- 확장의 브라우저 액션을 정의합니다.
- 브라우저의 도구 모음에 아이콘으로 표시되며, 사용자가 클릭할 때 동작을 정의합니다.
  - default_title: 사용자가 확장 아이콘에 마우스를 올렸을 때 표시되는 기본 제목입니다.
  - default_popup: 아이콘을 클릭했을 때 열리는 팝업 HTML 파일입니다.
  - default_icon: 확장 아이콘의 경로입니다.

---

#### + 추가

#### - icons

- 확장 프로그램의 아이콘을 다양한 크기로 설정합니다.

```json
  "icons": {
    // 16 : 확장 프로그램 페이지 및 컨텍스트 메뉴의 파비콘
    "16": "images/icon-16.png",
    // 32 :	Windows 컴퓨터에는 이 크기가 필요한 경우가 많습니다.
    "32": "images/icon-32.png",
    // 48 : 광고 확장 페이지에 표시됩니다.
    "48": "images/icon-48.png",
    // 128 : 설치 시 및 Chrome 웹 스토어에 표시됩니다.
    "128": "images/icon-128.png"
  }
```

#### - content_scripts

- 웹 페이지에 주입할 script , CSS를 정의합니다.

```json
"content_scripts": [
  {
    // matches : 스크립트가 주입될 URL 패턴입니다.
    "matches": ["<all_urls>"],
    // js : 주입할 자바스크립트 파일입니다.
    "js": ["./content_script.js"],
    // css : 주입할 CSS 파일입니다.
    "css": ["./styles.css"]
  }
]
```

#### - web_accessible_resources

- 웹 페이지에서 접근 가능한 리소스를 정의합니다.

```json
"web_accessible_resources": [
  {
    "resources": ["./images/*", "./popup/*"],
    "matches": ["<all_urls>"]
  }
]
```

#### - options_page

- 확장 프로그램의 옵션 페이지를 정의합니다.
- 사용자가 확장의 설정을 변경할 수 있습니다

```json
"options_page": "./options/options.html",
```

#### - commands

- 확장 프로그램의 단축키 명령을 정의합니다.

```json
"commands": {
  //toggle-feature: 명령의 이름입니다.
  "toggle-feature": {
    //suggested_key: 단축키를 설정합니다.
    "suggested_key": {
      "default": "Ctrl+Shift+F",
      "mac": "Command+Shift+F"
    },
    //description: 명령의 설명입니다.
    "description": "Toggle the feature"
  }
}
```

#### - omnibox

- 주소창에 키워드를 입력하여 확장 프로그램을 트리거할 수 있게 합니다.

```json
"omnibox": {
"keyword": "search"
},
```

#### - content_security_policy

- 확장 프로그램의 보안 정책을 정의합니다.

```json
"content_security_policy": {
"extension_pages": "script-src 'self'; object-src 'self'"
}

```

---
