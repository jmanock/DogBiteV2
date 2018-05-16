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
      {title:'take it out', complete:false},
      {title:'Wash', complete:false}
    ];
    $scope.tasksComplete = [
      {title:'Something alot', complete:true},
      {title:'Dogs', complete:true}
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
  }
})();
