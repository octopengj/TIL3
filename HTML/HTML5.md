# HTML5

## 1. 텍스트 태그

- h
  
  - 제목 태그
  
  - h1부터 h6까지
  
  - `<h1>` text `</h1>`

- br
  
  - 줄 바꿈
  
  - `<br>`

- hr
  
  - 수평 줄
  
  - `<hr>`

- p
  
  - 입력한 내용 앞뒤로 빈줄, 단락 생성
  
  - `<p>` 내용 `</p>`

- blockquote
  
  - 인용문에 사용, 안으로 들여쓰기 됨
  
  - `<blockquote>` `</blockquote>`
  
  - 블록 단위

- pre
  
  - 입력하는 그대로 화면표시 공백포함
  
  - `<pre>` 내용 `</pre>`

- strong, b
  
  - 굵은 글씨 
  
  - `<strong>` 내용 `</strong>` , `<b>` 내용 `</b>`
  
  - strong 중요내용 강조
  
  - b 단순 굵은 글씨

- em, i
  
  - 이탤릭체 강조
  
  - `<em>` 내용 `</em>` , `<i>` 내용 `</i>`
  
  - em 특정 부분 강조
  
  - i 단순 이탤릭체

- q 
  
  - 인용 내용 표시
  
  - `<q>` 내용 `</q>`
  
  - 인라인, `" "` 표로 표시 됨

- mark
  
  - 형광펜 효과
  
  - `<mark>` 내용 `</mark>`

- div
  
  - 블록단위
  
  - 블록단위로 묶임

- span 
  
  - 인라인단위
  
  - 줄단위로 묶임

- dl, dt, dd
  
  - 설명 목록 생성
  
  ```html
  <dl>
      <dt> 제목 </dt>
      <dd> 설명 </dd>
  </dl>
  ```

- ul, li
  
  - 순서 없는 목록 구성

- ol, li
  
  - 순서 있는 목록 구성
  
  ```html
  <ul>
      <li> 내용 </li>
  </ul>
  ```

<ol>
      <li> 내용 </li>
  </ol>

<ul>
      <ol>
          <li> 내용 </li>
      </ol>
  </ul>

```
- table, tr, td, th

```html
<table>
    <tr>
        <th> 셀 제목(1행 1열) </th>
        <td> 내용(1행 2열) </td>
        <td> 내용(1행 3열) </td>
    </tr>
    <tr>
        <th> 셀 제목(2행 1열) </th>
        <td> 내용(2행 2열) </td>
    </tr>
