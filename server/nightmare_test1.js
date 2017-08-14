/**
 * Created by txl-pc on 2017/8/14.
 */
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.baidu.com')
  .type('#kw', '西游记')
  .click('#su')
  .wait('#content_left')
  .evaluate(function () {
    console.log(1)
    return document.querySelector('#content_left').offsetHeight;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });