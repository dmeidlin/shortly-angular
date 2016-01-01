angular.module('shortly.shorten', [])

    .controller('ShortenController', function ($scope, $location, Links) {
      //clears link from view
      $scope.link = '';	
      $scope.addLink = function(){
      Links.addLink($scope.link);
      //sets form to pristine (not dirty)
      $scope.shortlyForm.$setPristine(true);
  };
});
