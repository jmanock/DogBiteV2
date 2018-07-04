(function(){
  'use strict';

  angular
    .module('dogBiteV2')
    .directive('acmeFooter', acmeFooter);

  function acmeFooter(){
    var directive = {
      restrict:'E',
      templateUrl:'app/components/navbar/footer.html',
      scope:{
        creationDate:'='
      },
      controller:FooterController,
      controllerAs:'vm',
      bindToController:true
    };
    return directive;

    function FooterController($window){
      var vm = this;
      vm.Top = function(){
        $window.scrollTo(0,0);
      }
    }
  }
})();
