/**
 * Created by txl-pc on 2017/8/14.
 */
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://121.42.252.26/operation/pages/doc-manage.html')
  .cookies.set('userid', 412)
  .cookies.set('username', 'zfc')
  .cookies.set('userrole', 1)
  .wait('#docmanage')
  .evaluate(function () {
    return document.querySelector('#docmanage').innerText
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });