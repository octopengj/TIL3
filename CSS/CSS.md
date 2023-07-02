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


