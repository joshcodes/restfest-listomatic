angular.module('todoApp', [])
  .controller('TodoController', ['$scope', function($scope) {

    $scope.todoList = TodoList();

    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.addTodo = function() {
      $scope.todoList.addTodo($scope.todoText, false);
      $scope.todoText = '';
    };
 
    $scope.archive = function() {
      $scope.todoList.archive();
    };
  }]);
