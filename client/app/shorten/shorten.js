angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.addLink = function(){
    Links.addLink($scope.link);
  };
});
