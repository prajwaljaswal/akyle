import { ARTICLES_URL, LOGIN_URL } from "./API_URL";

export const loginCall = (data) => {
  return fetch(LOGIN_URL, {
    method: 'POST', // Specify the request method
    headers: {
      'Content-Type': 'application/json', // Specify the content type
    },
    body: JSON.stringify(data), // Convert the data object to a JSON string
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON from the response
    });
    // Do not handle success and error here; let the caller handle it
};



export const articlesCall = () => {
    return fetch(ARTICLES_URL, {
      method: 'GET', // Specify the request method
      headers: {
        'Content-Type': 'application/json', // Specify the content type
        'Authorization': `Token ${localStorage.getItem("token")}`
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
      });
      // Do not handle success and error here; let the caller handle it
  };
