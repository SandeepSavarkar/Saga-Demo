import axios from 'axios';

export function fetch(url) {
  return axios.get(url);
}
