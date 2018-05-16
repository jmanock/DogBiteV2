(function() {
  'use strict';

  angular
    .module('dogBiteV2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $scope) {
    var ctrl = this;
    // $scope.title = 'ToDo';
    // $scope.tasks = [
    //
    // ];
    // $scope.tasksComplete = [
    //
    // ];
    // $scope.createTask = function(){
    //   var task = [];
    //   $scope.tasks.unshift({
    //     title:$scope.newTitle
    //   });
    //   $scope.newTitle = '';
    // };
    // $scope.removeTask = function(index){
    //   var task = $scope.tasks[index];
    //   $scope.tasks.splice($scope.tasks.indexOf(task),1);
    // };
    // $scope.Edit = function(index){
    //   $log.log(index);
    // };
    // $scope.uncompleteTask = function(index){
    //   var task = $scope.tasksComplete[index];
    //   $scope.tasksComplete.splice($scope.tasksComplete.indexOf(task),1);
    //   $scope.tasks.unshift(task);
    // };
    // $scope.taskLength = function(){
    //   return $scope.tasks.length + $scope.tasksComplete.length;
    // };
    // $scope.taskCompletionTotal = function(unit){
    //   var total = $scope.taskLength();
    //   return Math.floor(100/total * unit);
    // };

    ctrl.tasklist = [];
    ctrl.addTask = function(){
      ctrl.tasklist.push(
        {desc: ctrl.taskInput, done:false, edit:false}
      );
      ctrl.taskInput = '';
    }
  }
})();
