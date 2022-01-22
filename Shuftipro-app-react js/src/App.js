import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { getDefaultNormalizer } from '@testing-library/dom';
import Main from './components/main/Main';
import { BrowserRouter } from "react-router-dom";


function App() {

  let payload = {
    reference         : `SP_REQUEST_${Math.random()}`,
    callback_url      : "https://yourdomain.com/profile/sp-notify-callback",
    redirect_url      : "https://yourdomain.com/site/sp-redirect",
    country           : "GB",
    language          : "EN",
    verification_mode : "any",
    ttl               : 60,
    email             : "praveendharmakar08@gmail.com",
}
payload['document'] = {
  name            : ['praveen'],
  dob             : '12-16-1992',
  age             : '30',
  document_number : '',
  expiry_date     : '1-1-2023',
  issue_date      : '1-1-1996',
  allow_offline   : '1',
  allow_online    : '1',
  supported_types : ['id_card','passport'],
  gender        :  ''
}
payload['address'] = {
  name               : ['praveen'],
  full_address       : 'bangalore',
  address_fuzzy_match : '1',
  issue_date         : '1-1-1996',
  supported_types    : ['utility_bill','passport','bank_statement']
}

  const handleSubmit = (event) => {
    console.log("handleSubmit :")
    var token = "ZTY0ZWJhMjI1YTAxY2I0ODYyMWUxNGRjMDdmYmRjNzYzNjFlNjUyZTEzNDhiOWQ0MmY5YWYxMjJlMDdiOTcyYjpYUHdHR3RpMUxpOG5kaHhDenBIRVdvMUIzd2x2dXlGSg=="
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + token
    }

    fetch('https://api.shuftipro.com/',
      {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + token
        },
        body: JSON.stringify(payload)

      })
      .then(function (response) {
        console.log("response : "+response )
        console.log("response : "+JSON.stringify(response.json) )
        return response.json();
      }).then(function (data) {
        console.log("data : "+data)
        console.log("data : "+JSON.stringify(data))
        return data;
      });
    // axios.post('https://api.shuftipro.com/get/access/token', {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Basic ' +{token}
    //   },
    // }).then((response) => {
    //     console.log("response")
    //     console.log("data :" + response)
    //     return response.json();
    //   }).catch((error) => {
    //     return Promise.reject(error);
    //   })
  }

  return (
    <BrowserRouter>
      <Main />;
    </BrowserRouter>
  );
}

export default App
