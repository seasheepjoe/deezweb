import axios from 'axios';

let api = axios.create();

export default {
  fetchAll(url) {
    return api.get(url)
      .then(response => {
        if (!response.data.error) {
          return Promise.resolve(response.data);
        }
      })
      .catch(err => {
        Promise.reject(err);
      })
  }
}