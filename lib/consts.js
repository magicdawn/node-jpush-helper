'use strict';

/**
 * Module dependencies
 */

const pkg = require('../package');
const pkgName = pkg.name;
const pkgVersion = pkg.version;



/**
 * exports
 */

exports.UA = `${ pkgName } v${ pkgVersion }`;