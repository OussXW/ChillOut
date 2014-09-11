angular.module('app').controller('mvSpotifyListCtrl', function($scope) {


  $scope.sortOptions = [{value:"title",text: "Sort by Title"},
        {value: "published",text: "Sort by Publish Date"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});