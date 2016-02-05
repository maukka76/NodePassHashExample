module.controller('MessageController',['$scope','LoginFactory','SocketFactory',function($scope,LoginFactory,SocketFactory){
    
    $scope.message = {};
    $scope.message.messages = [];
    
    SocketFactory.getRecentPosts().then(function(data){
        $scope.message.messages = data.messages;
        $scope.message.user = data.name;
    });
    
    $scope.message.send = function(){
        var message = {};
        message.owner = $scope.message.user;
        message.subject = $scope.message.subject;
        message.text = $scope.message.text;
        message.timestamp = new Date();
        
        SocketFactory.sendMessage(message);
        $scope.message.subject = "";
        $scope.message.text = "";
    }
    //Will be called when server send socket response
    SocketFactory.notify = function(data){
        $scope.message.messages.push(data);
        $scope.$apply();
    };
    
}]);