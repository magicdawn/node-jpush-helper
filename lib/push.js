'use strict';

/**
 * Module dependencies
 */

const co = require('co');
const request = require('superagent');
const consts = require('./consts');

/**
 * consts
 */

const API_PUSH = 'https://api.jpush.cn/v3/push';
const API_PUSH_VALIDATE = 'https://api.jpush.cn/v3/push';

const pushFactory = url => co.wrap(function*(json) {
  const user = this.user;
  const pass = this.pass;

  let res;
  try {
    res = yield request
      .post(url)
      .set('user-agent', consts.UA)
      .auth(user, pass)
      .send(json);
  } catch (e) {
    if (!res.original && e.response) {
      res = e.response;
    } else {
      throw e;
    }
  }

  return res.body;
});

exports.push = pushFactory(API_PUSH);
exports.push.validate = pushFactory(API_PUSH_VALIDATE);