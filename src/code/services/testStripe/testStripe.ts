import Stripe from 'stripe';
const myhttpp = require('http');
const stripe = new Stripe('sk_test_2qkM1Ra1cabnRoW3spicTv7b', {
  apiVersion: '2020-08-27',
});
console.log('http?', myhttpp);

function testStripe(req, resp: CbServer.Resp) {
  stripe.customers
    .del('test')
    .then((data) => {
      resp.success(data);
    })
    .catch((e) => {
      resp.error('caught delete customer error: ' + e.detail);
    });
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.testStripe = testStripe;
