/**
 * Created by txl-pc on 2017/8/14.
 */
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://linda.medatc.com/v3dp/v3dp/#/')
  .cookies.set({
    name: 'user_id',
    value: '2920',
    domain: '.linda.medatc.com',
    path: '/',
    secure: false
  })
  .wait('.header-bannber-item.center')
  .evaluate(function () {
    return document.querySelector('.header-bannber-item.center').innerText;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });