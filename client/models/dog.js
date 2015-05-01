'use strict';

angular.module('animalfarm')
.factory('Dog', function($http, nodeUrl){

  function Dog(object){
    this.name = object.name;
    this.age = object.age;
    this.gender = object.gender;
    this.photo = object.photo;
  }

  Dog.findById = function(dogId){
    return $http.get(nodeUrl + '/dogs/' + dogId);
  }

  Dog.deleteDog = function(dogId){
    return $http.delete(nodeUrl + '/dogs/' + dogId);
  };

  Dog.find = function(){
    return $http.get(nodeUrl + '/dogs');
  };

  Dog.prototype.save = function(){
    //http post saves to the node server
    //nodeUrl is difined in constants
    //this is the payload becasue we are in an instance function
    return $http.post(nodeUrl + '/dogs', this);
  };

    return Dog;
  });
