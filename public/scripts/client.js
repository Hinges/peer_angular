/**
 * Created by acoelho on 1/8/16.
 */
var app = angular.module('myApp',[]);

var i = 0;

app.controller('myController', function($scope, $http){

    $scope.chooseWinner = function(){
        i = randomNumber(0, 1);
        if(i == 0){
            $scope.presidentWinner = $scope.democratNominee;
        } else if(i == 1){
            $scope.presidentWinner = $scope.republicanNominee;
        }
    };

    $scope.chooseCandidate = function () {
        $http({
            method: 'GET',
            url: '/getDem'
        }).then(function (response) {
            i = randomNumber(0, response.data.length-1);
            $scope.democratNominee = response.data[i].name;
        });

        $http({
            method: 'GET',
            url: '/getRep'
        }).then(function (response) {
            var i = randomNumber(0, response.data.length-1);
            $scope.republicanNominee = response.data[i].name;
        });
    };


})


var randomNumber = function(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min );
};

//module.exports = randomNumber;