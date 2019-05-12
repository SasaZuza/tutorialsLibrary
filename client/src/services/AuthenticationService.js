// Importing that 'Api' file
import Api from '@/services/Api';

// Here we export register method with objects that do registration
export default {
  register(credentials) {
    return Api().post('register', credentials);
  }
};
