var app=angular.module("myApp",[])
	
	.controller('myCtrl', function($scope) {

    	$scope.message = "Hello";

    	$scope.list=[1,2,3,4]

    	$scope.addToEach=function(num){ //adds num to each element of list
    		for(var i in $scope.list){
    			$scope.list[i]+=num
    		}
    	}

	});
	