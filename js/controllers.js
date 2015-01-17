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
