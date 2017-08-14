/**
 * Created by txl-pc on 2017/8/14.
 */
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://121.42.252.26/operation/pages/user-login.html')
  .type('#userName', 'zfc')
  .type('#password', '123456')
  .click('.login-btn')
  .goto('http://121.42.252.26/operation/pages/mems-pro-list.html')
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