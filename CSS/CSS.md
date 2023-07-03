# CSS

## 1. 선택자

- 전체선택자: `*`
  
  ```css
  * { }
  ```

- 태그선택자: html 태그{ }
  
  ```css
  태그명 { }
  ```

- 클래스선택자: html에 지정한 class를 사용 .클래스{ }
  
  ```css
  .클래스명 { }
  .클래스명.클래스명 { } 
  ```

- 아이디선택자: html에 지정한 id를 사용 #아이디명 { }
  
  ```css
  #id명 { }
  ```

- 그룹선택자: 둘이상 요소에 적용
  
  ```css
  태그명, 태그명 { }
  ```

## 2. 캐스캐이딩

스타일 우선 순위

1. 중요도에 따라
   
   1. 시스템에서 만든 스타일
   
   2. 제작자 스타일 시트의 중요 !important
   
   3. 제작자 스타일 시트의 일반 스타일
   
   4. 브라우저 스타일 시트 스타일

2. 적용범위에 따라
   
   1. 인라인 
   
   2. id
   
   3. class
   
   4. 태그

3. 소스 순서에 따라
   
   - 중요도와 명시도가 같다면 소스 순서에 따라 결정
   
   - 나중에 사용한 스타일이 먼저 사용한 스타일을 덮어씀

## 3. 텍스트 관련 스타일

- font-family 속성
  
  - 웹문서에서 사용할 글꼴 지정
  
  - 지정한 글꼴이 없을 경우를 대비해서 2개 3개 이상 사용함
  
  - body 태그 스타일에 한번 정의하면 전체에 적용 됨 
  
  - 구글폰트 많이 사용

- font-size 속성
  
  - px 단위
    
    - 모바일 기기에도 같은 크기로 표시되기 때문에 모바일에서도 사용한다면 em 사용
  
  - em 단위
    
    - 상대값으로 크기를 지정
  
  - ex 단위
  
  - pt

- font-weight 속성
  
  - 글자 굵기를 조절
  
  - normal(400), bold(700), bolder, lighter, 100, 200, 300, 400, 500, 600, 700, 800, 900

- font-style 속성
  
  - normal, italic, oblique

- color 속성
  
  - 글자 색 지정
  
  - 16진수, rgb 값, 색상 이름, hsi 값
  
  - rgb(빨, 초, 파)

- text-decoration 속성
  
  - 밑줄, 가로선
  
  - 링크 밑줄 제거
  
  - none(링크 밑줄 제거), underline, overline, line-through

- text-shadow 속성
  
  - 텍스트에 그림자 효과
  
  - text-shadow : none | <가로거리> <세로거리> <번짐정도> <색상>

- white-space 속성
  
  - 공백 처리 

- letter-spacing, word-spacing 속성
  
  - 글자간 간격, 단어간 간격

- text-align 속성
  
  - 텍스트 정렬 방법 지정
    
    | 속성 값         | 설명                         |
    | ------------ | -------------------------- |
    | start        | 현재 텍스트 줄의 시작 위치에 맞춰 문단을 정렬 |
    | end          | 현재 텍스트 줄의 끝 위치에 맞춰 문단을 정렬  |
    | left         | 왼쪽에 맞춰 문단을 정렬              |
    | right        | 오른쪽에 맞춰 문단을 정렬             |
    | center       | 가운데 정렬                     |
    | justify      | 양쪾에 맞춰 정렬                  |
    | match-parent | 부모 요소를 따라 문단을 정렬           |

- text-indent 속성
  
  - 문단의 첫 글자를 얼마나 들여 쓸지 지정
  
  - text-indent : <크기> | <백분율>

- line-height 속성
  
  - 문단의 줄 간격 지정
  
  - line-height: normal | <숫자> | <크기> | <백분율> | inherit
  
  - 부모 요소를 기준으로 몇 배인지 지정

- list-style-type 속성
  
  - 순서 없는 목록의 불릿이나 순서 목록의 숫자를 바꾸는 속성
  
  - list-style-type: none | <순서 없는 목록의 불릿> | <순서 목록의 번호>
    
    - disc  채운원
    
    - circle 빈 원
    
    - square 채운 사각형
    
    - none 불릿 제거

- list-style-image 속성
  
  - 순서 없는 목록의 불릿을 이미지로 바꾸는 속성
  
  - list-style-image: 이미지url | none

- list-style 속성 (단축 속성)
  
  - 예) list-style: none 

