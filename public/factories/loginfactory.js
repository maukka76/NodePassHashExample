module.factory('LoginFactory',['$resource','$location','$rootScope',function($resource,$location,$rootScope){
    
    var factory = {};
    factory.loginFailed = false;
    factory.userLogin = function(userData){
        var res = $resource('/app/login',{},{post:{method:'POST'}});
        res.post(userData).$promise.then(function(data){
            console.log('logged in');
            $location.path('/user');
        });
    }
    
    factory.userRegister = function(userData){
        return $resource('/app/register',{},{post:{method:'POST'}}).post(userData).$promise;
    }
    
    $rootScope.$on('rootScope:broadcast',function(event,data){
      factory.loginFailed = true;
    });
    
    return factory;
}]);