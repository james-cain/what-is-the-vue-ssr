import * as axios from 'axios';

let options = {};

// if (process.server) {
    // options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 8999}`;
// }
options.baseURL = 'http://localhost:8999';
options.withCredentials = true;
console.log(options.baseURL);

export default axios.create(options);
