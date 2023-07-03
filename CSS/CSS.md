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



## 8. 변형, 애니메이션

- 변형(transform)
  
  - 2차원 변형
    
    - 수평이나 수직으로 요소 변형
    
    - 크기나 각도만 지정
    
    - 2차원 좌표 사용
    
    - 이동 px단위, 숫자단위로 확대, deg 각도 조절 사용법에 차이가 있음
  
  - 3차원 변형
    
    - x축과 y축에 원근감 추가
    
    - z축은 앞뒤로 이동 보는 사람 쪽으로 다가올 수록 값이 커짐

- 2차원 변형 함수
  
  | 함수              | 설명                        |
  | --------------- | ------------------------- |
  | translate(x, y) | 지정한 크기만큼 x, y축으로 이동       |
  | translateX(x)   | 지정한 x만큼 x축으로 이동           |
  | translateY(y)   | 지정한 y만큼 y축으로 이동           |
  | scale(x, y)     | 지정한 크기만큼 x, y축으로 확대 \| 축소 |
  | scaleX(x)       | 지정한 x만큼 x축 확대 \| 축소       |
  | scaleY(y)       | 지정한 y만큼 y축 확대 \| 축소       |
  | rotate(각도)      | 지정한 각도만큼 회전               |
  | skew(x, y)      | 지정한 각도만큼 x, y 축으로 왜곡      |
  | skewX(x)        | 지정한 x만큼 x축으로 왜곡           |
  | skewY(y)        | 지정한 y만큼 y축으로 왜곡           |

- 3차원 변형 함수
  
  | 함수                    | 설명                                        |
  | --------------------- | ----------------------------------------- |
  | matrix3d(n [, n])     | 4*4 행렬을 이용해 이동과 확대 \| 축소, 회전 등의 변환을 지정    |
  | translate3d(x, y, z)  | 지정한 크기만큼 x, y, z축으로 이동                    |
  | translateZ(z)         | 지정한 크기만큼 z축으로 이동                          |
  | scale3d(x, y, z)      | 지정한 크기만큼 x, y,z 축으로 확대 \| 축소              |
  | scaleZ(z)             | 지정한 크기만큼 z축으로 확대 \| 축소                    |
  | rotate3d(x, y, z, 각도) | 지정한 각도만큼 회전                               |
  | rotateX(각도)           | 지정한 각도만큼 x축으로 회전                          |
  | rotateY(각도)           | 지정한 각도만큼 y축으로 회전                          |
  | rotateZ(각도)           | 지정한 각도만큼 z축으로 회전                          |
  | perspective(길이)       | 입체적으로 보일 수 있는 깊이 값을 지정, 값이 클수록 사용자로부터 멀어짐 |

- transform-origin
  
  - 특정 지점을 변형의 기준으로 설정
  
  - 대표적으로 한쪽 모서리를 기준으로 기울어진 모습
    
    transform-origin: x축 y축 z축 | initial | inherit ;

- perspective-origin
  
  - 입체적으로 표현할 요소의 아랫부분 위치 지정
  
  - 좀더 높은 곳에서 원근을 조절하는 듯한 느낌을 갖게 함

- transform-style
  
  - flat: 하위 요소를 평면으로 처리
    
    - box1과 box2(하위)가 있을 때 box1은 rotateY를 하고 box2는 rotateX를 해도 box2에 3D효과가 없음
  
  - preserve-3d: 하위 요소들에 3D효과를 적용
    
    - 위와 같은 경우에 box1의 위치만큼 이동을하고나서 box2의 위치를 3D효과를 적용해서 box2가 이동함

- backface-visivility 
  
  - 요소의 뒷면을 표시할 것인지 결정
  
  - visible (기본값)
  
  - hidden 뒷면을 표시하지 않음
  
  - 카드 뒤집기



