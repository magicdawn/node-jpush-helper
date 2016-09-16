'use strict';
/* eslint camelcase: off, quotes: off */

const assert = require('assert');
const JPushHelper = require('../');


const APPKEY = process.env.JPUSH_APPKEY;
const SECRET = process.env.JPUSH_SECRET;
assert(APPKEY, 'JPUSH_APPKEY cannot be empty');
assert(SECRET, 'JPUSH_SECRET cannot be empty');

describe('Push', function() {
  let jpush;
  beforeEach(function() {
    jpush = new JPushHelper(APPKEY, SECRET);
  });

  it('push', function(done) {
    jpush.push({
      "platform": "android",
      "audience": {
        "registration_id": ["1507bfd3f7c7bb93621"]
      },
      "message": {
        "msg_content": "",
        "title": "jpush-title",
        "content_type": "text",
        "extras": {
          "url": "http://baidu.com",
          "msgId": 'msgId' + Date.now().toString(),
          "title": "jpush-title",
          "content": "jpush-content",
          "notifyType": "1",
          "bigPicture": ""
        }
      },
      "options": {
        "time_to_live": 604800,
        "apns_production": false
      }
    }).then(result => {
      console.log(result);
      done();
    }, err => {
      done(err);
    });
  });
});