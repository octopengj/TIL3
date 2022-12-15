!!! 이전 파일 과부하로 인해서 파일 분리하여 작성함

### 6.12. JSON 오브젝트

- JSON 오브젝트 개요
  
  - JavaScript Object Notation
    
    - 빌트인 오브젝트
    
    - new 연산자로 인스턴스 생성 불가
  
  - JSON 주요기능
    
    - 데이터 송수신의 변환 기준
    
    - 텍스트이므로 전송 속도가 빠름

- stringify( )
  
  | 구분     | 데이터(값)         |
  | ------ | -------------- |
  | object | JSON 오브젝트      |
  | 파라미터   | 변환 대상          |
  |        | 함수 또는 배열opt    |
  |        | 가독성을 위한 구분자opt |
  | 반환     | 변환 결과          |
  
  - JS 타입을 JSON 타입의 문자열로 변환
  
  - JSON.stringify( )형태로 호출
  
  - 첫번째 파라미터
    
    - " "큰따옴표 안에 작성됨
      
      ```javascript
      var value = {
          book : '책',
          title: 123
      };var result = JSON.stringify(value);
      console.log(result);
      // {"book":"책","title":123}
      ```
      
      - 변환시 큰따옴표 안에 작성됨
      
      - 숫자는 변환하지 않음
      
      - ' '작음 따옴표로 작성된 것은 큰 따옴표로 작성됨
    
    - 배열 반환
      
      ```javascript
      var value = ['book', '책', 123];
      var result = JSON.stringify(value);
      console.log(result);
      // ["book","책",123]
      ```
    
    - 특수한 값 변환
      
      ```javascript
      console.log(JSON.stringify([Infinity, NaN, null]));
      // [null,null,null]
      console.log(JSON.stringify([true, false]));
      // [tru,false]
      ```
      
      - Infinity, NaN, null은 null로 변환
      
      - true, false는 변환하지 않음
    
    - undefined 변환
      
      ```javascript
      console.log(JSON.stringify(undefined));
      // undefined
      console.log(JSON.stringify([undefined]));
      // [null]
      console.log(JSON.stringify({value: undefined}));
      // {}
      ```
      
      - 값 하나이면 그대로 변환
      
      - 배열 안에 있으면 null로 변환
      
      - 프로퍼티 값이면 프로퍼티를 제외시킴
        
        프로퍼티 이름도 함께 없어짐 주의
  
  - 두번째 파라미터
    
    - 두번째 파라미터에 함수 작성
      
      ```javascript
      var data = {book: '책', point: 55};
      function replace(key, value){
          return key === "point" ? 11 : value;
      };
      var result = JSON.stringify(data, replace);
      console.log(result);
      // {"book":"책","point":11}
      ```
      
      - replace가 프로퍼티 순으로 돈다
      
      - 일치하지 않아 value를 반환하는데, 값만 반환하는 것이 아니라
        
        key: value 형태로 반환한다.
      
      - 다음에는 point가 일치해서 55를 11로 변환해서 반환한다.
    
    - 두번째 파라미터에 배열 작성
      
      ```javascript
      var data = {book:'책', point: 10, amount: 100};
      var result = JSON.stringify(data, ['book', 'amount']);
      console.log(result); // {"book":"책","amount":100}
      ```
      
      - 배열 중에서 프로퍼티 이름이 같은 것만 반환
  
  - 세번째 파라미터
    
    - 세번째 파리미터에 줄분리 작성
      
      ```javascript
      var data = {abc: 'abc', number: 10};
      var result = JSON.stringify(data, "", '\n');
      console.log(result);
      /*
      {
      
      "abc": "abc",
      
      "number": 10
      }
      
      */
      ```
    
    - 숫자 작성
      
      ```javascript
      var data = {abc: 'abc', number: 10};
      var result = JSON.stringify(data, "", 4);
      console.log(result);
      /*
      {
          "abc": "abc",
          "number": 10
      }
      */
      ```
      
      숫자만큼 띄어쓰기
    
    - 삽입할 문자 작성
      
      ```javascript
      var data = {abc: 'abc', number: 10};
      var result = JSON.stringify(data, "", '##');
      console.log(result);
      /*
      {
      ##"abc": "abc",
      ##"number": 10
      }
      */
      ```

- JSON 타입 파싱
  
  - parse( )
    
    | 구분     | 데이터(값)             |
    | ------ | ------------------ |
    | object | JSON 오브젝트          |
    | 파라미터   | 변환 대상              |
    |        | 파싱 데이터로 실행할 함수 opt |
    | 반환     | 변환 결과              |
    
    - JSON 타입을 JS 타입으로 변환
      
      서버에서 어떤일이 발생할지 모르지 try catch문을 사용하는 것이 좋다.
      
      ```javascript
      var value = "123";
      try {
          var result = JSON.parse(value);
      } catch(e){
          console.log("파싱 에러");
      };
      console.log(result); 123
      console.log(typeof result); number
      ```
      
      - "123"이 문자열이지만 값이 숫자이므로 숫자 타입으로 변환
    
    - 작성 주의
      
      - "123."을 "123.0"으로 작성
      
      - "0123"처럼 첫 자리에 0 사용 불가
      
      - 10진수 사용
      
      - "큰 따옴표"
    
    - true, false
      
      ```javascript
      var value = "true";
      var result = JSON.parse(value);
      console.log(result); // true
      console.log(typeof result); // boolean
      ```
    
    - 배열에 작성
      
      ```javascript
      var value = '["abc", "가나", "12"]';
      var result = JSON.parse(value);
      console.log(result); // ['abc', '가나', '12']
      ```
    
    - Object에 작성
      
      ```javascript
      var value = '{"point": "123"}';
      var result = JSON.parse(value);
      console.log(result); // {point: '123'}
      ```
    
    - 두번째 파라미터 작성
      
      ```javascript
      var data = '{"책": "book", "영화": "movie"}';
      var check = function(key, value){
          return key === "book" ? "JS" : value;
      };
      var result = JSON.parse(data, check);
      console.log(result); // {책: 'book', 영화: 'movie'}
      ```

### 6.13. Date 오브젝트

- Data 오브젝트 개요
  
  - 년월일, 시분초, 밀리초 제공
    
    - time value라고 부름
  
  - UTC(Universal Time Coordinated)기준

- 시간값 표시 기준
  
  - 월은 0부터 시작
    
    - 0: 1월, 1: 2월, 11: 12월
  
  - 일은 1에서 31일까지 정수로 표시
  
  - 요일은 0부터 시작
    
    - 0: 일요일, 1: 월요일, 6: 토요일
    
    ```javascript
    var obj = new Date(2000, 1, 1, 1, 1, 1, 1);
    console.log(obj.toLocaleString());
    // 2000. 2. 1. 오전 1:01:01
    ```
    
    - 년, 월, 일, 시, 분, 초, 밀리s

- 
