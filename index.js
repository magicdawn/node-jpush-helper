'use strict';

const assert = require('assert');
const EventEmitter = require('events');
const _ = require('lodash');
const push = require('./lib/push');

class JPushHelper extends EventEmitter {
  constructor(appkey, secret) {
    super();
    assert(appkey, 'appkey can not be null');
    assert(secret, 'secret can not be  null');
    this.user = appkey;
    this.pass = secret;
  }
}

module.exports = JPushHelper;

// add push
_.assign(JPushHelper.prototype, push);