- 트랜지션
  
  - 요소의 스타일이 시간의 흐름에 따라 서서히 변하는 것
  
  - 속성
    
    | 속성                         | 설명              |
    | -------------------------- | --------------- |
    | transition-property        | 대상 설정           |
    | transition-duration        | 진행 시간 설정        |
    | transition-timing-function | 속도 곡선을 설정       |
    | transition-delay           | 지연 시간을 설정       |
    | transition                 | 축약형, 속성을 한번에 사용 |
  
  - transition-property
    
    | 속성 값  | 설명                                                                   |
    | ----- | -------------------------------------------------------------------- |
    | all   | all 값을 사용하거나 transition-property를 생략할 경우, 요소의 모든 속성이 트랜지션 대상이 됨, 기본값 |
    | none  | 트랜지션 동안 아무 속성도 바뀌지 않음                                                |
    | 속성 이름 | 적용할 속성 이름을 지정                                                        |
  
  - transition-duration 
    
    - 트랜지션 진행 시간 설정
    
    - 단위는 초, 밀리초
    
    - 여러개라면 쉼표로 시간 지정
  
  - transition-timing-function
    
    - 트랜지션의 시작, 중간, 끝 속도 지정
      
      | 속성 값                  | 설명                               |
      | --------------------- | -------------------------------- |
      | linear                | 시작부터 끝까지 같은 속도로 진행               |
      | ease                  | 처음에는 천천히 시작, 빨라졌다가 마지막에 천천히, 기본값 |
      | ease-in               | 시작을 느리게                          |
      | ease-out              | 끝을 느리게                           |
      | ease-in-out           | 시작과 끝을 느리게                       |
      | cubic-bezier(n,n,n,n) | 배지에 함수를 직접 정의해 사용, n의 값은 0~1     |
  
  - transition-delay
    
    - 트랜지션이 언제부터 시작될지 지연 시간 설정
    
    - 단위는 초, 밀리초



- 애니메이션
  
  - 애니메이션 주요 속성
    
    | 속성                        | 설명                                                  |
    | ------------------------- | --------------------------------------------------- |
    | @keyframes                | 애니메이션이 바뀌는 지점을 설정                                   |
    | animation-delay           | 애니메이션 지연 시간을 지정                                     |
    | animation-direction       | 애니메이션 종료 후 처음부터 시작할지, 역방향으로 진행할지를 지정                |
    | animation-duration        | 애니메이션 실행 시간을 설정                                     |
    | animation-fill-mode       | 애니메이션이 종료되었거나 지연되어 애니메이션이 실행되지 않는 상태일 때 요소의 스타일을 지정 |
    | animation-iteration-count | 애니메이션 반복 횟수를 지정                                     |
    | animation-name            | @keyframes로 설정해 좋은 중간 상태의 이름을 지정                    |
    | animation-play-state      | 애니메이션을 멈추거나 다시 시작                                   |
    | animation-timing-function | 애니메이션의 속도 곡선을 지정                                    |
    | animation                 | 단축속성                                                |
  
  - @keyframes 
    
    - '이름'작성 필수
    
    - 시작 위치는 0%, 끝 위치는 100%, 중간에 단계 %로 추가
    
    - 처음과 끝만 있다면 from, to로 설정 가능 
  
  - animation-name
    
    - @keyframes 속성에서 만든 애니메이션 이름을 사용
    
    - 사용할 대상에 animation-name을 작성하는 것임
    
    ```css
    #box {
        animation-name: circle;
        animation-duration: 2s;
    }
    @keyframes circle {
        from {
        
        }
        to {
        
        }
    }
    ```
  
  - animation-direction
    
    - 애니메이션이 끝난 후 원래 위치로 돌아가거나 반대 방향으로 애니메이션을 실행하도록 지정
    
    - normal: 실행이 끝나면 원래 위치로 돌아감, 기본값
    
    - alternate: 실행이 끝나면 왔던 방향으로 되돌아가면서 애니메이션을 실행
  
  - animation-iteration-count
    
    - 애니메이션 반복 횟수 지정
    
    - 숫자: 숫자만큼 반복, 기본값은 1
    
    - infinite: 무한 반복
  
  - animation-timin-function
    
    - transition-timing-function과 속성이 같음
  
  - animation 단축
    
    - 지정하지 않은 속성은 기본 값을 사용, but animation-duration 속성 값은 필수 지정
      
      ```css
      .box {
          animation-name: move;
          animation-duration: 2s;
          animation-timing-function: ease-in;
          animation-direction: alternate;
          animation-iteration-count: infinite;
      }
      
      .box {
          animation: move 2s alternate infinite ease-in;
      }
      ```



