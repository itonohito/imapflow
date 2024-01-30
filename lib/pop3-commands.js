/* eslint global-require:0 */

'use strict';

module.exports = new Map([
    ['APOP', require('./pop3/apop.js')],
    ['USER', require('./pop3/user.js')],
    ['PASS', require('./pop3/pass.js')],
    ['STAT', require('./pop3/stat.js')],
    ['LIST', require('./pop3/list.js')],
    ['RETR', require('./pop3/retr.js')],
    ['DELE', require('./pop3/dele.js')],
    ['RSET', require('./pop3/rset.js')],
    ['CAPA', require('./pop3/capa.js')],
    ['STLS', require('./pop3/stls.js')],
    ['UIDL', require('./pop3/uidl.js')],
    ['TOP',  require('./pop3/top.js')],
    ['QUIT', require('./pop3/quit.js')],

]);
