import axios from 'axios'

export default {
  // Retrieve 20 random users
  search: function () {
    return axios.get('https://randomuser.me/api/?results=10&nat=us')
    // .then((response) => {
    //   const data = response.data.results;
    //   console.log(data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  },
}
