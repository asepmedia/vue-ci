import Service from './Service'
import qs from 'qs'

export default {
  /**
   * 
   * @param {*} form 
   */
  login (form) {
    const {payload} = form
    const url = '/auth/login';
    const options = {
      method: 'POST',
      body: qs.stringify(payload),
      headers: new Headers({
        "Content-type": "application/x-www-form-urlencoded"
      })
    };
    return Service.api(url, options)
  }, 
  /**
   * 
   * @param {*} form 
   */
  logout () {
    const url = '/auth/logout';
    const options = {
      method: 'POST',
      headers: new Headers({
        "Content-type": "application/x-www-form-urlencoded"
      })
    };
    return Service.api(url, options)
  },      
  /**
   * 
   * @param {*} form 
   */
  register (form) {
    const {payload} = form
    const url = '/api/auth/register';
    const options = {
      method: 'POST',
      body: qs.stringify(payload),
      headers: new Headers({
        "Content-type": "application/x-www-form-urlencoded"
      })
    };
    return Service.api(url, options)
  },  
}