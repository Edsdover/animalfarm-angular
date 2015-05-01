'use strict';

angular.module('animalfarm')
.controller('NavCtrl', function($rootScope, $scope, $state, User){

  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
    }else{
      $rootScope.activeUser = null;
    }

    $state.go('home');
  });

  $scope.logout = function(){
    User.logout();
  };
  function getDisplayName(data){
  switch(data.provider){
    case 'password':
      return data.password.email;
    case 'twitter':
      return data.twitter.displayName;
    case 'github':
      return data.github.displayName;
    case 'google':
      return data.google.displayName;
    case 'facebook':
      return data.facebook.displayName;
    }
  }
});