## 4. 색상 배경

- 16진수 표기
  
  - #000000 6자리 16진수로 표현
  
  - 000000(검은색) - ffffff(흰색)
  
  - 중복은 줄여서 사용 #ffffff => #fff

- rgb/rgba 표기
  
  - rgb(빨,초,파)
  
  - rgba(빨,초,파,투명)

- 색상이름
  
  - 영문색상으로 표시

- background-color 
  
  - 배경 색 지정

- background-clip
  
  - 배경을 어디까지 적용할지
  
  - 속성
    
    - border-box: 외곽 테투리까지
    
    - padding-box: 패딩까지
    
    - content-box: 내용부분만

- background-image 속성
  
  - 배경을 이미지 파일로 지정
  
  - 이미지 url사용

- background-repeat 속성
  
  - 배경이미지 반복 여부, 방향 결정
  
  - repeat, repeat-x, repeat-y, no-repeat

- background-size 속성
  
  - 배경이미지 크기 조절
  
  - 속성
    
    - auto: 크기만큼
    
    - contain: 요소 안에 이미지가 다 들어오도록 확대/축소, 여백이 생길 수 있음
    
    - cover: 배경이미지 요소를 모두 덮도록 확대/축소
    
    - 크기 값: x y를 px단위 또는 %를 사용해서 크기 지정

- background-position 속성
  
  - 배경이미지를 반복하지 않을 경우, 표시 위치 지정
  
  - 속성
    
    - 백분율: 배경이미지의 가로, 세로 위치를 %로 적용
    
    - px: 위치를 직접 지정
    
    - 키워드
      
      - 수평- left, center, right
      
      - 수직- top, center, bottom

- background-attachment 속성
  
  - 배경이미지 고정
  
  - 속성
    
    - scroll: 스크롤과 함께 배경이미지도 스크롤, 기본값
    
    - fixed: 스크롤 되어도 배경이미지 고정

- background-origin 속성
  
  - 이미지 배치할 기준 
  
  - 속성
    
    - border-box
    
    - padding-box
    
    - content-box

- background 속성
  
  - 배경관련 속성을 줄여서 표기
  
  - 각 속성 값이 다르므로 표기 순서 상관없음

- 선형 그라데이션
  
  - 속성
    
    | 속성 값      | 설명           |
    | --------- | ------------ |
    | to top    | 아래에서 시작해서 위로 |
    | to left   | 오른쪽에서 왼쪽으로   |
    | to right  | 왼쪽에서 오른쪽으로   |
    | to bottom | 위에서 아래로      |
    
    ```css
    background: linear-gradient(to top bottom, blue, white);
    ```
  
  - 각도사용
    
    deg, 시작색, 끝색
    
    ```css
    background: linear-gradient(45deg, #fff, #eee);
    ```

- 원형 그라데이션
  
  - 원형 중심을 기준으로 바깥 방향으로 색이 바뀜
  
  - 모양
    
    - circle(원형), ellipse(타원) 기본값
  
  - 속성
    
    - left, center,right / top, center, bottom
    
    ```css
    background: radial-gradient(circle at 10% 10%, blue, white);
    ```

- 그라데이션 반복
  
  - repeating-linear-gradient
    
    ```css
    background: repeating-linear-gradient(blue, blue 20px, white 20px, white 40px);;
    ```

## 5. 박스 모델

- 블록 레벨
  
  - 요소를 삽입했을 때 혼자 한 줄을 차지하는 요소

- 인라인 레벨
  
  - 줄을 차지하지 않는 요소
  
  - 컨텐츠만큼만 차지하는 요소

- width, height
  
  - px로 값을 지정하면 부모에 영향을 받지 않지만
  
  - %로 값을 지정하면 부모에 영향을 받아 크기가 변한다.

- display 속성
  
  - 대표값
  
  | 값            | 설명                      |
  | ------------ | ----------------------- |
  | block        | 인라인 요소를 블록요소로           |
  | inline       | 블록요소를 인라인요소로            |
  | inline-block | 요소를 인라인요소로 배치하면서 내용은 블록 |
  | none         | 화면에 표시하지 않음             |

테두리 관련 속성

- border-style 속성
  
  - solid: 실선
  
  - dotted: 점선
  
  - dashed: 짧은 선
  
  - hidden: 숨김
  
  - none: 기본값

