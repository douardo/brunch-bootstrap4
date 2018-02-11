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

exports.plugins = {
  babel: {
    presets: ['latest']
  },
  sass: {
    options: {
      includePaths: ['./node_modules/bootstrap/scss/','./node_modules/animate-scss/'],
      precision: 8
    }
  },
  autoReload: {
    match: {
      stylesheets: ['*.scss'],
      javascripts: ['*.js']
    }
  },
  postcss: {
    processors: [
    require('autoprefixer')()
    ]
  },
  imagemin: {
    plugins: {
      'imagemin-gifsicle': true,
      'imagemin-jpegtran': true,
      'imagemin-optipng': true,
      'imagemin-svgo': true
    },
    pattern: /\.(gif|jpg|jpeg|jpe|jif|jfif|jfi|png|svg|svgz)$/
  }
};



exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery',
    Popper: 'popper.js',
    bootstrap: 'bootstrap',
  }
}
