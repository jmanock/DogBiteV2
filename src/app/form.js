module.exports = {
  template: require('./form.html'),
  controller: DogForm
};

function DogForm($scope, $log) {
  $scope.$log = $log;
  $log.log('Does this do anything?');
  $scope.myFun = function () {
    $log.log('Hi');
  };
}
