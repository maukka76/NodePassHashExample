module.controller('DeleteController',['$scope','DeleteFactory',function($scope,DeleteFactory){
    
    $scope.del = {};
    
    
    DeleteFactory.getMessagesForUser().then(function(data){
        $scope.del.messages = data.messages;
        $scope.del.name = data.name;
    });
    
    $scope.del.delete = function(id){
        
        //Remove data from local array
        for(var i = 0;i < $scope.del.messages.length; i++){
            
            if($scope.del.messages[i]._id === id){
                $scope.del.messages.splice(i,1);
            }
        }
        //Remove from database
        DeleteFactory.deleteMessage(id).then(function(data){
            
            console.log(data);
        });
    }
    
}]);