- border-width
  
  - 테두리 두께 지정
    
    - border-top-width
    
    - border-right-width
    
    - border-left-width
    
    - border-bottom-width
    
    - border-width 
      
      - 네 방향이 같을 경우
        
        ```css
        .box {border-width: 1px};
        ```
      
      - 위아래, 좌우 같을 경우는 2개씩
        
        ```css
        .box {border-width: 1px 2px};
        ```
      
      - 다 다를 경우
        
        ```css
        .box {border-width: 1px 2px 3px 4px};
        ```
        
        - 시계방향

- border-color 속성
  
  - 테두리 색상 지정
    
    - border-top-color
    
    - border-right-color
    
    - border-bottom-color
    
    - border-left-color
    
    - border-color

- border 속성
  
  - border-top: 두께, 색상, 스타일
  
  - border-right
  
  - border-bottom
  
  - border-left
  
  - border
    
    ```css
    .box {border: 1px solid #black};
    ```

- border-radius 속성
  
  - 박스 모서리 둥글게
  
  - border-radius: 크기 | 백분율
    
    ```css
    .box {border-radius: 10px}
    ```
  
  - border-top-left-radius
    
    border-top-right-radius
    
    border-bottom-left-radius
    
    border-bottom-right-radius

- box-shadow 속성
  
  - 그림자 효과
  
  - box-shadow: 수평거리 수직거리 흐림 번짐 색상
    
    ```css
    .box {box-shadow: 1px 2px 3px 0px black};
    ```

- padding 속성
  
  - 콘텐츠영역과 테투리영역 사이의 여백
  
  - 값
    
    크기, 백분율, auto
    
    - padding-top
    
    - padding-right
    
    - padding-bottom
    
    - padding-left
    
    - paddding 1개, 2개(위아래, 좌우), 3개(위, 좌우, 아래), 4개(시계방향)

- margin 속성
  
  - 테두리영역 밖의 여백
  
  - 값
    
    크기, 백분율, auto
    
    - margin-top
    
    - margin-right
    
    - margin-bottom
    
    - margin-left
    
    - margin 1개, 2개(위아래, 좌우), 3개(위, 좌우, 아래), 4개(시계방향)

## 6. 레이아웃

- 포지셔닝
  
  - 요소의 위치를 배치

- box-sizing 속성
  
  - 박스 모델 너비 값의 기준을 지정
  
  - 속성 값
    
    - content-box: width 속성 값을 콘텐츠 영역 너비 값으로, 기본 값
    
    - border-box: width 속성 값을 콘텐츠 영역 + 테두리까지 포함한 전체 너비 값

- float 속성
  
  - 요소를 왼쪽 or 오른쪽에 떠 있게 만드는 속성
  
  - float: left | right

- clear 속성
  
  - float 속성을 무효화 시키는 속성
  
  - clear: none | left | right | both

- position 속성
  
  - 요소들을 배치하기 위한 속성
  
  - positon: static, relative, absolute, fixed
  
  - static
    
    - 문서의 흐름대로 배치
    
    - left 속성이나 top속성을 지정할 수 없음
  
  - relative
    
    - 고정되어 있지 않고 다른 요소에 의해 바뀔 수 있음
    
    - 상대적인 위치를 사용
    
    - left, top 속성을 이용해 위치 이동 가능
  
  - absolute
    
    - 문서의 흐름과 관계없이 원하는 위치에 배치 가능
    
    - 요소의 위치는 가장 가까운 부모 요소 중 relative인 요소, absolute 사용 전 부모요소에 relative 유무 확인
    
    - letf, top 속성을 이요해 위치 이동 가능
  
  - fixed
    
    - 문서의 흐름과 상관없이 원하는 위치에 배치 가능
    
    - 부모요소가 아닌 브라우저 창 기준

- visibility 속성
  
  - 특정 요소를 화면에 보이거나 보이지 않게 하는 속성
  
  - visibility: visible(기본값), hidden, collapse
    
    - hidden을 사용하면 요소는 눈에서는 사라지나 크기는 유지하고 있음
    
    - display: none과 다름, 이 경우는 공간도 같이 none 

- z-index 속성
  
  - 요소 쌓는 순서
  
  - z-index 값이 크면 값이 작은 요소보다 위로 쌓임

## 7. css 선택자

- 연결 선택자
  
  - 선택자와 선택자를 연결해 적용하는 대상을 한정하는 선택자

