'use strict';

angular.module('animalfarm')
.controller('DogsEditCtrl', function($scope, $state, Dog, $window){
  Dog.findById($state.params.dogId)
  .then(function(response){
    $scope.dog = response.data;
  });
  $scope.addDog = function(dog){
    //calls the save instance function in factory
    Dog.put(dog)
    .then(function(){
      $state.go('dogs.list');
    })
    .catch(function(){
      $window.swal({title: 'Add Dog Error', text: 'There was a problem with your doggie. Please try again.', type: 'error'});
    });
  };
});
