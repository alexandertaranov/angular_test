
var dataTable = angular.module('dataTable', []);
dataTable.controller('NewsListController', function($scope){
    $scope.news = [
        {'number': "1",
            'text': "Apache2",
            'date': "23.01.14"},
        {'number': "2",
            'text': "Virtual Box",
            'date': "21.01.14"},
        {'number': "3",
            'text': "Bodog",
            'date': "25.01.14"}
    ];
    $scope.filterName = undefined;
    $scope.sort = function(filterValue) {
        if ($scope.filterName != filterValue){
            $scope.filterName = filterValue;
        }
        else {
            $scope.filterName = undefined;
        }
    }
});
