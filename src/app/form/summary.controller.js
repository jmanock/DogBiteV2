(function (){
  'use strict';

  angular
    .module('dogBiteV2')
    .controller('SummaryController', SummaryController);

  function SummaryController($log, $stateParams, $window){
    var vm = this;

    var dog = $stateParams.dogs;

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

    vm.Change = function(x){
      vm.Insured = true;
      vm.summary = true;
      // Need to think about what to do if its 0
      for(var i = 1; i<=x; i++){
        $('#insForm').append(
          "<div class='form-group'>"+
            "<label class='form-control-label'>Interest Name:</label>"+
            "<input type='text' class='form-control' ng-model='summary.additionalInsured.interestName"+i+"'>"+
          "</div>"
        );
        $('#insForm').append(
          "<div class='form-group'>"+
            "<label class='form-control-label'>Relationship:</label>"+
            "<select class='form-control' ng-model='summary.additionalInsured.relationship" +i+"'>"+
              "<option value='' selected disabled>Please Choose...</option>"+
              "<option value='Landlord'>Landlord</option>"+
              "<option value='Employer'>Employer</option>"+
              "<option value='Government'>Governmental Entity</option>"+
              "<option value='Other'>Other</option>"+
            "</select>"+
          "</div>"
        );
        $('#insForm').append(
          "<div class='form-group'>"+
            "<label class='form-control-label'>Address:</label>"+
            "<input class='form-control' type='text' placeholder='1234 Main St.' ng-model='summary.additionalInsured.address"+i+"'>"+
          "</div>"
        );
        $('#insForm').append(
          "<div class='form-group'>"+
            "<label class='form-control-label'>Address 2:</label>"+
            "<input type='text' class='form-control' placeholder='Apartment, studio, or floor' ng-model='summary.additionalInsured.address2"+i+"'>"+
          "</div>"
        );
        $('#insForm').append(
          "<div class='form-row'>"+
            "<div class='form-group col-md-6'>"+
              "<label class='form-control-label'>City:</label>"+
              "<input type='text' class='form-control' ng-model='summary.additionalInsured.city"+i+"'>"+
            "</div>"+
            "<div class='form-group col-md-4'>"+
              "<label class='form-control-label'>State:</label>"+
              "<select class='form-control' ng-model='summary.additionalInsured.state"+i+"' ng-options='item for item in summary.states'>"+
                "<option selected disabled>Please Choose...</option>"+
              "</select>"+
            "</div>"+
            "<div class='form-group col-md-2'>"+
              "<label class='form-control-label'>Zip:</label>"+
              "<input type='number' class='form-control' ng-model='summary.additionalInsured.zip"+i+"'>"+
            "</div>"+
          "</div>"
        );
        $('#insForm').append(
          "<div class='form-row'>"+
            "<div class='form-group col-md-6'>"+
              "<label class='form-control-label'>Contact First Name:</label>"+
              "<input type='text' class='form-control' ng-model='summary.additionalInsured.contactFirstName"+i+"'>"+
            "</div>"+
            "<div class='form-group col-md-6'>"+
              "<label class='form-control-label'>Contact Last Name:</label>"+
              "<input type='text' class='form-control' ng-model='summary.additionalInsured.contactLastName"+i+"'>"+
            "</div>"+
          "</div>"
        );
        $('#insForm').append(
          "<div class='form-row'>"+
            "<div class='form-group col-md-8'>"+
              "<label class='form-control-label'>Email:</label>"+
              "<input type='email' class='form-control' ng-model='summary.additionalInsured.contactEmail"+i+"'>"+
            "</div>"+
            "<div class='form-group col-md-4'>"+
              "<label class='form-control-label'>Phone #:</label>"+
              "<input type='number' class='form-control' ng-model='summary.additionalInsured.contactPhone"+i+"'>"+
            "</div>"+
          "</div>"
        );
      };

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
