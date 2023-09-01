# AJAX 와 API

## 1. AJAX 개요

- Asynchronous JavaScript And XML

- 비동기식 자바스크립트와 XML

- AJAX는 페이지에 데이터를 요청하는데 페이지가 로딩된 이후에 데이터를 요청할 수 있음

- 자바스크립트 언어로 서버에 데이터를 요청



## 2. APIs

- HTML, CSS와 JavaScript를 웹 페이지에 띄워서 JavaScript로 AJAX 요청을 할 때 
  
  HTML, CSS, JavaScript가 아닌 순수한 정보를 원함 이때 필요한게 API

- Application Programing Interface의 약자

- API는 컴퓨터가 여러 소프트웨어와 상호 작용하거나 소통하는 모든 인터페이스를 의미하는 광범위한 용어, 소프트웨어끼리 소통하는 언어

- 보통은 WebAPI를 의미하며 WebAPI는 웹, HTTP를 기반으로 하는 인터페이스

- 예를 들어 트위터나 페이스북, 날씨도 API를 이용함
  
  모두 특정 엔드포인트를 제공하고 제공되는 엔드포인트는 사용되는 코드에 정보로 응답하거나 다른 소프트웨어에 정보로 응답함
  
  WebAPI는 다른 애플리케이션이나 데이터베이스로 가는 입구이다

- 다양한 여러 API들이 많다 유료도 있고 무료도 있다



## 3. JSON

- Java Script Object Notation

- 이름에 자바스크립트가 있으니 자바스크립트와 관련이 있어 보이지만 전혀 다른 의미

- JSON은 계속해서 데이터를 전송하거나 정보를 전송하는 포맷일 뿐임

- 사용자끼리 전송하거나 API에서 브라우저로 전송할 수 있음

- 일관적이고 예측할 수 있는 데이터를 포맷팅하며 자바스크립트 객체 구문을 기반으로하여 자바스크립트와 유사함, 중괄호와 키-값을 갖는게 유사함

- 모든 키는 큰따옴표를 갖고 있음, undefined 없음

- value로 object, array, string, number, "true", "false", "null"이 작성 됨

- JSON.parse
  
  - 문자열을 전달하면 파싱되어 JavaScript 객체로 변환 됨

- JSON.stringify
  
  - JavaScript 객체인 정보를 JSON으로 변환
  
  - JSON형식의 데이터를 받는 API에 정보를 보낼 때 유용



## 4. API 테스트

- Postman이나 Hoppscotch라는 무료프로그램을 사용할 수 있음

- HTTP 요청을 해서 여러 API를 테스트하고 요청을 저장하는 도구



## 5. HTTP Verbs

- GET : 정보를 가져올 때 사용, API 정보를 가져올 때

- POST: 정보를 보낼 때 사용

- DELETE: API를 통해 무언가를 삭제할 때

사용하는 API가 어떻게 만들어졌느냐에 따라 사용하는 것이 다르다



## 6. HTTP Status Codes

- HTTP 응답에서 나타나는 코드

- 일반적으로 문제가 없을 땐 2로 시작하는 상태 코드가 뜸 200:OK, 201:Created, 202:Accepted 등

- 리디렉션 코드는 3으로 시작하는 코드

- 클라이언트 사이드 오류에 해당하는 4로 시작하는 error 응답코드 
  
  대표적으로 404 Not Found

- 서버사이드 오류는 5로 시작하는 코드


