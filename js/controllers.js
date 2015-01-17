'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.title = 'Phones';
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
     'status':true,
     'priority': 3},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.',
     'status':true,
     'priority': 1},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.',
     'status': true,
     'priority': 2}
  ];
    var date = new Date();
    $scope.today = date;

    $scope.doneAndFilter = function(phi) {
        return phi.name && phi.priority > 1;
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
