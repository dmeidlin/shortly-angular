angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function (){
    Links.getLinksPromise().then(function(data){
      $scope.links = data;
    });
  };
  $scope.getLinks();
});