</table>
```

- colspan, rowspan
  
  ```html
  <table>
      <tr>
          <th>
          <td colspan="3"></colspan>
          </th>
      </tr>
  </table>
  ```
  
  - colspan 행 합치기
  
  - rowspan 열 합치기

- caption
  
  - 표 제목
  
  - table 태그 다음에 사용, 중앙 정렬 됨
  
  ```html
  <table>
      <caption>
          <p> 표 제목 입력 </p>
      </caption>
  </table>
  ```

- figcaption
  
  - 표의 제목
  
  - 제목을 붙일 대상을 `<figure>` `</figure>` 태그로 감싼 후 사용 
  
  - table 태그보다 위에 사용하면 위에, 아래에 사용하면 아래, 중앙 정렬 안됨
  
  ```html
  <figure>
      <figcaption>
          <p> 내용 </p>
      </figcaption>
      <table>
          <tr>
              <th></th>
          </tr>
      </table>
  </figure>
  ```

- thead, tbody, tfoot
  
  - 표의 구조 정의
  
  ```html
  <table>
    <caption>내용</caption>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </tfoot>
  </table>
  ```

- col, colgroup
  
  - 열로 묶어서 스타일 지정
  
  ```html
  <table>
    <caption>
    <colgroup>
      <col>
      <col span="2" style="background-color: skyblue;">
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    </colgroup>
    </caption>
  </table>
  ```
  
  - span으로 열 지정, col은 닫는 태그 없음, 열의 갯수에 맞춰서 col 사용

## 2. 이미지, 링크 태그

- img
  
  - 이미지 삽입
  
  - 속성
    
    - src 
      
      - 이미지 경로, 웹사이트 주소를 입력
    
    - alt 
      
      - 대체 텍스트, 시각장애인들에게 중요함 이미지 설명필요
    
    - width, height
      
      - 이미지 크기 조정
  
  - figure, figcaption
    
    - 이미지에 설명글을 붙일 경우 사용
    
    ```html
    <figure>
      <img src="coffee.jpg" alt="아메리카노 커피사진">
      <figcaption>아메리카노 커피사진</figcaption>
    </figure>
    ```
    
    - 이미지에 p태그로 설명글 달지마라

- a 
  
  - 링크 태그
  
  - 속성
    
    - href 
      
      - 주소 작성
    
    - target
      
      - _blank 
        
        - 새 창이나 새 탭에서 열림
      
      - _self
        
        - 기본값, 현재화면에서 열림
    
    ```html
    <a href="www.abc.com" target="_blank">abc사이트로 이동</a>
    ```

- 페이지 안에서 이동하는 앵커 태그 사용
  
  - id 값을 사용
  
  ```html
  <ul id="top">
    <li><a href="#content1">본문1</a></li>
    <li><a href="#content2">본문2</a></li>
    <li><a href="#content3">본문3</a></li>
  </ul>
    <h2 id="content1">본문1</h2>
    <p>본문 내용</p>
    <p><a href="#top">맨 위로</a></p>
  
    <h2 id="content2">본문2</h2>
    <p>본문 내용</p>
    <p><a href="#top">맨 위로</a></p>
  
    <h2 id="content3">본문3</h2>
    <p>본문 내용</p>
    <p><a href="#top">맨 위로</a></p>
  ```

- map, area, usemap
  
  - 이미지에 영역 값으로 태그
  
  ```html
    <img src="images.jpg" alt="이미지" usemap="#event">
    <map name="event">
      <area shape="circle" coords="100, 100, 50" 
      href="https://www.abc.com" alt="abc페이지로 이동" target="_blank">
    </map>
  ```
  
  - shape
    
    - circle은 대상의 가운데 좌표와 반지름(100px, 100px, 50px)
    
    - rect은 대상의 왼쪽 상단과 오른쪽 하단 끝 좌표 (10, 10, 100, 100)

## 3. 폼 태그

- form
  
  - `<form>` 내용 `</form>`
  
  - 속성
    
    - method
      
      - get
        
        - 사용자가 입력한 내용이 그대로 보여져서 보안상 문제가 있음
      
      - post 
        
        - 사용자가 입력한 내용을 암호화 함, 대부분 이 방식을 사용함
    
    - name
      
      -  폼의 이름을 지정
    
    - action
      
      - 태그 안의 내용들을 처리할 서버상의 프로그램 지정
    
    - target
      
      - 현재 창이 아닌 다른 창으로 열도록 만들 때 사용

- label
  
  - 폼 요소에 레이블을 붙이는 태그
  
  - 라디오버튼과 체크박스를 사용할 때
  
  - 사용자가 입력하는 텍스트와 연결할 때 사용

- fieldset
  
  - 폼 요소를 그룹으로 묶는 태그

- legend
  
  - 그룹으로 묶는 구역에 제목을 붙이는 태그

- input
  
  - 폼 태그안에서 사용자의 입력란을 만드는 태그
  
  - 유형
    
    | 유형             | 설명                                                 |
    | -------------- | -------------------------------------------------- |
    | hidden         | 사용자에게 보이지 않는 서버로 넘겨지는 값                            |
    | text           | 한 줄짜리 텍스트를 입력할 수 있는 텍스트 상자                         |
    | search         | 검색 상자                                              |
    | tel            | 전화번호 입력 필드                                         |
    | url            | URL 주소를 입력할 수 있는 필드                                |
    | email          | 메일 주소를 입력할 수 있는 필드                                 |
    | password       | 비밀번호를 입력할 수 있는 필드                                  |
    | datetime       | 국제 표준시로 설정된 날짜와 시간(연, 월, 일, 시 분, 초, 분할 초)를 넣음      |
    | datetime-local | 사용자가 있는 지역을 기준으로 날짜와 시간(연, 월, 일, 시 분, 초, 분할 초)를 넣음 |
    | date           | 사용자 지역을 기준으로 날짜(연, 월, 일)을 넣음                       |
    | month          | 사용자 지역을 기준으로 날짜(연, 월)을 넣음                          |
    | week           | 사용자 지역을 기준으로 날짜(연, 주)를 넣음                          |
    | time           | 사용자 지역을 기준으로 시간(시, 분, 초, 분할 초)를 넣음                 |
    | number         | 숫자를 조절할 수 있는 화살표를 넣음                               |
    | range          | 숫자를 조절할 수 있는 슬라이드 막대를 넣음                           |
    | color          | 색상 표를 넣음                                           |
    | checkbox       | 체크박스를 넣음                                           |
    | radio          | 라디오 버튼을 넣음                                         |
    | file           | 파일을 첨부할 수 있는 버튼을 넣음                                |
    | submit         | 서버 전송 버튼을 넣음                                       |
    | image          | submit 버튼 대신 사용할 이미지를 넣음                           |
    | reset          | 리셋 버튼을 넣음                                          |
    | button         | 버튼을 넣음                                             |
  
  - type = "hidden"
    
    - 사용자 접속 시간, 경로, 장소 등 정보를 서버로 전송
  
  - type = "text"
    
    - 아이디, 이름, 주소
  
  - type = "password"
    
    - 비밀번호 입력란
    
    - 사용자가 입력한 내용을 `*` 로 표시
    
    텍스트 필드와 패스워드 필드 속성
    
    | 속성        | 설명                                                                                |
    | --------- | --------------------------------------------------------------------------------- |
    | name      | 텍스트 필드를 구별할 수있도록 이름을 붙임                                                           |
    | size      | 텍스트 필드의 길이를 지정, 예) 최대 글자 수가 10일 경우 size를 5로 지정하면 5개 글자를 표시 나머지 5개 글자는 화면에 보이지 않음  |
    | value     | 텍스트 필드 요소가 화면에 표시될 때 텍스트 필드 부분에 표시될 내용, 사용하지 않으면 빈 텍스트 필드 (password는 value속성이 없음) |
    | maxlength | 텍스트 필드에 입력할 수 있는 최대 문자 개수 지정                                                      |
  
  - type = "search"
    
    - 검색 창에 필드에 사용
    
    - 모바일의 경우 text보다 search를 사용하는 것이 좋음 x표시가 나타남
  
  - type = "email"
    
    - 이메일 주소 입력 필드
    
    - 메일 주소 형식 자동 체크
  
  - type = "url"
    
    - 웹 주소 필드
    
    - http://로 시작하는 사이트 주소 입력
  
  - type = "tel"
    
    - 전화번호 입력 필드
    
    - 사용자 입력을 체크하지 않음
  
  - type = "number"
    
    - 숫자 입력 필드, 브라우저에 따라 스핀 박스로 표시됨
    
    - 속성
      
      - min, max
  
  - type = "range"
    
    - 숫자 입력 필드, 슬라이드 막대를 이용해 숫자 입력
    
    - 속성
      
      - min, max
  
  - type = "radio"
    
    - 여러 항목 중 하나만 선택할 때
  
  - type = "checkbox"
    
    - 여러 항목 중 둘 이상 선택할 때
    
    radio, checkbox속성
    
    | 속성      | 설명                                            |
    | ------- | --------------------------------------------- |
    | name    | 여러개 있을 경우 구분하기 위해 이름 지정                       |
    | value   | 서버로 알려 줄 때 넘길 값을 지정, 이 값은 영문이거나 숫자여야 하며 필수 속성 |
    | checked | 처음에 기본으로 선택해 놓을 항목 지정                         |
    
    - 작성 예시
      
      ```html
      <form>
        <fieldset>
          <legend>언어입력</legend>
          <p>언어를 선택하세요</p>
          <label><input type="radio" name="language" value="korean" checked>한글</label>
          <label><input type="radio" name="language" value="english">영어</label>
        </fieldset>
      </form>
      ```
      
      
  
  - type = "date", type  = "month", type = "week"
    
    - 작성 예시
      
      ```html
        <fieldset>
          <label><input type="date" id="start"></label>
          <label><input type="date" id="end"></label>
        </fieldset>
      ```
  
  - type = "time", type = "datetime-local"
    
    - 속성
      
      | 속성    | 설명                                      |
      | ----- | --------------------------------------- |
      | min   | 날짜나 시간의 최소값을 지정                         |
      | max   | 날짜나 시간의 최대값을 지정                         |
      | step  | 스핀 박스와 화살표를 누를 때마다 날짜나 시간을 얼마나 조절할지를 지정 |
      | value | 화면에 표시할 초기값을 지정                         |
    
    - 작성 예시
      
      ```html
        <fieldset>
          <label>시작시간<input type="time" value="09:00" id="start"></label>
          <label>종료시간<input type="time" value="18:00" id="end"></label>
          <label>시작시간<input type="datetime-local" value="2023-01-01T09:00" id="start"></label>
          <label>종료시간<input type="datetime-local" value="2023-01-01T18:00" id="end"></label>
        </fieldset>
      ```
  
  - type = "submit", type = "reset"
    
    - 폼 전송/리셋 버튼
    
    - submit 사용자 입력 내용을 서버로 전송
    
    - reset 사용자 입력 내용 전부 삭제
    
    - value 속성으로 버튼 표시 내용 지정
    
    - 작성 예시
      
      ```html
        <fieldset>
          <label>메일주소 <input type="email"></label>
          <input type="submit" value="제출">
          <input type="reset" value="다시입력">
        </fieldset>
      ```
  
  - type = "image"
    
    - submit 대신 이미지 삽입
    
    - 작성 예시
      
      ```html
        <fieldset>
          <label>메일주소 <input type="email"></label>
          <input type="image" id="btn" src="images/submit.jpg" alt="login">
        </fieldset>
      ```
  
  - type = "button"
    
    - 버튼 넣기
    
    - value로 버튼 내용 지정
  
  - type = "file"
    
    - 파일 첨부 



- input 태그 속성
  
  - autofocus
    
    - 원하는 폼 요소에 마우스 커서 표시
  
  - placeholder
    
    - 입력란에 설정된 텍스트, 필드 클릭하면 사라짐
  
  - readonly
    
    - 사용자가 내용 수정 불가능
    
    - 속성 값 없이 readonly만 작성하면 됨
  
  - required
    
    - 필수 체크 필드 (반드시 입력해야 합니다.)
    
    - 속성 값 없이 required만 작성하면 됨
  
  - min, max, step
    
    - min, max 해당 필드의 최대, 최소 값
    
    - step 허용된 범위 내의 숫자 간격
    
    - type이 date, datetime, datetime-local, month, week, time, range, number일 경우에만 사용
  
  - size, minlength, maxlength
    
    - size 텍스트 관력 필드에서 화면세 몇 글자까지 보이게 할지 결정
    
    - maxlength 입력 가능한 최대 글자
    
    - minlength 입력해야 할 최소 글자
    
    

- 여러 데이터 나열
  
  - select, optgroup, option
    
    - 여러 옵션 중에서 선택 - 드롭다운 목록
    
    ```html
    <select id="leng">
      <option value="korean">한국어</option>
      <option value="english">영어</option>
      <option value="japanese">일본어</option>
      <option value="chinese">중국어</option>
    </select>
    ```
    
    - select 태그 속성
      
      | 속성       | 설명                                       |
      | -------- | ---------------------------------------- |
      | size     | 화면에 표시될 드롭다운 메뉴의 항목 개수를 지정               |
      | multiple | `Ctrl` 키를 누른상태로 드롭다운 메뉴에 있는 여러 항목을 선택 가능 |
    
    - option 태그 속성
      
      | 속성       | 설명                      |
      | -------- | ----------------------- |
      | value    | 옵션을 선택했을 때 서버로 넘겨질 값 지정 |
      | selected | 기본으로 선택되어 있는 옵션         |
  
  - textarea
    
    - 텍스트 입력 영역
    
    - 속성
      
      | 속성   | 설명                                       |
      | ---- | ---------------------------------------- |
      | name | 텍스트 영역의 이름을 지정                           |
      | cols | 텍스트 영역의 가로 너비를 문자 단위로 지정                 |
      | rows | 텍스트 영역의 세로 길이를 줄 단위로 지정, 줄이 많아지면 스크롤바 생성 |

- 기타 폼 요소
  
  - button
    
    - 다양한 버튼 삽입
    
    - css로 꾸밀 수 있음
    
    - 화면 낭독기에서 버튼임을 전달 가능
    
    - 속성
      
      | 속성     | 설명                             |
      | ------ | ------------------------------ |
      | submit | 폼을 서버로 전송                      |
      | reset  | 폼에 입력한 모든 내용 초기화               |
      | button | 버튼 형태만 만들 뿐 기능은 없음, 기능은 JS로 만듬 |
    
    - CSS로 꾸미기 가능



## 4. 시맨틱 태그

- header
  
  - 사이트 전체의 제목 부분, 본문의 제목, 검색창

- nav
  
  - 네이게이션 영역

- section
  
  - 주제별 콘텐츠 영역

- article
  
  - 콘텐츠 내용

- aside
  
  - 본문 내용 외에 주변에 표시되는 기타 내용

- iframe
  
  - 외부 문서 삽입
  
  - 광고 영역, 유튜브 영상 삽입
  
  - 수정시, 외부 문서만 수정하면 됨

- footer
  
  - 제작 정보와 저작권 정보

- address
  
  - 제작자 정보와 연락처 정보
  
  - footer태그 내부에서 사용
  
  - 단순 우편주소는 p태그 사용

- div
  
  - 시맨틱 태그사용 외에 사용
  
  - css로 작업이 필요할 때 사용



## 5. 미디어 태그

- audio
  
  - 배경 음악이나 효과음에 사용
  
  - width, height로 크기 조절
  
  - 속성
    
    | 속성       | 설명                                |
    | -------- | --------------------------------- |
    | autoplay | 자동 재생                             |
    | controls | 컨트롤 막대를 표시                        |
    | loop     | 반복 재생                             |
    | muted    | 소리 끔, 재생 중                        |
    | preload  | 재생 버튼을 누러 재생하기 전에 파일을 다운로드해 준비해 둠 |

- video
  
  - 비디오 파일 삽입
  
  - 속성 같음

- 
  
  