## 9. 반응형 웹

다양한 화면 크기의 기기들에 크기를 맞춰 자동으로 바꾸어 사이트를 구형하는 디자인

- 뷰포트: 실제 내용이 표시되는 영역

- 뷰포트 지정
  
  - head 태그 안에서 meta 태그를 이용해 뷰포트 지정
    
    ```html
    <meta name="viewport" content="width=divice-width, initial-scale=1">
    ```
    
    | 속성            | 설명                      | 사용 가능 값             | 기본 값      |
    | ------------- | ----------------------- | ------------------- | --------- |
    | width         | 뷰포트 너비                  | device-width \| 크기  | 브라우저 기본 값 |
    | height        | 뷰포트 높이                  | device-heithg \| 크기 | 브라우저 기본 값 |
    | user-scalable | 확대/축소 가능 여부             | yes \| no           | yes       |
    | initial-scale | 초기화면 확대/축소 값            | 1~10                | 1         |
    | minimum-scale | 확대여부가 yes라면, 최소 확대/축소 값 | 0~10                | 0.25      |
    | maximum-scale | 확대여부가 yes라면, 최대 확대/축소 값 | 0~10                | 1.6       |



- 그리드 시스템
  
  - 화면을 여러개의 칼럼으로 나누어, 필요할 때마다 칼럼들을 묶어서 배치하는 방법
  
  - 화면 너비에 따라 960그리드, 1200그리드 시스템 등으로 나뉨
  
  - 칼럼 개수에 따라 12칼럼, 16칼럼, 24칼럼 그리드 시스템 등으로 나뉨
  
  - 주로 960픽셀 12칼럽의 그리드 시스템 사용
  
  - 고정 그리드: 화면 너비를 일정하게 고정하고 레이아웃 생성 
    
    - 고정그리드를 사용하면 화면 너비가 좁아질경우 화면의 일부터 가려짐
  
  - 가변 그리드: 화면 너비를 %와 같이 가변값으로 지정
    
    - 화면의 크기에 따라 내용의 크기가 조정되어 화면에 보여짐
    
    - 전체를 감싸는 요소의 너비를 %로 변환(꽉 채우면 100%)
    
    - 전체를 감싸는 요소의 너비를 기준으로 각 요소의 너비를 계산
      
      (요소의 너비 / 콘텐츠 전체를 감싸는 요소의 너비) / 100



- 가변 글꼴
  
  - em 단위
    
    - 부모 요소 폰트의 대문자 M 너비를 1em으로 지정
    
    - 1em = 16px
  
  - rem 단위
    
    - em 단위는 부모의 요소가 중첩될 경우 글자의 크기가 계속 달라짐
    
    - rem은 처음부터 기본 크기를 지정하고 그것을 기준으로 글자 크기 지정



- 가변 이미지
  
  - 가변 이미지로 만들면 창의 너비에 따라 이미지 너비도 조절됨
    
    이미지를 화면크기에 따라서 100% 보여줌
    
    ```css
    .content img {
        max-width: 100%;
        height: auto;
    }
    ```
  
  - img 태그와 srcset 속성
    
    - 화면 너비 값이나 픽셀 밀도에 따라 고해상도의 이미지 지정 가능
      
      ```html
      <img src="images/ball.jpg" srcset="images/ball-hd.jpg 2x"> 
      ```
      
      밀도가 2배이면 ball-hd이미지를 보여주고 그렇지 않으면 ball 이미지를 보여줘
  
  - picture 태그와 source 태그
    
    - 화면 해상도뿐만 아니라 화면 너비에 따라 다른 이미지 파일 표시
      
      | 속성     | 설명                          |
      | ------ | --------------------------- |
      | srcset | 이미지 파일 경로                   |
      | media  | srcset에 지정한 이미지를 표시하기 위한 조건 |
      | type   | 파일 유형                       |
      | sizes  | 파일 크기                       |
      
      ```html
      <picture>
        <source src="images/ball-large.jpg" media="(min-width: 1024px)">
        <source src="images/ball-medium.jpg" media="(min-width: 768px)">
        <source src="images/ball-small.jpg" media="(min-width: 320px)">
        <img src="images/ball.jpg" alt="ball image" style="width:100%">
      </picture>
      ```
      
      화면크기에 따라 불러올 파일 지정, 인식을 못할경우 일반 ball이미지 불러옴



