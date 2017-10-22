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
      includePaths: ['./node_modules/bootstrap/scss/','./node_modules/animate-scss/','./node_modules/bootstrap-select/sass/'],
      precision: 8
    }
  },
  autoReload: {
      match: {
        stylesheets: ['*.scss'],
        javascripts: ['*.js']
      }
    }
};



exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery',
    Popper: 'popper.js',
    bootstrap: 'bootstrap',
    bootstrapselect: 'bootstrap-select',
  }
}
