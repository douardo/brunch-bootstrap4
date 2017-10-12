// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: { joinTo: {
    'app.css': /^app/
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