- 가변 비디오
  
  - max-width 속성을 100%로 지정



## 10. 미디어 쿼리

접속하는 장치에 따라 특정한 css스타일을 사용하도록 함

- 미디어 쿼리 구문
  
  @media [only | not] 미디어 유형 [and 조건] * [and 조건]
  
  - only: 미디어 쿼리를 지원하는 웹 브라우저에서만 조건을 인식, 거의 사용 안함
  
  - not: not 뒤에 지정하는 유형을 제외하고, 나머지 적용 

- 미디어 유형의 종류
  
  - all, print, screen, tv, aural, braille, handheld, projection, tty, embossed

- 미디어 쿼리 조건
  
  - 웹 문서의 가로 너비와 세로 높이(뷰포트)
    
    | 가로,세로 값 설정 속성         | 설명                  |
    | --------------------- | ------------------- |
    | width, height         | 웹 페이지의 가로 너비, 세로 높이 |
    | min-width, min-height | 최소 너비, 최소 높이        |
    | max-width, max-height | 최대 너비, 최대 높이        |
  
  - 화면 회전
    
    - orientation 속성을 사용해서 화면 방향 체크
    
    | 속성                     | 설명        |
    | ---------------------- | --------- |
    | orientation: portrait  | 단말기 세로 방향 |
    | orientation: landscape | 단말기 가로 방향 |

- 미디어 쿼리 중단점 만들기
  
  - 예시
  
  - 스마트폰 세로
    
    ```css
    @media only screen and (min-width: 320px) { }
    ```
  
  - 스마트폰 가로
    
    ```css
    @media only screen and (min-width: 480px) { }
    ```
  
  - 태블릿 세로
    
    ```css
    @media only screen and (min-width: 760px) { }
    ```
  
  - 태블릿 가로, 데스크톱
    
    ```css
    @media only screen and (min-width: 1024px) { }
    ```

- 외부 css 연결
  
  - css파일 하나에 다 작성할 수도 있지만 화면 크기별로 css파일을 나눠서도 사용함
    
    <head>에 작성
    
    ```html
    <link rel="stylesheet" media="미디어 쿼리 조건" href="css 파일경로">
    ```
  
  - import 구문 사용
    
    <style>에 작성
    
    ```css
    @import url(css파일 경로) 미디어 쿼리 조건
    ```



## 11. 플렉스

- 그리드 레이아웃을 기본으로, 플렉스 박스를 원하는 위치에 배치하는 것

- 플렉스 구조
  
  - flex container: flex item 묶음
  
  - flex item: 플레스 컨테이너에 담기는 요소들
  
  - main axis(주축): 기본 방향 / 왼쪽에서 오른쪽
  
  - cross axis(교차축): 주축과 교차되는 방향 / 위에서 아래

- display 속성
  
  - 배치 요소들을 감싸는 부모 요소를 플레스 컨테이너로 지정
    
    display: flex;
    
    | 속성 값        | 설명                 |
    | ----------- | ------------------ |
    | flex        | 플렉스 박스로 지정         |
    | inline-flex | 플렉스 박스를 인라인 요소로 정의 |

- flex-direction 속성
  
  - 플렉스 항목 배치 방향 지정
    
    | 속성 값           | 설명                              |
    | -------------- | ------------------------------- |
    | row            | 주축을 가로로 교차축을 세로로 지정(왼쪽에서 오른쪽으로) |
    | row-inverse    | 주축을 가로로 교차축을 세로로 지정(오른쪽에서 왼쪽으로) |
    | column         | 주축을 세로로 교차축을 가로로 지정(위에서 아래로)    |
    | column-inverse | 주축을 세로로 교차축을 가로로 지정(아래에서 위로)    |

