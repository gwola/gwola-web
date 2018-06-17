import Axios from "axios";
//import createHistory from 'history/createBrowserHistory';
//const history = createHistory();
import history from './history';

export default class ApiService {

  static CallApi(method: string, path: string, params: object, completedCallback: Function, failedCallback: Function): void {

    let url = path;
    if (method === "GET" && params) {
      //put them into a string (eg. "param1=val1&param2=val2")
      url += "?" + Object.keys(params).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&');
    }

    // Axios.interceptors.response.use(
    //   (response) => {
    //     //console.log(response.data)

    //     return response;
    //   },
    //   (error) => {
    //     //console.log(error.message === 'Request failed with status code 404')
    //     if (error.message === 'Request failed with status code 404') {
    //       history.push('/404');
    //     }

    //   }
    // );

    const apiCall = (url: any, options: any) => {

      if (method === "GET") {
        //GET ------------------------------
        Axios.get(url, options)
          .then(response => {
            completedCallback(response.data);
          })
          .catch(error => {
            failedCallback(error);
          });
      } else {
        //POST ----------------------------
        Axios.post(url, params, options)
          .then(response => {
            completedCallback(response.data);
          })
          .catch(error => {
            failedCallback(error);
          });
      }
    }
    apiCall(url, {
      headers: {
        'Authorization': sessionStorage.getItem('key')
      }
    });
  }

}
