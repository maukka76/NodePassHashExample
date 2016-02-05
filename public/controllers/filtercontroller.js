module.controller('FilterController',['$scope','FilterFactory',function($scope,FilterFactory){
    
    $scope.filter = {};
    
    $scope.filter.nodata = "Search messages by name or subject"
    
    FilterFactory.getFilterData().then(function(data){
        $scope.filter.names = data.names;
        $scope.filter.subjects = data.subjects;
    });
    
    
    $scope.filter.getResults = function(){
      
        var queryObject = {};
        if($scope.filter.s_name != undefined && $scope.filter.s_name != null){
            queryObject.query1 = {name:$scope.filter.s_name};
        }
        else{
            queryObject.query1 = {};
        }
        if($scope.filter.s_subject !== undefined && $scope.filter.s_subject != null){
            queryObject.query2 = {path:'messages',match:{subject:$scope.filter.s_subject}};
        }
        else{
           queryObject.query2 = {path:'messages'}; 
        }
        
        FilterFactory.getFilteredData(queryObject).then(function(data){
            try{
                if(data.all[0].messages.length === 0){
                    $scope.filter.nodata = 'No results for your search.Sorry!'
                }
                else{
                    $scope.filter.nodata = "";
                    $scope.filter.messages = data.all[0].messages;
                    $scope.filter.sender = data.all[0].name;
                }
            }
            catch(err){
                $scope.filter.nodata = 'No results for your search.Sorry!'
            }
        });
    }
    
}]);