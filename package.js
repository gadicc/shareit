Package.describe({
  summary: 'A meteorite package that makes social sharing easy',
  git: 'https://github.com/Differential/shareit',
  version: '0.2.1'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(['coffeescript', 'less', 'templating', 'underscore'], 'client');


  api.imply('spiderable', ['client', 'server']);
  api.addFiles([
    'shareit.coffee',
    'client/views/social.html',
    'client/views/social.coffee',
    'client/views/social.less',
    'client/views/facebook/facebook.html',
    'client/views/facebook/facebook.coffee',
    'client/views/twitter/twitter.html',
    'client/views/twitter/twitter.coffee',
    'client/views/google/google.html',
    'client/views/google/google.coffee'
  ], 'client');

  api.export('ShareIt', 'client');
});

// Package.onTest(function (api) {
//   api.use(['tinytest',
//     'test-helpers',
//     'templating',
//     'coffeescript'
//     ])
//     api.use('shareit')
// 
//   api.addFiles([
//     'tests/client.html',
//     'tests/client.js'
//     ], 'client')
// })
