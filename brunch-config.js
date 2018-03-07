// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': [/^vendor/, /^(?!app)/], // Files that are not in `app` dir.
      'js/app.js': /^app/
    }
  },
  stylesheets: { joinTo: {
    'css/app.css': /^app/
  }
}
};

exports.notifications = false;
exports.watcher = {
 usePolling: true
};

// Plugins config
exports.plugins = {
  sass: {
    options: {
      includePaths: ['./node_modules/bootstrap/scss/','./node_modules/animate-scss/'],
      precision: 8
    }
  },
  imagemin: {
    plugins: {
      'imagemin-gifsicle': true,
      'imagemin-jpegtran': true,
      'imagemin-optipng': true,
      'imagemin-svgo': true
    },
    pattern: /\.(gif|jpg|jpeg|jpe|jif|jfif|jfi|png|svg|svgz)$/
  },
  postcss: {
    processors: [
    require('autoprefixer')()
    ]
  }
};


// Building to vendor.js
exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery',
    Popper: 'popper.js',
    bootstrap: 'bootstrap',
  }
}
