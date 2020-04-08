import axios from 'axios';

class DriverApi {
  getDrivers(refreshDriversList, token) {
    axios
      .get('/drivers', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        refreshDriversList(res.drivers);
      })
      .catch((err) => {
        console.log('error while getting the list of drivers');
        console.log(err);
      });
  }

  getDriverByName(name, token, parent) {
    axios
      .get('/driver/name/' + name, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        parent.setState({drivers: res.drivers});
      })
      .catch((err) => {
        console.log('error while getting the list of drivers');
        console.log(err);
      });
  }

  getFavoritsDrivers(token) {
    axios
      .get('/user/fav-drivers', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
      });
  }

  sendContactUsMessage(obj) {
    return axios
      .post('/contactus', obj, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((res) => res.data);
  }
}

export default DriverApi;
