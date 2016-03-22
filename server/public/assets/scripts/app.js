var studentApp = angular.module("studentApp", []);

studentApp.controller("Controller", ["$scope", "$http", function($scope, $http){
    // $scope.employee = {};

    // $scope.employeeArray = [];

    $scope.getData = function(){

      $scope.accounts;
        $http.get("/students").then(function(response){
          console.log(response.data.students); //array
          $scope.accounts = response.data.students;

        });
    };
    // Right dere
    $scope.getData();
}]);
