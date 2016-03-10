'use strict';


/**
 * @ngdoc function
 * @name sirApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the sirApp
 */
angular.module('sirApp')
  .controller('PersonCtrl', user).controller('PersonPost', postUser);

function user($scope, $http,$location){
  $http({
    method: 'GET',
    url: "/rest/hello/persons/"
  }).then(function successCallback(response) {
    var data ;
    if(response.data.person.name){
      data = [];
      data.push(response.data.person);
      console.log(data)
     }else{
      data =  response.data.person;
     }
     $scope.personlists = data;

  });

  $scope.deletePers = function(id){
    $http({
      method: 'DELETE',
      url: "/rest/hello/persons/"+id,
    }).then(function successCallback(response) {
      $location.path("/person")
    });
  }
}

function postUser($scope, $http, $location){
  $scope.user = {};
 $scope.submitForm = function(){
   $http({
     method: 'POST',
     url: "/rest/hello/persons/",
     data : $scope.user,

   }).then(function successCallback(response) {
      $location.path("/person")
   });
 }

}



