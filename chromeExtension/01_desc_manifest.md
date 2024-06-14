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
