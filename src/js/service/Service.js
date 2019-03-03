export default {
  /**
   * 
   * @param {*} url 
   * @param {*} object 
   */
  api(url, object) {
    let options = Object.assign(object)
    return new Promise((resolve, reject) => {
      return fetch(window.BASE_URL + url, options).then((res) => {
        return res.json()
      }).then(res => {
        resolve(res)
        return res
      }).catch((err) => {
        reject(err)
        return err
      });
    });
  },
  
}