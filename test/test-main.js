var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/-spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}


function loadFixtures(filename){
  var el = document.createElement('div');
  el.id = 'fixtures-container-' + filename;
  el.innerHTML = window.__html__['test/'+ filename +'.html'];
  document.body.appendChild(el);

  return el;
}

function removeFixtures(filename){
  document.body.removeChild(document.getElementById('fixtures-container-' + filename));
}

var fixtureFiles = ['audioElement', 'waveformContainer'];
var loadAllFixtures = fixtureFiles.forEach.bind(fixtureFiles, loadFixtures);
var removeAllFixtures = fixtureFiles.forEach.bind(fixtureFiles, removeFixtures);

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base',

    paths: {
        'peaks': 'src/main',
        'waveform-data': 'bower_components/waveform-data/dist/waveform-data',
        'EventEmitter': 'bower_components/eventEmitter/EventEmitter.min',
        'Kinetic': 'bower_components/KineticJS/index'
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

