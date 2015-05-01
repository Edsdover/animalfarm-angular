'use strict';

angular.module('animalfarm')
.controller('DogsNewCtrl', function($scope, $state, $window, Dog){
  $scope.addDog = function(object){
    //constructor
    var dog = new Dog(object);
    //calls the save instance function in factory
    dog.save()
    .then(function(){
      $state.go('dogs.list');
    })
    .catch(function(){
      $window.swal({title: 'Add Dog Error', text: 'There was a problem with your doggie. Please try again.', type: 'error'});
    });
  };
});
