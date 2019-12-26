import { CSRF_TOKEN } from "./csrf_token.js"

const config = {
    method: method || "GET",
    body: data !== undefined ? JSON.stringify(data) : null,
    headers: {
      'content-type': 'application/json',
      'X-CSRFTOKEN': CSRF_TOKEN
    }
};

export default config;
