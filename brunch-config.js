// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': [/^vendor/, /^(?!app)/], // Files that are not in `app` dir.
      'js/app.js': /^app\/js/
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
};



exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery',
    Popper: 'popper.js'
  }
}
