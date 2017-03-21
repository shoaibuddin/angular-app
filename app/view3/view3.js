'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function($scope, ergastAPIservice) {

  $scope.nameFilter = null;
    $scope.driversList = [];

    ergastAPIservice.getDrivers().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });

   // $scope.driversList = [
   //    {
   //        Driver: {
   //            givenName: 'Sebastian',
   //            familyName: 'Vettel'
   //        },
   //        points: 322,
   //        nationality: "German",
   //        Constructors: [
   //            {name: "Red Bull"}
   //        ]
   //    },
   //    {
   //        Driver: {
   //        givenName: 'Fernando',
   //            familyName: 'Alonso'
   //        },
   //        points: 207,
   //        nationality: "Spanish",
   //        Constructors: [
   //            {name: "Ferrari"}
   //        ]
   //    }
   //  ];

});