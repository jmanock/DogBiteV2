(function() {
  'use strict';

  angular
    .module('dogBiteV2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $scope) {
    var vm = this;
    $scope.title = 'ToDo';
    $scope.tasks = [
      
    ];
    $scope.tasksComplete = [

    ];
    $scope.createTask = function(){
      var task = [];
      $scope.tasks.unshift({
        title:$scope.newTitle,
        date:Date.now()
      });
      $scope.newTitle = '';
    };
    $scope.removeTask = function(index){
      var task = $scope.tasks[index];
      $scope.tasks.splice($scope.tasks.indexOf(task),1);
    };
    $scope.completeTask = function(index){
      var task = $scope.tasks[index];
      task.complete = true;
      $scope.tasks.splice($scope.tasks.indexOf(task),1);
      $scope.tasksComplete.unshift(task);
    };
    $scope.uncompleteTask = function(index){
      var task = $scope.tasksComplete[index];
      $scope.tasksComplete.splice($scope.tasksComplete.indexOf(task),1);
      $scope.tasks.unshift(task);
    };
    $scope.taskLength = function(){
      return $scope.tasks.length + $scope.tasksComplete.length;
    };
    $scope.taskCompletionTotal = function(unit){
      var total = $scope.taskLength();
      return Math.floor(100/total * unit);
    };
  }
})();
