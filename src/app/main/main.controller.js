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
    vm.model = {
      contacts:[
        {id:1, name:'Ben', age:'28', state:'New York'},
        {id:2, name:'Sally', age:'24', state:'Iowa'},
        {id:3, name:'John', age:'32', state:'Georiga'},
        {id:4, name:'Jane', age:'40', state:'New York'}
      ],
      selected:{}
    };
    vm.getTemplate = function(contact){
      if(contact.id === vm.model.selected.id){
        return 'edit';
      }else{
        return 'display';
      }
    };
    vm.editContact = function(contact){
      vm.model.selected = angular.copy(contact);
    };
    vm.saveContact = function(idx){
      // $log.log('Saving contact');
       vm.model.contacts[idx] = angular.copy(vm.model.selected);
      //$log.log(vm.model.contacts[idx]);
      vm.reset();
    };
    vm.reset = function(){
      vm.model.selected = {};
    };
    vm.add = function(){
      // Id should be plus one
      var id = vm.model.contacts.id;
      id = vm.model.contacts.length + 1;
      $log.log(id);
      vm.model.contacts.push({id:id, name:'', age:'', state:''});
    };
    vm.delete = function(name){
      // Need to change the id number
      // Need to remove row
      var index = -1;
      var comArr = eval(vm.model.contacts);
      for (var i = 0; i<comArr.length; i++){
        if(comArr[i].name === name){
          index = i;
          break;
        }
      }
      if(index === -1){
        alert('Something went wrong');
      }
      vm.model.contacts.splice(index, 1);
    }
  }
})();
