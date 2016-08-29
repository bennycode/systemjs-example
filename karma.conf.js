module.exports = function(config) {
  config.set({
    autoWatch: false,
    basePath: '',
    browsers: ['Chrome'],
    colors: true,
    concurrency: Infinity,
    exclude: [],
    files: [
      'dist/lib/system.js/dist/system.js',
      'dist/js/**/*.js',
      'test/js/**/*Spec.js'
    ],
    frameworks: ['jasmine'],
    logLevel: config.LOG_DEBUG,
    port: 9876,
    preprocessors: {},
    reporters: ['progress'],
    singleRun: true
  })
};
