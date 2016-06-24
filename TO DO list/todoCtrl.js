app.controller('todoCtrl', function($scope) {
  $scope.todoList = [];

  $scope.todoAdd = function() {
    $scope.todoList.push({todoText: $scope.todoInput, dueDate: $scope.dueDate, done:false });
    $scope.todoInput = "";
    $scope.dueDate = "";

    $scope.remove = function() {
      var oldList = $scope.todoList;
      $scope.todoList = [];
      angular.forEach(oldList, function(x) {
        if (!x.done) $scope.todoList.push(x);
      })
    }
  }
})
