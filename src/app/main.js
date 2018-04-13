module.exports = {
  template: require('./main.html'),
  controller: routerCtrl
};

function routerCtrl($scope, $log) {
  $scope.$log = $log;
}
