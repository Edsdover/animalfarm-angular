'use strict';

angular.module('animalfarm')
.controller('DogsListCtrl', function($scope, Dog, $state){
  //we want all the dogs so we want to use class method

  //calls class function in the factory
  Dog.find()
  .then(function(response){
    $scope.dogs = response.data.dogs;
  });

  $scope.editDog = function(obj){
    Dog.editDog(obj._id)
    .then(function(response){
      $state.go('dogs.edit', response);
    });
  };

  $scope.deleteDog = function(obj){
    Dog.deleteDog(obj._id)
    .then(function(response){
      _.remove($scope.dogs, function(dog){
        return dog._id === response.data._id;
      });
    });
  };
});
