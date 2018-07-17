(function (){
  'use strict';

  angular
    .module('dogBiteV2')
    .controller('SummaryController', SummaryController);

  function SummaryController($log, $stateParams, $window){
    var vm = this;

    var dog = $stateParams.dogs;

    vm.Something = function(x){
      $log.log(x);
    };

    vm.title = 'Summary';
    vm.states = states;
    vm.dogList = [];

    vm.dogList.push(
      {
        name:dog.name,
        email:dog.email,
        state:dog.state
      }
    );

    vm.Top = function(){
      $window.scrollTo(0,0);
    };

    vm.Edit = function(x,y){
      if(x === 'Edit'){
        vm.title = 'Edit Dog';
        vm.dogs = y;
      }else{
        vm.title = 'New Dog';
        vm.dogs = '';
      }
      vm.addEdit = true;
      vm.summary = true;
      vm.Top();
    };

    vm.Save = function(dog){
      if(vm.title === 'Edit Dog'){
        vm.doggie = dog;
      }else{
        vm.dogList.push(
          {
            name:dog.name,
            email:dog.email,
            state:dog.state
          }
        );
      }
      vm.addEdit = false;
      vm.summary = false;
      vm.title = 'Summary';
      vm.Top();
    };

    vm.Remove = function(index){
      vm.dogList.splice(index, 1);
    };

    vm.Back = function(){
      vm.Insured = false;
      vm.summary = false;
      $('#insForm').empty();
    }

    vm.Change = function(){
      vm.Insured = true;
      vm.summary = true;

    }; // End `Change`
    vm.quantity = '0';
    vm.available = '10';

    vm.range = function(num){
      num = parseInt(num);
      return new Array(num);
    };
    vm.something = function(x,y){
      $log.log(x,y);
    };

  }
})();

var states = [
  'Alabama',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennslvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
];
