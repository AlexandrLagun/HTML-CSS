import parseHeaders from 'parse-headers';
import httpStatus from 'http-status-codes';

const ajaxRequest = (httpMethod, url, data, ...headers) => {
  const passedHeaders = ['Content-Type: application/json', ...headers].join('\n');

  const config = {
      method: httpMethod,
      url: url,
      mode: 'cors',
      cache: 'no-cache',
      headers: parseHeaders(passedHeaders)
  };
  if (data) {
      config.body = JSON.stringify(data);
  }

  return fetch(url, config)
      .then(response => {
          if (response.ok) {
              return response.json();
          } else if (response.status === httpStatus.INTERNAL_SERVER_ERROR) {
              window.location.pathname = '/error';
          } else if (
              response.status === httpStatus.BAD_REQUEST ||
              response.status === httpStatus.UNAUTHORIZED
          ) {
              return response;
          } else {
              throw new Error(`Something is wrong: ${response.statusText}`);
          }
      })
      .catch(err => {
          console.error(err);
          window.location.pathname = '/error';
      });
}

export const post = (url, data, ...headers) => {
  return ajaxRequest('POST', url, data, ...headers);
}

export const get = (url, data, ...headers) => {
  return ajaxRequest('GET', url, data, ...headers);
}

export const put = (url, data, ...headers) => {
  return ajaxRequest('PUT', url, data, ...headers);
}

export const del = (url, data, ...headers) => {
  return ajaxRequest('DELETE', url, data, ...headers);
}
