var todoApp = angular.module('todoApp', []);
var categoriesController = todoApp.controller('CategoriesController', ['$scope', function($scope)
{
    $scope.categories = Categories('../restfest-listomatic-schema/resourcemap.example.html');
}]);

var categoryController = todoApp.controller('CategoryController', ['$scope', function($scope)
{
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

  }])
  .controller('CategoryController', ['$scope', function($scope) {
    $scope.categories = Categories();
  }]);
