(function(){
    'use strict';
    angular.module('myApp', []).controller('lunchController', lunchController);
    lunchController.$inject = ['$scope'];
    function lunchController($scope){
        $scope.checkItems = function(str){
            if(!str || 0 === str.length){
                $scope.resultCheck = 'Please enter data first';
                $scope.active = 'text-danger';
               
            }else{
                $scope.active = 'text-success';
                $scope.inputColor = 'text-danger';
                var strArrey = str.split('');
                var count = 0;
                for(var i = 0; i < strArrey.length; i++){
                    if(strArrey[i] === ','){
                        count++;
                    }
                }
                if( count < 3){
                    $scope.resultCheck = "Enjoy!";
                    $scope.color = 'text-success';
                }else{
                    $scope.resultCheck = "Too much!";
                    $scope.color = 'text-danger';
                    
                }
            }
        };
    };
}());
