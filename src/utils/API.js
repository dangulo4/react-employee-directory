import axios from 'axios';

const URL = 'https://randomuser.me/api/?results=20&nat=us';

export default {
  // Retrieve 20 random users
  search: function () {
    return axios.get(URL);
  },
};
