(function() {
  'use strict';

  angular
    .module('dogBiteV2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var vm = this;

    // vm.something=true;
    // vm.records = [
    //   {name:'Jon Smith', city:'Manhattan', state:'Ny'},
    //   {name:'Maria Rodriguez', city:'Brooklyn', state:'Ny'},
    //   {name:'Michael Garcia', city:'Queens', state:'Ny'}
    // ];
    // vm.add = function($index) {
    //   vm.records.push({name:'', city:'', state:''});
    // }
    // vm.remove = function(record, $index){
    //   vm.records.splice($index,1);
    //   $log.log(record);
    // }
    // vm.edit = function($event,$index){
    //   //should only be able to edit one row
    //   //vm.something=false;
    //   $log.log($event, $index);
    // }

    vm.user = userFactory.getUser();
    vm.editorEnabled = [];
    vm.enableEditor = function(index){
      vm.editorEnabled[index] = true;
      vm.editName = vm.user.name;
      vm.editName = vm.users.name;
      vm.editMail = vm.user.mail;
      vm.editMail = vm.users.mail;
    };
    vm.save = function(index, editNameValue, editEmailValue){
      vm.users[index].name = editNameValue;
      vm.users[index].mail = editEmailValue;
      vm.disableEditor(index);
    };
    vm.disableEditor = function(index){
      vm.editorEnabled[index] = false;
    };
    vm.users = userFactiry.getUsers();
  }
  var factories = angular.module('factories', []);
  factories.factory('userFactory',  function(){
    var factory = {
      getUser:getUser,
      getUsers:getUsers
    }
    return factory;
    function getUser(){
      var user = {
        name:'henk2',
        mail:'aaa@gmail.com'
      }
      return user;
    }
    function getUsers(){
      var users = [
        {name:"Bert", mail:'bert@gmail.com'},
        {name:'Giel', mail:'giel@gmail.com'},
        {name:'Willem', mail:'willem@gmail.com'}
      ];
      return users;
      selected:{}
    }
  });
  factories.factory('carFactory', function(){
    var factory = {
      getCar:getCar
    }
    return factory;
    function getCar(){
      var car = {
        color:'black',
        maxSpeed:200,
        name:'Audi r8 spyder'
      }
      return car;
    }
  });
  factories.factory('petFactory', function(){
    var factory = {
      getPet:getPet
    }
    return factory;
    function getPet(){
      var pet = {
        name:"vlekje",
        sport:'cat',
        age:6
      }
      return pet;
    }
  });
})();
