(function(){
    'use strict';
    angular.module('myApp', []).controller('lunchController', lunchController);
    lunchController.$inject = ['$scope'];
    function lunchController($scope){
        $scope.checkItems = function(str){
            if(!str || 0 === str.length){
                $scope.resaultCheck = 'Please enter data first';
                $scope.active = 'redFocus';
                $scope.textColor = 'def';
            }else{
                $scope.active = 'greenFocus';
                $scope.inputColor = 'red';
                var strArrey = str.split('');
                var count = 0;
                for(var i = 0; i < strArrey.length; i++){
                    if(strArrey[i] === ','){
                        count++;
                    }
                }
                if( count < 3){
                    $scope.resaultCheck = "Enjoy!";
                    $scope.textColor = 'green';
                }else{
                    $scope.resaultCheck = "Too much!";
                    $scope.textColor = 'red';
                    
                }
            }
        };
    };
}());
