angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(){
    Links.addLink($scope.link);
    $scope.link = {};
    if($scope.shortlyForm){
      $scope.shortlyForm.$setPristine(true);
    }
  };
});
