module.exports = {
  template: require('./form.html'),
  controller: DogForm
};

function DogForm($scope, $log) {
  $scope.$log = $log;
  $scope.Name = function (DogName) {
    $log.log(DogName);
    $scope.dogInfo = true;
    $scope.personInfo = true;
  };

  $scope.Personal = function (DogName) {
    $scope.log(DogName);
  };
}
