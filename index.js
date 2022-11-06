let loaddependenciestime1 = Date.now();
console.log('[DEBUG] Loading Dependencies...');
var mysql = require('mysql');
let loaddependenciestime2 = Date.now();
let elapsedloaddependencies = loaddependenciestime1 - loaddependenciestime2;
console.log('[DEBUG] Loaded Dependencies. (' + elapsedloaddependencies + 'ms).');
