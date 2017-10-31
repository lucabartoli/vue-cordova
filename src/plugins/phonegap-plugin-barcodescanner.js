exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof window.barcodeScanner === 'undefined') {
      return cb(false)
    }

    // pass through the barcodeScanner object
    Vue.cordova.barcodeScanner = window.barcodeScanner

    return cb(true)

  }, false)
}
