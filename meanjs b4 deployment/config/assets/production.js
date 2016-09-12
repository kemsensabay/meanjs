'use strict';

/* eslint comma-dangle:[0, "only-multiline"] */

module.exports = {
  client: {
    lib: {
      css: [
        // bower:css
        'public/lib/bootstrap/dist/css/bootstrap.min.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
        // endbower
        'public/lib/jquery-ui/jquery-ui.css',
        'public/lib/jquery-ui/jquery-ui.theme.css'
      ],
      js: [
        'public/lib/jquery/dist/jquery.js',
        'public/lib/jquery-ui/jquery-ui.js',
        // bower:js
        'public/lib/angular/angular.min.js',
        'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'public/lib/angular-file-upload/dist/angular-file-upload.min.js',
        'public/lib/angular-messages/angular-messages.min.js',
        'public/lib/angular-mocks/angular-mocks.js',
        'public/lib/angular-resource/angular-resource.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        // endbower
        'public/lib/bootstrap/dist/js/bootstrap.js'
      ]
    },
    css: 'public/dist/application.min.css',
    js: 'public/dist/application.min.js'
  }
};