- flex-wrap 속성
  
  - 컨테이너 박스를 벗어나는 항목의 배치
    
    | 속성 값         | 설명                                |
    | ------------ | --------------------------------- |
    | no-wrap      | 플렉스 항목들을 한 줄에 표시, 기본값             |
    | wrap         | 플렉스 항목들을 여러 줄에 표시                 |
    | wrap-reverse | 플렉스 항목들을 여러 줄에 표시하되 기존 방향과 반대로 배치 |

- flex-flow 속성
  
  - 플렉스 배치 방향과 줄 배치를 한번에 지정
  
  - 기본값은 flex-flow: row no-wrap
  
  - flex-flow: 플렉스방향 , 플렉스 줄 배치

- order 속성
  
  - 플렉스 항목의 배치 순서 바꾸기
  
  - order 값에 지정된 순서에 따라 배치

- justify-content 속성
  
  - 플렉스 항목을 주축 방향으로 배치할 때의 배치 기준
    
    | 속성 값          | 설명                                            |
    | ------------- | --------------------------------------------- |
    | flex-start    | 주축의 시작점을 기준으로 배치                              |
    | flex-end      | 주축의 끝점을 기준으로 배치                               |
    | center        | 주축의 중앙을 기준으로 배치                               |
    | space-between | 첫번째와 마지막 항목을 시작점과 끝점에 배치 후 중앙 항목들은 같은 간격으로 배치 |
    | space-around  | 모든 플렉스 항목들을 같은 간격으로 배치                        |

- align-items 속성, align-self 속성
  
  - 교차축을 기준으로 배치
  
  | 속성 값       | 설명                                                    |
  | ---------- | ----------------------------------------------------- |
  | stretch    | 플렉스 항목을 확장해 교차축을 꽉 채움, 기본값                            |
  | flex-start | 교차축의 시작점을 기준으로 배치                                     |
  | flex-end   | 교차축의 끝점을 기준으로 배치                                      |
  | center     | 교차축의 중앙을 기준으로 배치                                      |
  | baseline   | 시작점과 글자 기준선이 가장 먼 플레스 항목을 시작점에 배치, 나머지를 그 기준선을 맞추어 배치 |

- align-content 속성
  
  - 플렉스 항목이 여러 줄로 표시될 때 교차 축 기준의 배치
  
  - 속성 값
    
    - flex-start
    
    - flex-end
    
    - center
    
    - space-between
    
    - space-around

- flex 속성
  
  - 플렉스 항목의 크기 조절
  
  - flex-grow, flex-shrink, flex-basis 속성
  
  - 각 별개의 속성이지만 따로 쓰지 않고 flex 속성으로 묶어 사용
  
  - flex: flex-grow 값   flex-shrink 값    flex-basis 값  |   auto   |   initial
    
    | 속성 값        | 설명                                                                |
    | ----------- | ----------------------------------------------------------------- |
    | flex-grow   | 플렉스 항목의 너비를 얼마나 늘어나게 할지 지정                                        |
    | flex-shrink | 플렉스 항목의 너비를 얼마나 줄어들게 할지 지정                                        |
    | flex-basis  | 플렉스 항목의 기본 크기를 지정                                                 |
    | initial     | 항목의 width/height 값에 의해 크기가 결정되는데 플렉스 컨테이너의 공간이 부족할 경우, 최소 크기까지 줄임 |
    | auto        | 항목의 width/height 값에 의해 크기가 결정되지만 플렉스 컨테이너의 공간에 따라 늘이거나 줄임         |
    
    - flex-basis: width 속성처럼 너비 값을 지정할 수도 있고 0이나 auto를 지정할 수도 있음, 0일 경우 flext-grow와 flex-shrink의 인수 값을 함께 사용하고 auto일 경우 플렉스 항목의 너비 값을 사용
    
    - flex: initial == flex: 0 1 auto
    
    - flex: auto == flex: 1 1 auto
    
    - flex: none == flex: 0 0 auto
