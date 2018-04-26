(function() {
  'use strict';

  angular
    .module('dogBiteV2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
