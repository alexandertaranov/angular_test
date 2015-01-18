'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
  $scope.title = 'Phones';

    $http.get('phones/phones.json').success(function(data, status, headers, config){
        console.log('Data:', data, '\n\n Status:', status, '\n\n Headers:', headers, '\n\n Config:', config);
        $scope.phones = data;
    });

    $scope.doneAndFilter = function(phi) {
        return phi.name;//&& phi.priority > 1;
    }

});

var dataTable = angular.module('dataTable', []);
dataTable.controller('NewsListController', function($scope){
    $scope.news = [
        {'number': "1",
            'text': "Apache2",
            'date': "23.01.18"},
        {'number': "2",
            'text': "Virtual Box",
            'date': "21.01.14"},
        {'number': "3",
            'text': "Bodog",
            'date': "25.01.14"}
    ];
    $scope.sortField = undefined;
    $scope.reverse = false;

    $scope.sort = function(fieldName) {
        if ($scope.sortField === fieldName){
            $scope.reverse = !$scope.reverse;
        }
        else {
            $scope.sortField = fieldName;
            $scope.reverse = false;
        }
    };
});