- 하위 선택자
  
  - 부모요소에 포함된 모든 하위 요소에 스타일이 적용
  
  - 상위요소 하위요소
    
    ```css
    section li {color: blue};
    ```
    
    section 태그의 하위에 있는 모든 li에 blue

- 자식 선택자
  
  - 자식 요소에 스타일을 적용하는 선택자
  
  - 부모요소 > 자식요소
    
    ```css
    section li {color: blue};
    ```
    
    section 태그의 자식 요소인 li만 적용, section태그의 자식요소인 li의 하위요소에 li는 적용 안됨

- 인접 형제 선택자
  
  - 같은 부모를 가진 형제 요소 중 첫 번째 동생 요소에만 스타일 적용
  
  - h1+ p
    
    ```html
    <h1></h1>
    <p> 첫번째만 적용
    <p>
    ```
    
    ```css
    h1 + p {color: blue};
    ```

- 형제 선택자
  
  - 모든 형제 요소에 다 적용
  
  - h1 ~ p
    
    ```html
    <h1></h1>
    <p> 첫번째 
    <p> 두번째 둘다 적용
    ```

- [속성] 선택자
  
  - 지정한 속성을 가진 요소만 스타일 적용
    
    ```css
    a[href] {color: blue};
    ```

- [속성= 값] 선택자
  
  - 주어진 속성과 값이 일치하는 요소만 스타일 적용
    
    ```css
    a[target="_blanc"] {color: blue};
    ```

- [속성~=값] 선택자
  
  - 여러 속성 값 중 해당 값이 포함되어 있는 요소만 스타일 적용
    
    ```css
    [class ~="button"] {color: blue};
    ```

- [속성 |= 값] 선택자
  
  - 특정 값이 포함된 속성을 가진 요소를 찾아 스타일 적용
    
    ```css
    a[title |="a"] {color: blue};
    ```
    
    ```html
    <li><a href="#" title="korea">한국어</a></li>
    <li><a href="#" title="japan">일본어</a></li>
    <li><a href="#" title="china">중국어</a></li>
    <li><a href="#" title="enlish">영</a></li>
    ```
    
    영어를 뺀 나머지 컬러가 blue가 됨

- [속성^=값] 선택자
  
  - 특정 값으로 시작하는 속성을 가진 요소를 찾아 스타일 적용

- [속성$=값] 선택자
  
  - 특정 값으로 끝나는 속성을 가진 요소를 찾아 스타일 적용

- [속성*=값] 선택자
  
  - 값의 일부가 일치하는 속성을 가진 요소를 찾아 스타일 적용



- 가상클래스
  
  | 표기       | 설명                                                |
  | -------- | ------------------------------------------------- |
  | :link    | 방문하지 않은 링크에 스타일 적용                                |
  | :visited | 방문한 링크에 스타일 적용                                    |
  | :active  | 웹 요소를 활성화했을 때의 스타일 적용, 클릭하는 순간                    |
  | :hover   | 마우스 커서를 올려놓을 때의 스타일                               |
  | :focus   | 웹 요소에 초점이 맞추어졌을 때의 스타일, tab 이동, 검색창 클릭, 현재 커서의 위치 |

- 구조 가상클래스
  
  - :nth-child(n)
    
    - 앞에서부터 n번째 자식 요소에 스타일 적용
    
    - an + b 처럼 수식 사용 가능, n값은 0부터
      
      - 홀수 번째: odd, 2n+1
      
      - 짝수 번째: even, 2n+0, 2n
  
  - :nth-last-child(n)
    
    - 뒤에서부터 n번째 자식 요소에 스타일 적용
  
  - :first-child
    
    - 첫번째 자식 요소에 스타일 적용
  
  - :last-child
    
    - 마지막 자식 요소에 스타일 적용
  
  - :nth-of-type(n)
    
    - 앞에서부터 n번째 요소에 스타일 적용
  
  - :nth-last-of-type(n)
    
    - 뒤에서부터 n번재 요소에 스타일 적용

- 가상요소
  
  - 실제로 문서안에 존재하는게 아니라 화면상에 표현화기 위한 요소, DOM에 존재하지 않음
  
  - `::before`: 특정 요소의 앞에 지정한 내용을 추가
  
  - `::after`: 특정 요소의 뒤에 지정한 내용을 추가
  
  - `::first-line`: 특정 요소의 첫번째 줄에 스타일 적용
  
  - `::first-letter`: 특정 요소의 첫번째 글자에 스타일 적용
