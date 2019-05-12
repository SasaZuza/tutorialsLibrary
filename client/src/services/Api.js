// Importing axios that is installed with 'npm install -save axios'
// axios is used to make 'http' requests to some back end
import axios from 'axios';

// Using axios to connect to our server port on localhost '8081' URL
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  });
};
