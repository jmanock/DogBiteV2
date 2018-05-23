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
    ctrl.doglist = [];
    // ctrl.Next = function(){
    //   ctrl.doglist.push(
    //     {name:ctrl.dog.name, email:ctrl.dog.email, state:ctrl.dog.state, color:ctrl.dog.color, edit:false}
    //   );
    //   ctrl.personInfo = true;
    //   ctrl.dogInfo = true;
    //   ctrl.summary = true;
    //    ctrl.dog = '';
    //    ctrl.form = true;
    //    $scope.currentPercentage = '60';
    // }
    // ctrl.Remove = function(index){
    //   $log.log(index);
    //   ctrl.doglist.splice(index,1);
    // };
    // ctrl.Edit = function(dog){
    //   ctrl.edits = true;
    //   ctrl.summary = false;
    //   ctrl.dogs = dog;
    //   $log.log(dog);
    // }
    // ctrl.save = function(dog){
    //   ctrl.summary = true;
    //   ctrl.edits = false;
    // };
    // ctrl.Add = function(){
    //   ctrl.form = false;
    //   ctrl.summary = false;
    // }

    ctrl.Next = function(dog, x){
      ctrl.doglist.push(
        {name:ctrl.dog.name, email:ctrl.dog.email, state:ctrl.dog.state, color:ctrl.dog.color, age:ctrl.dog.age}
      );
      if(x === 'd'){
        ctrl.personInfo = true;
        ctrl.dogInfo = true;
        $scope.currentPercentage = '25';
        $log.log(dog);
      }else if(x === 's'){
        ctrl.summary = true;
        ctrl.dogInfo = false;
        $scope.currentPercentage = '50';
      }
    };
    ctrl.Summary = function(){
      $scope.currentPercentage = '75';
    };
    ctrl.Calculate = function(){
      $scope.currentPercentage = '99';
      ctrl.finish = true;
      ctrl.summary = false;
    };

  }
})();
