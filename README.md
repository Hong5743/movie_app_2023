# fetch() 함수 
fetch()는 JavaScript에서 네트워크 요청을 만들기 위해 사용되는 API 중 하나입니다. 이 함수는 네트워크를 통해 리소스(일반적으로는 HTTP 요청을 통해)를 가져오는데 사용됩니다. 주로 웹 애플리케이션에서 서버와 데이터를 주고받을 때 사용됩니다.

fetch() 함수는 Promise를 반환하며, 이 Promise는 Response 객체를 포함합니다. 이 객체는 서버에서 반환된 응답에 대한 정보와 응답된 데이터를 담고 있습니다.

간단한 예제를 통해 fetch()를 살펴보겠습니다:

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // JSON 형식으로 응답 데이터를 파싱
  })
  .then(data => {
    // 처리된 데이터를 사용하여 무언가를 수행
    console.log(data);
  })
  .catch(error => {
    // 네트워크 요청이 실패하거나 다른 오류가 발생한 경우 처리
    console.error('There was a problem with the fetch operation:', error);
  });

  이 예제에서 fetch() 함수는 'https://api.example.com/data'에서 데이터를 가져오려고 시도합니다. 그리고 나서 then() 메서드를 사용하여 응답 객체를 처리하고, 응답 데이터를 JSON 형식으로 파싱합니다. 그 후에는 처리된 데이터를 사용하여 다른 작업을 수행할 수 있습니다. 만약 네트워크 요청이 실패하면 catch() 블록에서 오류를 처리합니다.

fetch()를 사용할 때 주의할 점은 Cross-Origin Resource Sharing (CORS) 정책에 따라 요청하는 도메인이나 서버가 다를 경우에는 추가적인 구성이 필요할 수 있다는 점입니다. 또한 fetch() API는 네트워크 요청을 보내고 받는 데 사용되므로 비동기적으로 동작하며, 콜백 함수를 활용하여 응답을 처리하게 됩니다.

