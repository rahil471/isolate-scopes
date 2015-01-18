var testApp = angular.module('testApp',[]);
testApp.directive('myDirective',function(){
	return {
		restrict:'E',
		template:'<label>My Directive: <input type="text" ng-model="userinput" ng-change="invoked()" class="form-control"/></label>'
				+'<p>{{displaytext}} : {{userinput}}</p>',
		controller:function($scope){
			$scope.displaytext = 'Waiting for user to type';
			$scope.invoked = function(){       //Will call this function on change and update the value of displaytext variable.
				$scope.displaytext = 'User Typed';
			}
		}
	}
});


testApp.directive('isoDirective',function(){   //Directive with isolated scope.
	return {
		restrict:'E', 
		scope:{}, //Isolate Scope
		template:'<label>Iso Directive: <input type="text" ng-model="userinput" ng-change="invoked()" class="form-control"/></label>'
				+'<p>{{displaytext}} : {{userinput}}</p>',
		controller:function($scope){
			$scope.displaytext = 'Waiting for user to type';
			$scope.invoked = function(){       //Will call this function on change and update the value of displaytext variable.
				$scope.displaytext = 'User Typed';
			}
		}
	}
});