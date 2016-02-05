module.factory('FilterFactory',['$resource',function($resource){
    
    var factory={};
    
    factory.getFilterData = function(){
        
        return $resource('/message/filters').get().$promise;
    }
    
    factory.getFilteredData = function(data){
        
        return $resource('/message/filtered/',{id:data}).get().$promise;
    }
    
    return factory;
}]);