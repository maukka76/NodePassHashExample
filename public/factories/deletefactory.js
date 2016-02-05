module.factory('DeleteFactory',['$resource',function($resource){
    
    var factory = {};
    factory.getMessagesForUser = function(){
        
        return $resource('/message/forUser').get().$promise;
    }
    
    factory.deleteMessage = function(id){
        
        return $resource('/message/',{id:id}).delete().$promise
        
    }
    
    return factory;
}]);