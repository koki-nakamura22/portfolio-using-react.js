// Initializing
// npm install gh-pages --save-dev
//
// Reference: https://github.com/tschaub/gh-pages

var ghpages = require('gh-pages');

ghpages.publish('build', {
  dest: 'portfolio',
  branch: 'master',
  repo: 'https://github.com/koki-nakamura22/koki-nakamura22.github.io.git'
}, function(err) {
  console.log(err);
});

var cyan = '\u001b[36m';
var reset = '\u001b[0m';
console.log(cyan + 'Web pages have been deployed!' + reset);
