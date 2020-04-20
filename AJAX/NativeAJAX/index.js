function ajax(options) {
  let method = options.method || 'GET',
    params = options.params,
    data = options.data,
    url =
      options.url +
      (params
        ? '?' +
          Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&')
        : ''),
    async = options.async === false ? false : true,
    success = options.success,
    headers = options.headers;

  let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject();
  }
  console.log(xhr);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      success && success(xhr.responseText);
    }
  };
  xhr.open(method, url, async);
  if (headers) {
    Object.keys(Headers).forEach(
      (key) => xhr.setRequestHeader[(key, headers[key])]
    );
  }
  method === 'GET' ? xhr.send() : xhr.send(data);
}
ajax({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/comments?postId=1',
  success: function (res) {
    console.log(res);
  },
});
